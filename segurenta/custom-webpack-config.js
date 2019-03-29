const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env' : {
                URL_MIDDLEWARE : JSON.stringify(process.env.URL_MIDDLEWARE)
            }
        })
    ]
};