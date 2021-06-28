const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 3000, // localhost의 3000 포트
    open: true, // 자동으로 브라우저 open 여부
    historyApiFallback: true, // fallback 시 redirect
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
});
