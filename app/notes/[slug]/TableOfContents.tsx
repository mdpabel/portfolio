import React, { useEffect, useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import toc from 'remark-toc';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';

const TableOfContents = ({ content }: { content: string }) => {
  const [tocHtml, setTocHtml] = useState('');

  useEffect(() => {
    const generateToc = async () => {
      const tocResult = await remark()
        .use(toc, { heading: 'Table of contents', maxDepth: 3 })
        .use(html)
        .process(content);

      const parsedTocHtml = tocResult.toString();

      const processedResult = await unified()
        .use(rehypeParse, { fragment: true })
        .use(rehypeRaw)
        .use(() => (tree) => {
          const filteredTree = {
            ...tree,
            //@ts-ignore
            children: tree.children.filter((node, index) => {
              if (node.tagName === 'h2' && index === 0) return true;
              if (node.tagName === 'ul' && index === 2) return true;
              return false;
            }),
          };
          return filteredTree;
        })
        .use(rehypeStringify)
        .process(parsedTocHtml);

      setTocHtml(processedResult.toString());
    };

    generateToc();
  }, [content]);

  console.log(tocHtml);

  return <div className='toc' dangerouslySetInnerHTML={{ __html: tocHtml }} />;
};

export default TableOfContents;
