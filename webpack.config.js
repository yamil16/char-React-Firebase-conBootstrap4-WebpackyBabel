const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./bundle.js"
    },
    devServer: {
        contentBase:'./dist',
        port:3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,              
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]               
            }
        ]
    },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    })
  ]
};


/*
module.exports = {
    entry: {
        app:'./src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase:'./dist',
        port:3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 
                    {
                        loader: "babel-loader",
                    }
                , 
                //loader: 'babel-loader',
              
              //  query: {                    presets: ['react','env']                }  
                query: {
                    presets: ['es2015', 'react']
                  }              
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]               
            }
        ]
    },
    plugin: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}; 
*/