const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, args) => {
  const devMode = args.mode !== 'production';

  const paths = {
    SRC: path.resolve(__dirname, 'src'),
    DIST: path.resolve(__dirname, 'dist'),
  };

  return {
    entry: path.resolve(paths.SRC, 'main.js'),
    output: {
      filename: devMode ? '[name].js' : '[name].[contenthash].js',
      path: paths.DIST,
      publicPath: '/',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: 'vendors',
      },
      runtimeChunk: true,
    },
    devServer: {
      historyApiFallback: true, // support for html5 mode
      noInfo: false, // limit output
      contentBase: paths.SRC,
      compress: true, // enable compression
      hot: true, // enable hot module replacement

      // proxy: {
      //   // proxy all url from /api to ...
      //   '/api': {
      //     target: 'https://other-server.example.com'
      //   }
      // }
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(paths.SRC, 'index.html'),
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[contenthash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/, // apply babel-loader for any jsx file
          loader: 'babel-loader',
          options: {
            sourceMap: !devMode ? true : false,
          },
          exclude: /node_modules/, // except in node_modules
        },
        {
          test: /\.(sa|sc|c)ss$/,
          loader: 'style-loader!css-loader!sass-loader',
        },
        {
          test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file-loader',
        },
        {
          test: /\.(png|jpg|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=4000',
        },
      ],
    },
  };
};
