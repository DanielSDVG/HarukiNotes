---
title: HarukiNotes test page
subtitle: This is just a test
author: DanielSDVG
stylesheet: ../css/haruki_blue.css
---

This Markdown-to-HTML converter is powered by `markdown-it` and its plugins. [Check it out!](https://github.com/markdown-it/markdown-it)

**Bold** *Italic* ~~Strikethrough~~

Supported plugins:

* [Emoji](https://github.com/markdown-it/markdown-it-emoji) :-) :-( 8-) ;)

* [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup) 1^st^ H~2~O

* [\<ins>](https://github.com/markdown-it/markdown-it-ins) ++Inserted text++

* [\<mark>](https://github.com/markdown-it/markdown-it-mark) ==Highlighted text== (no effect when printing)

* [Definition lists](https://github.com/markdown-it/markdown-it-deflist). See example below.

* [Footnotes](https://github.com/markdown-it/markdown-it-footnote). See example below.

* [Abbreviations](https://github.com/markdown-it/markdown-it-abbr). Hover over any ocurrence of HTML!

* LaTeX formulas (powered by [KaTeX](https://katex.org/)), using [`markdown-it-katex`](https://www.npmjs.com/package/markdown-it-katex)

  This is an inline formula: $E = mc^2$

  This is a display formula:

  $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

*[HTML]: Hypertext Markup Language

Several language-neutral typographic replacements are also implemented: for example, `(c)` becomes (c), and `+-` becomes +-.

___

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

---

## Code block example

```css
p {
  color: red;
}
```


## Table Example

Syntax | Result
------ | ------
`**Bold text** __Bold text__` | **Bold text** __Bold text__
`*Italic text* _Italic text_` | *Italic text* _Italic text_
`~~Strikethrough text~~` | ~~Strikethrough text~~


## Definition List Example

Term 1
  ~ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat at quam et vestibulum. Praesent vitae condimentum nisi. Vivamus ac consequat tortor, quis euismod purus. Praesent ut iaculis est, ac rutrum mauris. Vivamus urna augue, tristique eu lacus nec, imperdiet ornare libero. Morbi eleifend tellus eu viverra luctus. Duis at eros volutpat dolor vehicula tempor ut sit amet erat.

Term 2
  ~ Definition 2a

    Another paragraph for def. 2a

  ~ Definition 2b



## Footnote Example

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote.] definition.

Duplicated footnote reference[^second].

[^first]:
    Footnote **can have markup** and multiple paragraphs.

    Indent at least 4 spaces.

[^second]: Footnote text.



## Lots of text

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat at quam et vestibulum. Praesent vitae condimentum nisi. Vivamus ac consequat tortor, quis euismod purus. Praesent ut iaculis est, ac rutrum mauris. Vivamus urna augue, tristique eu lacus nec, imperdiet ornare libero. Morbi eleifend tellus eu viverra luctus. Duis at eros volutpat dolor vehicula tempor ut sit amet erat. Nunc erat ligula, facilisis ut porta a, auctor eu velit. Integer et risus in libero rutrum vehicula. Cras quis sapien a risus fermentum sagittis. Nam tincidunt dolor id nunc rhoncus, sit amet pharetra lacus accumsan. Pellentesque scelerisque mauris auctor tincidunt faucibus. Curabitur facilisis ipsum at nisl rhoncus, vitae mollis turpis sagittis. Etiam lacus nisl, pulvinar ac dui quis, lobortis pretium lacus. Nam sit amet condimentum diam.

In in tincidunt nisl. Nam quis sodales diam, ac suscipit mi. Nunc vehicula nulla vel accumsan iaculis. Integer et justo eget tortor ornare gravida in ac nunc. In risus neque, congue in faucibus non, dignissim ut eros. Praesent vulputate mauris at posuere molestie. Sed egestas, odio vel euismod dictum, sapien lorem tincidunt lorem, in maximus dolor turpis a dui. In non nisi maximus nulla maximus commodo eu vel libero. Nunc eu posuere felis. Aliquam sed ipsum feugiat justo commodo euismod.

Nulla placerat arcu eget sem tincidunt placerat. Phasellus lacinia, nisl ac euismod interdum, elit purus eleifend nisi, et rutrum eros neque vulputate magna. Fusce magna felis, facilisis a arcu eget, volutpat porta lorem. Nullam at ultrices nunc. Phasellus consequat tempus gravida. Duis porttitor suscipit laoreet. Duis erat libero, laoreet pharetra imperdiet id, sodales eget dolor. Morbi tincidunt feugiat enim, nec suscipit ligula pretium a. Vestibulum pulvinar tincidunt ex, quis hendrerit lorem. 