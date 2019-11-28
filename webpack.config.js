const path = require('path')
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',//styleの適用
          'css-loader'//cssの内容をjsに読み込み
        ]
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  }
}