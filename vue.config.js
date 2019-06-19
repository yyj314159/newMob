const webpack = require('webpack');
module.exports = {
  publicPath:'/memberCenter/',
  outputDir:'memberCenter',
  devServer: {
      open: true, //浏览器自动打开页面
      port:5000,
      proxy: {
            '/api': {
            target: 'http://www.dev-zuma.com',
            ws: true,
            changeOrigin: true,
            pathRewrite:{
                '^/api':''
            }
        }
      }
    },
    lintOnSave:false,
    productionSourceMap:false,
    configureWebpack:{
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    }
  };