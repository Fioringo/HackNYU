const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './client/src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                type: 'javascript/auto',
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000',
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
}
