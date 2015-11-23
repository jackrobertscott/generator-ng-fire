# <%= appname %>
> Built by [The Ng-Fire Generator](https://npmjs.org/package/generator-ng-fire)

## Usage
- `npm run compile` compile website into temporary folder.
- `npm run serve` serve and watch a compiled, uncompressed version of website.
- `npm run build` compile and compress website into a distribution folder.
- `npm run deploy` deploy a compiled, compressed version of website to GitHub Pages.

## Configuration
Main configuration is kept in a file called config.json. This file should contain the following properties:
- `paths`
  - `src` Type `string` Required: Specifies the source directory of the website code.
  - `tmp` Type `string` Required: The temporary directory for serving the compiled website.
  - `dist` Type `string` Required: Distribution directory for compiled and compressed code.

- `sourcemaps` Type `boolean|regex|function` Required: Add sourcemaps. (see: [gulp-if](https://www.npmjs.com/package/gulp-if))
- `cname` Type `string` Optional: Add `CNAME` file when deploying with this url.

## File Injection
Script and style files, both custom built and installed from bower, may be injected into markup files. To do this, you must include associated comment tags into any markup file you wish to have the scripts/styles included in. Bellow is an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
    <!-- bower:css -->
    <!-- bower installed css files will go here... -->
    <!-- endinject -->
    <!-- inject:css -->
    <!-- css files will go here... -->
    <!-- endinject -->
  </head>
  <body>
    <!-- bower:js -->
    <!-- bower installed scripts will go here... -->
    <!-- endinject -->
    <!-- inject:js -->
    <!-- js files will go here... -->
    <!-- endinject -->
  </body>
</html>
```
