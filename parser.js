const fs = require('fs');
const pug = require('pug');

const md = require('markdown-it')({
  typographer: true
});

md.use(require('markdown-it-emoji'));
md.use(require('markdown-it-sub'));
md.use(require('markdown-it-sup'));
md.use(require('markdown-it-mark'));
md.use(require('markdown-it-ins'));
md.use(require('markdown-it-footnote'));
md.use(require('markdown-it-deflist'));
md.use(require('markdown-it-abbr'));
md.use(require('markdown-it-container'));
md.use(require('./markdown_modules/markdown-it-katex'), {
  throwOnError: true,
  macros: {
    '\\sen': '\\operatorname{sen}',
    '\\tg': '\\operatorname{tg}',
    '\\arcsen': '\\operatorname{arcsen}',
    '\\arccos': '\\operatorname{arccos}',
    '\\arctg': '\\operatorname{arctg}'
  }
});

const yaml = require('js-yaml');


// =======================================================================================

let template;
try {
  template = fs.readFileSync('./template.pug', 'utf-8');
} catch (err) {
  console.error(`Cannot open template file "template.pug": ${err.message}`);
}


// =======================================================================================

function parse(srcpath, outpath, cb) {

  fs.readFile(srcpath, 'utf-8', (err, data) => {
    if (!err) {

      let header = null;
      
      // Extract a YAML header with metadata
      const match = data.match(/^((---[ \t]*(?:\n|\r|\n\r|\r\n)(?:[\s\S]*?)(?:\n|\r|\n\r|\r\n))---[ \t]*(?:\n|\r|\n\r|\r\n))/)
      if (match !== null) {
        try {

          header = yaml.load(match[2], 'utf8');

          // Remove parsed YAML header
          data = data.substr(match[1].length);

          // Remove HTML comments
          data = data.replace(/<!--[\s\S]*?-->/, '');

        } catch (err) {
          console.error(`Error parsing "${srcpath}"'s YAML header: ${err.message}`);
        }
      } else {
        console.error(`Error parsing "${srcpath}": YAML header not found. See readme for more info.`);
      }

      // Parse Markdown
      if (header !== null) {
        const mdResult = md.render(data);

        if (!header.title || typeof header.title !== 'string') {
          header.title = 'Untitled';
        }

        if (!header.author || typeof header.author !== 'string') {
          header.author = 'Anonymous';
        }

        const renderedHtml = pug.render(template, {
          title: header.title,
          subtitle: header.subtitle,
          topleft: header.author.replace(/"/g, '\\22'),
          topright: header.title.replace(/"/g, '\\22'),
          content: mdResult,
          stylesheet: header.stylesheet
        })
        fs.writeFile(outpath, renderedHtml, cb);
      }

    } else {
      console.error(`Cannot open file "${srcpath}": ${err.message}`);
    }
  })
}


// =======================================================================================

exports.parse = parse;