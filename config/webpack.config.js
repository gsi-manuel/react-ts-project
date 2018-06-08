const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '9000';

module.exports = {
  // entry: {
  //   index: 'src/index.html',
  // },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    hot: true,
    port: PORT,
    historyApiFallback: true,
  },
  optimization: {
		splitChunks: {
      chunks: 'all',
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'tslint-loader',
        enforce: 'pre',
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/images/[name].[hash:8].[ext]',
            }
          },
          {
            loader: 'img-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {minimize: true}
          },
          {
            loader:"postcss-loader"
          },
          {
            loader:"sass-loader",
            options: {
              includePaths: [
                path.resolve(__dirname, '../src/assets/scss/')
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new webpackDashboard(),
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "./index.html"
    }),
    new WebpackPwaManifest({
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      theme_color: '#0f395a',
      background_color: '#ffffff',
      icons: [
        {
          src: path.resolve('src/assets/images/favicon.ico'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        // {
        //   src: path.resolve('src/assets/large-icon.png'),
        //   size: '1024x1024' // you can also use the specifications pattern
        // }
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast 
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    }),
    new CompressionPlugin({ 
      asset: '[path].gz[query]',
      algorithm: "gzip",
      test: /\.tsx$|\.ts$|\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
      // deleteOriginalAssets: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    // path: path.resolve(__dirname, 'dist')
  }
};
