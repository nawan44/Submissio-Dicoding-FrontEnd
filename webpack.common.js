const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
   entry: "./src/app.js",
   output: {
    publicPath: '/',
    path: path.resolve(__dirname, "src"),
    filename: 'app.js',
},
devServer: {
    contentBase: "src",
    hot: true,
  } ,
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           },
           
           { 
            test: /\.(png|jpg)$/, 
            loader: 'file-loader?name=./src/script/component/image/[name].[ext]' 
       }
               ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       })
   ]
}