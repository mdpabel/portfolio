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
        return `<pre><code>${lines.join('\n')}</code></pre>`;
      } catch (__) {}
    }

    return ''; // use external default escaping
  },
});

const Content = ({ content }: { content: string }) => {
  return (
    <div className='pros'>
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(content),
        }}
      />
    </div>
  );
};

export default Content;
