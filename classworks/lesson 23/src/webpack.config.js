module.exports = {
  entry: './html',
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'cheap-source-map',
  devServer: {
    port: 3000
  },
  // babel-preset-env
  // нужно какие версии браузеров мы 
  // поддерживаем
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};
