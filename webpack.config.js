const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets: {
                  esmodules: true
                }
              }],
              '@babel/preset-react']
          }
        }
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {}
      //   }]
      // }
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
    // hashFunction: "sha256",
    // hashFunction: "xxhash64"
  },
  externals: {
    'dicom-parser': 'dicomParser',
    'cornerstone':'cornerstone',
    'cornerstone-math':'cornerstoneMath',
    'cornerstone-tools':'cornerstoneTools',
    'cornerstone-wado-image-loader':'cornerstoneWADOImageLoader',
    'cornerstone-web-image-loader':'cornerstoneWebImageLoader',
    // 'cornerstone-file-image-loader':'cornerstoneFileImageLoader',
  },
  externalsType: 'var'
};
