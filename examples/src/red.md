---
title: HarukiNotes test page
subtitle: This is also a cheat sheet
author: DanielSDVG
stylesheets: [../css/haruki_red.css]
---

This Markdown-to-HTML converter is powered by `markdown-it` and its plugins. [Check it out!](https://github.com/markdown-it/markdown-it)

You can use this document both as a cheat sheet and a test page to develop your own themes.

# Inline tags

Standard Markdown syntax: 

Feature         | Syntax                                  | Result
--------------- | --------------------------------------- | ---------------------------
Bold text       | `**Bold text** or __Bold text__`        | **Bold text**
Italic text     | `*Italic text* or _Italic text_`        | *Italic text*
Inline code     | `` `Inline code` ``                     | `Inline code`
Links           | `[link text](destination)`              | [Links](#)
Images          | `![alt text](source "title attribute")` | ![A cute anime girl](haruki.png "Haruki")

For images, the `title` attribute is optional. You can also use a footnote-like syntax:

```
![A handsome anime boy][daimaru]
```

Then you can specify the image file like this:

```
[daimaru]: daimaru.png  "Daimaru"
```

To obtain:

![A handsome anime boy][daimaru]

[daimaru]: daimaru.png  "Daimaru"



Several [`markdown-it`](https://github.com/markdown-it/markdown-it) plugins enable additional features:

Feature         | Syntax                        | Result
--------------- | ----------------------------- | ---------------------------
Strikethrough   | `~~Strikethrough text~~`         | ~~Strikethrough text~~
[Superscripts](https://github.com/markdown-it/markdown-it-sup) | `1^st^` | 1^st^
[Subscripts](https://github.com/markdown-it/markdown-it-sub) | `H~2~O` | H~2~O
[`<ins>` tag](https://github.com/markdown-it/markdown-it-ins) | `++Inserted text++` | ++Inserted text++
[Higlighted text](https://github.com/markdown-it/markdown-it-mark) | `==Highlighted text==` | ==Highlighted text==
[Emoji](https://github.com/markdown-it/markdown-it-emoji) | `:-) :-( 8-) ;)` | :-) :-( 8-) ;)
[LaTeX formulas](https://www.npmjs.com/package/markdown-it-katex) | `$E = mc^2$` | $E = mc^2$
[HTML attributes](https://www.npmjs.com/package/markdown-it-attrs) | `**danger**{.text-danger}` | **danger**{.text-danger}

Notes:

*   Several language-neutral typographic replacements are also implemented, even if you don't use emoji: for example, `(c)` 
    becomes (c), and `+-` becomes +-.

*   Formulas are rendered with [KaTeX](https://katex.org/). You can also define macros to use in multiple documents.

    To create a `<span>` element, enclose its contents between brackets. This allows you to apply HTML attributes to it.

    ```markdown
    This action is [dangerous]{.text-danger}.
    ```

    Currently, the only attributes supported are `id`, `class` and `style`.


# Block tags

These are the heading styles:

___

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

---



## Code blocks

`````markdown
```css
p {
  color: red;
}
```
`````

```css
p {
  color: red;
}
```


## Block-level HTML attributes

The following examples show usage examples of the [`markdown-it-attrs`](https://www.npmjs.com/package/markdown-it-attrs) syntax
to style certain block-level elements. HarukiNotes themes provide several helper classes to allow more styling flexibility.

Advantages of using HarukiNotes:

+   Minimalistic
+   Free and open source
+   You can make beautiful documents with it

{.li-plus}

Disadvantages:

-   You need a PDF converter (such as [PrinceXML](https://www.princexml.com/)) to create PDFs from HTML. You can also use the 
    default PDF converter from Windows 10, but it does not fully implement the [CSS Paged Media spec](https://www.w3.org/TR/css-page-3/).
-   There are better tools over there. I made this one just for the sake of practicing with Node.js and other tecnologies.
-   Typographic choices can be either good or bad, depending on your taste.
-   But personally I like them! {.li-plus}

{.li-minus}

Things to do with it:

*   Feel free to try it if you want!
*   Hope you like it as much as I liked working on this project

{.li-gt}



## Display formulas

```markdown
This is a display formula, rendered with KaTeX:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
```

This is a display formula, rendered with KaTeX:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$


## Quotes

```markdown
> "Measuring programming progress by lines of code is like
> measuring aircraft building progress by weight."
>
> -- Bill Gates
```

> "Measuring programming progress by lines of code is like
> measuring aircraft building progress by weight."
>
> -- Bill Gates



## [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

```markdown
Term 1
~   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat at quam et vestibulum.
    Praesent vitae condimentum nisi. Vivamus ac consequat tortor, quis euismod purus.

Term 2
~   Definition 2a

    Another paragraph for def. 2a

~   Definition 2b
```

Term 1
~   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat at quam et vestibulum.
    Praesent vitae condimentum nisi. Vivamus ac consequat tortor, quis euismod purus.

Term 2
~   Definition 2a

    Another paragraph for def. 2a

~   Definition 2b



## [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

```markdown
Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote.] definition.

Duplicated footnote reference[^second].

[^first]:
    Footnote **can have markup** and multiple paragraphs.

    Indent at least 4 spaces.

[^second]: Footnote text.
```

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote.] definition.

Duplicated footnote reference[^second].

[^first]:
    Footnote **can have markup** and multiple paragraphs.

    Indent at least 4 spaces.

[^second]: Footnote text.



## [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

```markdown
*[HTML]: Hypertext Markup Language
```

Hover over any occurrence of HTML to see the result.

*[HTML]: Hypertext Markup Language



## Tables

```
Feature         | Syntax                                  | Result
--------------- | --------------------------------------- | ---------------------------
Bold text       | `**Bold text** or __Bold text__`        | **Bold text**
Italic text     | `*Italic text* or _Italic text_`        | *Italic text*
Inline code     | `` `Inline code` ``                     | `Inline code`
Links           | `[link text](destination)`              | [Links](#)
Images          | `![alt text](source "title attribute")` | ![A cute anime girl](haruki.png "Haruki")

{.tw-1-col-10}
```

Feature         | Syntax                                  | Result
--------------- | --------------------------------------- | ---------------------------
Bold text       | `**Bold text** or __Bold text__`        | **Bold text**
Italic text     | `*Italic text* or _Italic text_`        | *Italic text*
Inline code     | `` `Inline code` ``                     | `Inline code`
Links           | `[link text](destination)`              | [Links](#)
Images          | `![alt text](source "title attribute")` | ![A cute anime girl](haruki.png "Haruki")

{.tw-1-col-10}

HarukiNotes themes provide several classes to adjust column widths.

*   `.tw-<n>-col-<percentage>` adjusts the width of the `n`th column (with `n` from 1 to 4) to the given percentage.
*   `.tw-<n>-last-col-<percentage>` adjusts the width of the `n`th last column (with `n` from 1 to 4) to the given percentage.

Available percentages go from 5% to 95% (in increments of 5).