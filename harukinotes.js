const fs = require('fs');
const glob = require('glob');
const path = require('path');

const parser = require('./parser.js');


// =======================================================================================

parseArgs = function(args) {
  const result = {
    error: args.length !== 2,
    sourcedir: null,
    destdir: null
  };

  if (!result.error) {
    result.sourcedir = args[0];
    result.destdir = args[1];
  }

  return result;
}

ensureDirectory = function(dirname) {
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
  }
}


// =======================================================================================

const parsedArgs = parseArgs(process.argv.slice(2));
if (!parsedArgs.error) {
  fs.stat(parsedArgs.sourcedir, (err, stats) => {
    if (!err) {
      if (stats.isDirectory()) {

        const sources = glob.sync(`${parsedArgs.sourcedir}/**/*.md`);
        const images = glob.sync(`${parsedArgs.sourcedir}/**/!(*.md|*.html)`);
        
        if (sources.length > 0) {

          // Parse Markdown files
          console.log(`Parsing Markdown files... (${sources.length})`);
          sources.forEach((srcpath) => {
            const outpath = parsedArgs.destdir + srcpath.slice(parsedArgs.sourcedir.length).replace(/\.md$/, '.html');
            parser.parse(srcpath, outpath, () => console.log(`${srcpath} -> ${outpath}`));
          });

          // Copy images and other resources that are required to render
          // HTML files correctly
          if (images.length > 0) {
            console.log(`Copying images and other resources...`);
            images.forEach((srcpath) => {

              const srcstats = fs.statSync(srcpath);
              if (srcstats.isFile()) {
                
                const outpath = parsedArgs.destdir + srcpath.slice(parsedArgs.sourcedir.length);
                ensureDirectory(path.dirname(outpath));
                fs.copyFile(srcpath, outpath, (err) => {
                  if (err) {
                    console.error(`Could not copy "${srcpath}": ${err.message}`);
                  }
                });

              }
              
            });
          }

        } else {
          console.log('No .md files found.');
        }
      } else {
        console.error(`${parsedArgs.sourcedir} is not a directory.`)
      }
    } else {
      console.error(`Cannot open directory ${parsedArgs.sourcedir}: ${err.message}`)
    }
  });
} else {
  console.log('Convert Markdown files to HTML.');
  console.log();
  console.log('Usage:');
  console.log('  $ node harukinotes [source dir] [output dir]');
  console.log();
  console.log('  [source dir]: where to look for files to convert');
  console.log('  [output dir]: where to output the result');
}