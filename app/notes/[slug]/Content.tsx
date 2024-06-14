'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CodeCopyBtn from './CodeCopyBtn';
import { ReactNode } from 'react';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

const Pre = ({ children }: { children: ReactNode }) => (
  <pre className='blog-pre'>
    <CodeCopyBtn>{children}</CodeCopyBtn>
    {children}
  </pre>
);

const Content = ({ content }: { content: string }) => {
  return (
    <article className='max-w-full prose'>
      <ReactMarkdown
        className='post-markdown'
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        remarkPlugins={[
          remarkGfm,
          [remarkToc, { heading: 'Table of Contents', maxDepth: 3 }],
          // @ts-ignore
          [remarkAutolinkHeadings, { behavior: 'wrap' }],
        ]}
        components={{
          // @ts-ignore
          pre: Pre,
          code({ node, className = 'blog-code', children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                // @ts-ignore
                style={a11yDark}
                language={match[1]}
                PreTag='div'
                {...props}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}>
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default Content;
