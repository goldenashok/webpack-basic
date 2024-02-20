# webpack-basic
1. ```What is mean by webpack```
   - webpack is a module bundler. it's mainly used for bundle the javascript files for usage in the browser
   - we have grunt and gulp also there. it's also the task runner. but it's will create the dependeny. file list should be order for calling the function. first function should declar and then call, otherwise get error.
   - Webpack is used resolve the dependeny.
   - install the webpack
     ```sh
     npm install webpack webpack-cli --save-dev
     ```
   - basic setup ```webpack.js```
     ```sh
     const path = require('path');
      module.exports = {
          entry: './src/index.js',
          output: {
              filename: 'bundle.js',
              path:path.resolve(__dirname, './dist') // give absolute path
          },
          mode: 'none' // [development, production, none]
      }
     ```
     
2. ```
