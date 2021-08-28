# HarukiNotes - a simple HTML document generator from Markdown

This is a small project to generate cute HTML documents out of Markdown files.

## Quick setup

1. Download and open this Node.js project
2. Install dependencies:

   ```
   npm install glob js-yaml katex markdown-it markdown-it-emoji markdown-it-sub markdown-it-sup markdown-it-mark markdown-it-ins markdown-it-footnote markdown-it-deflist markdown-it-abbr markdown-it-container pug
   ```

3. Execute with:

   ```
   node harukinotes _src _out
   ```

This will convert Markdown files in the `_src` folder into HTML files in the `_out` folder. Any files such as images and other resources that are not `.md` nor `.html` files will also be copied from `_src` to `_out`.