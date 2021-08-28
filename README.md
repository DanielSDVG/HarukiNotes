# HarukiNotes - a simple HTML document generator from Markdown

This is a small project to generate cute HTML documents out of Markdown files.

## Quick testing

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

You could also generate an executable using `pkg` (STILL NOT WORKING):

```
npm install pkg --global
pkg .
```

Add it to your `PATH` variable and then you can parse your Markdown from anywhere using the command line:

```
harukinotes-win
harukinotes-linux
harukinotes-macos
```


## Markdown metadata

All `.md` files must include a YAML header in the beginning of the file, like this:

```yaml
---
title: HarukiNotes test page
subtitle: This is just a test
author: DanielSDVG
stylesheet: ../css/haruki_blue.css
---
```

Here you can enter a title for the HTML document, a subtitle (optional), the author and the path to the stylesheet to use (relative to the `.md` file).


## Parsing Sass stylesheets

For better customization, I recommend to install these dependencies:

```
npm install gulp-cli --global
npm install gulp gulp-sass sass --save-dev
```

This way we can use [Gulp](https://gulpjs.com/) to build [Sass](https://sass-lang.com) stylesheets as CSS. Sass source files to transpile the example theme can be found in the `sass` directory in this repository. Resulting CSS is output to `css`.

Once you've installed Gulp, execute

```
gulp sass
```

to transpile your Sass stylesheets. Files in subdirectories of `css` and partials (`_*.scss`) are ignored.