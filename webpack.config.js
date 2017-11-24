const path = require('path');

module.exports = {
    devServer: {
        inline:true,
        port: 8008
    },
    entry: './src/app.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            }
        ]
    },

    devtool: 'cheap-eval-source-map',
    
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};