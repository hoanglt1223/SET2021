
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
       new: "./src/index.js",
    //    new2: "./src/tai2.js"
    
    },
    devtool: "eval-cheap-source-map",
    mode: "development",
    module: {
        rules: [
            {
                        test: /\.(js|jsx)$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: "babel-loader",
                        options: { presets: ["@babel/env"] }
                    },
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.s[ac]ss$/, use: ["style-loader", "css-loader", "sass-loader"] },
          ],
        },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        // path: __dirname + "/dist",
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3300,
        publicPath: "http://localhost:3300/dist/",
        hotOnly: true,
        historyApiFallback: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
 
    ]
};