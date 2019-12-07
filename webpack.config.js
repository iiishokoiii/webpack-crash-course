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
          'style-loader',//styleタグにオブジェクトの内容を反映
          'css-loader'//cssの内容をjsのオブジェクトとして生成
        ]
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  }
}