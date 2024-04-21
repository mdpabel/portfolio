'use client';
import markdownit from 'markdown-it';
import hljs from 'highlight.js';

import 'highlight.js/styles/github.css';

const md = markdownit({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        const highlightedCode = hljs.highlight(lang, str, true).value;
        const lines = highlightedCode.split('\n').map((line, index) => {
          // Add line numbers to each line
          return `<span class="line">${index + 1}</span>${line}`;
        });

        return `${lines.join('\n')}`;
      } catch (__) {}
    }

    return '';
  },
});

const Content = ({ content }: { content: string }) => {
  return (
    <article className='prose max-w-full'>
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(content),
        }}
      />
    </article>
  );
};

export default Content;
