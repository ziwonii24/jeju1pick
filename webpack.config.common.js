const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    modules: ['./node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'output.[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.png$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ]
};
