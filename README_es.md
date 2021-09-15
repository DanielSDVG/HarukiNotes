# HarukiNotes - un sencillo generador de documentos HTML a partir de Markdown

Este es un pequeño proyecto para generar documentos HTML bonitos a partir de ficheros Markdown.

Ten en cuenta que hay mejores herramientas por allí para este propósito, como [RMarkdown](https://rmarkdown.rstudio.com/).
La realización de este proyecto no es más que un reto que me he propuesto yo mismo para mí y no necesariamente tiene que
seguir ciertas buenas prácticas de programación y configuración.


## Cómo usarlo

1. Para usar este proyecto, descárgalo y añade la carpeta `bin` a la variable `PATH` de tu sistema operativo.

2. En cualquier directorio, crea dos carpetas, por ejemplo:

   *  `src`, con ficheros Markdown que quieras convertir
   *  `out`, que contendrá los ficheros HTML resultantes (puedes verlos desde tu navegador de Internet)

   También deberás copiar una hoja de estilos CSS a este proyecto, y referenciarla desde tus documentos Markdown en una cabecera YAML (más adelante).

3. Ejecuta, desde línea de comandos, la versión de HarukiNotes correspondiente a tu sistema operativo. Pasa como parámetros
   las dos carpetas que creaste:

   ```
   harukinotes-win src out
   harukinotes-linux src out
   harukinotes-macos src out
   ```

   Si tus carpetas no se llaman `src` y `out`, cambia los parámetros del comando a los nombres reales de las carpetas.

   También puedes introducir fórmulas LaTeX envueltas en los símbolos `$$...$$` o `$...$` e incluso definir macros que quieras
   usar en todos los ficheros Markdown en la carpeta `src`. Para compartir las macros entre todos tus documentos, añade la
   opción `--macros` al final del comando, seguido del fichero donde se encuentran definidas las macros:

   ```
   harukinotes-win src out --macros macros.yaml
   ```

4. Abre uno de los ficheros HTML en la carpeta `out` para ver el resultado.


## Editar el proyecto

Para editar este proyecto necesitarás tener Node.js instalado.

1. Descarga y abre este proyecto.
2. Instala las dependencias:

   ```
   npm install glob js-yaml katex markdown-it markdown-it-attrs markdown-it-bracketed-spans markdown-it-emoji markdown-it-highlightjs markdown-it-sub markdown-it-sup markdown-it-mark markdown-it-ins markdown-it-footnote markdown-it-deflist markdown-it-abbr markdown-it-container pug
   ```

3. Ejecútalo de esta forma:

   ```
   node harukinotes _src _out
   ```

Esto convierte los ficheros Markdown en la carpeta `_src` en ficheros HTML y los coloca en la carpeta `_out`. Las imágenes
y otros recursos que no sean ficheros `.md` ni `.html` también se copiarán de `_src` a `_out`.

También puedes generar un ejecutable con `pkg`:

```
npm install pkg --global
pkg .
```


## Metadatos de los ficheros Markdown

Los ficheros `.md` han de incluir una cabecera YAML al principio. Por ejemplo:

```yaml
---
title: Página de prueba de HarukiNotes
subtitle: Esto es solo una prueba
author: DanielSDVG
stylesheet: ../css/haruki_blue.css
---
```

Aquí puedes introducir, respectivamente, el título del documento, un subtítulo opcional, el autor y la ruta a la hoja de 
estilos CSS a usar (relativa al fichero `.md`).

Consulta la carpeta `_src` para ver un ejemplo de cómo escribir un documento.


## Transpilado de hojas de estilos Sass

Para mejor personalización, recomiendo instalar las siguientes dependencias:

```
npm install gulp-cli --global
npm install gulp gulp-sass sass --save-dev
```

De esta forma se puede usar [Gulp](https://gulpjs.com/) para transpilar las hojas de estilos [Sass](https://sass-lang.com) como CSS convencional. Los ficheros Sass de los temas de ejemplo se encuentran en la carpeta `sass` de este repositorio, y la salida se escribirá en el directorio `css`.

Una vez hayas instalado Gulp, usa

```
gulp sass
```

para convertir tu Sass en CSS. Este comando ignora los ficheros en subdirectorios de `css` y los ficheros parciales de Sass
(los que comienzan por `_`).