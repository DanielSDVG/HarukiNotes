[Instrucciones en español](https://github.com/DanielSDVG/HarukiNotes/blob/master/README_es.md)


# HarukiNotes - a simple HTML document generator from Markdown

This is a small project to generate cute HTML documents out of Markdown files.

Please note that there are better tools over there that make HTML documents from Markdown files, such as
[RMarkdown](https://rmarkdown.rstudio.com/). This is just a personal programming challenge I proposed myself and may
not follow best practices.



## How to use it

1. To use this project, download this project and add the `bin` folder to your `PATH` variable. Investigate how to edit
   your `PATH` variable if you don't know how to do this.

2. Create two folders from anywhere:

   *  `src`, with Markdown files that you would like to parse
   *  `out`, where the HTML output will be generated (you can view these files from your Internet browser)

   Don't forget to copy a CSS stylesheet from this project. You specify what stylesheet to use in a YAML header (see below).

3. Execute the HarukiNotes version appropiate for your operative system, passing as arguments both folders:

   ```
   harukinotes-win src out
   harukinotes-linux src out
   harukinotes-macos src out
   ```

   If you use different names for the folder, use them instead of `src` and `out`.

   You can enter LaTeX formulas surrounded by `$$...$$` or `$...$`, and even define macros to use among all Markdown files in the `src` directory. To share macros between all documents, add the `--macros` option at the end, with the name of a YAML file with macro definitions (see example file):

   ```
   harukinotes-win src out --macros macros.yaml
   ```

4. Open one of the HTML files in the `out` folder to see the result.


## Editing the project

1. Download and open this Node.js project
2. Install dependencies:

   ```
   npm install glob js-yaml katex markdown-it markdown-it-bracketed-spans markdown-it-attrs markdown-it-emoji markdown-it-highlightjs markdown-it-sub markdown-it-sup markdown-it-mark markdown-it-ins markdown-it-footnote markdown-it-deflist markdown-it-abbr markdown-it-container pug
   ```

3. Execute with:

   ```
   node harukinotes _src _out
   ```

This will convert Markdown files in the `_src` folder into HTML files in the `_out` folder. Any files such as images and other resources that are not `.md` nor `.html` files will also be copied from `_src` to `_out`.

You can also generate an executable using `pkg`:

```
npm install pkg --global
pkg .
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

Check out the `_src` folder for an example on how to make documents.



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