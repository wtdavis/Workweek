const { template } = require('@babel/core')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// module.exports = {
//     "entry": "./src/index.js",
//     "output": {
//         path: path.resolve(__dirname, 'dist'),
//         filename: "bundle.js"
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: "babel-loader"
//             },
//             {
//                 test: /\css$/,
//                 use: [
//                     {
//                         loader: "style-loader"
//                     },
//                     {
//                         loader: "css-loader"
//                     }
//                 ]
//             }
//         ]
//     }
// }

module.exports = {
    "entry": "./src/index.js", 
    "output": {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
        },
    module: {

        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                        {
                            loader: "babel-loader"
                        }
                    ]

            }, 
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

        ]
        
    },


plugins: [
    new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }) 
    ]   
}