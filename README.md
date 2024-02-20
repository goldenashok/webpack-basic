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
     
2. ```Handling images in loader```
   - loader is a javascript library. it will handle the particular file type to load
   - for load the file we have to set to rules in the webpack
     ```sh
      module: {
              rules: [
                  {
                      test: /\.(png|jpg)$/,
                      use: ['file-loader']
                  }
              ]
          }
      ```
     - After set the rule file load from the local computer.
     - instead of to load current directry we have to set the public path. insde the output object
        ```sh
           output: {
              filename: 'bundle.js',
              path: path.resolve(__dirname, './dist'),
              publicPath: './dist/'
          }
        ```
      - ```installing node package for load image file```
       ```sh
          npm install file-loader --save-dev
       ```
   3. ```Handling css in loader```
      - ```webpack configuration```
         ```sh
         module: {
              rules: [
                  {
                      test: /\.css$/,
                      use: ['style-loader', 'css-loader'] // it's running right to left. css-loader used to load the css file and style-loader used to display in the html
                  }
              ]
          }
         ```
        - ```Installing loader package for load css file```
          ```sh
             npm install style-loader css-loader --save-dev
          ```

      4. ```Handling scss in loader```
         - ```webpack configuration```
           ```sh
              module: {
                    rules: [
                        {
                            test: /\.s[ac]ss$/i,
                            use: [
                                "style-loader",
                                "css-loader",
                                {
                                    loader: "sass-loader",
                                    options: {
                                        // Prefer `dart-sass`
                                        implementation: require("sass"),
                                    },
                                },
                            ]
                        }
                    ]
                }
              ```
           - ```installing loader package for load sass file```
             ```sh
                npm install sass sass-loader
             ```
         
      
