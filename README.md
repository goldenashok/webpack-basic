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
4.  ```Handling scss in loader```
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
5. ```Convert ES6 to ES5```
	- it will convert ES6 to ES5 in the bundle.js
	- for this need babel configuration as well
	- ```.babelrc.js```
	    ```sh
	    module.exports = function(api) {
		api.cache(true);
		const presets = ['@babel/preset-env'];
		return {presets};
	    }
	    ```
	- Webpack rules
	    ```sh
	    {
		test: /\.js/,
		exclude: /node_modules/,
		use: 'babel-loader'
	    }
	    ```
	- installing loader package for conver es5 to es6
	    ```sh
	    npm install babel-loader @babel/core @babel/preset-env --save-dev
	    ```
6. ```minify the JS file```
	- This plugin used to minify the js file ( remove the space inside the file)
	- webpack configuration
	    ```sh
	    const TerserPlugin= require('terser-webpack-plugin');
	    plugins: [new TerserPlugin]
	    ```
	- installing plugin for minify the js
	    ```sh
	    npm install terser-webpack-plugin --save-dev
	    ```
7. ```Extract the CSS file using plugin```
	- This plugin used to extract the css file from the bundle.js and create separate css file
	- ```webpack configuration```
	- Then change the rules style-loader to MiniCssExtractPlugin.loader
	    ```sh
	    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
	    {
		test: /\.css$/,
		use: ['style.loader', 'css-loader']
	    },
			```
			Instead of
	    ```sh
	    {
		test: /\.css$/,
		use: [MiniCssExtractPlugin.loader, 'css-loader']
	    },
	    ```
	    ```sh
	    plugins: [new TerserPlugin, new MiniCssExtractPlugin({filename:'style.css'})]
	    ```
	- ```installing packages for extract css```
	    ```sh
	    npm install mini-css-extract-plugin --save-dev
	    ```
8. Browser cache and filename hash
        - Without this plugin the index.html alway take file from server. it's reducing the performance
        - if you are using this plugin it will take first time form server. then take from browser cache without new file
        - ```webpack configuration```
        - Add contenthash in front of the file extention
            ```sh
            filename: 'bundle.[contenthash].js',
            plugins: [new TerserPlugin, new MiniCssExtractPlugin({filename:'style.[contenthash].css'})]
            ```
9. Clean webpack
        - This will used to clean th the unwanted files from the dist folder
        - install npm plugin
            ```sh
            npm install clean-webpack-plugin --save-dev
            ```
