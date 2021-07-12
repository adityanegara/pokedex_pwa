const WebpackPwaManifest = require("webpack-pwa-manifest");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');
module.exports = {
     
     entry : {
         main : "./src/scripts/index.js",
         vendor : "./src/scripts/vendor/bootstrap.js"
     },
     plugins : [
     
        new WebpackPwaManifest({
            publicPath: './' ,
            name: 'Pokedex Practice App',
            short_name: 'Pokedex',
            description: 'Pokedex Practice',
            background_color: '#29d5bd',
            crossorigin: 'use-credentials', 
            display : "standalone",
            orientation : "portrait-primary",
            "start_url" : "/index.html",
            'theme_color' : '#29d5bd',
            icons: [
              {
                src: path.resolve('src/public/icons/pokeball_16.png'),
                sizes: '16x16' // multiple sizes
              },
              {
                src: path.resolve('src/public/icons/pokeball_24.png'),
                sizes: '24x24' // multiple sizes
              },
              {
                src: path.resolve('src/public/icons/pokeball_32.png'),
                sizes: '32x32' // multiple sizes
              }
              ,
              {
                src: path.resolve('src/public/icons/pokeball_64.png'),
                sizes: '64x64' // multiple sizes
              }
              ,
              {
                src: path.resolve('src/public/icons/pokeball_128.png'),
                sizes: '128x128' // multiple sizes
              }
              ,
              {
                src: path.resolve('src/public/icons/pokeball_256.png'),
                sizes: '256x256' // multiple sizes
              }
              ,
              {
                src: path.resolve('src/public/icons/pokeball_512.png'),
                sizes: '512x512' // multiple sizes
              },
              {
                src: path.resolve('src/public/icons/pokeball_256.png'),
                sizes: '256x256',
                ios : true
              }
            ]
        }),
        new HtmlWebpackPlugin({
            template : "./src/templates/index.html"
        }),
        new WorkboxPlugin.GenerateSW({
          clientsClaim : true,
          skipWaiting : true,
        }),
    ],
     module:{
         rules: [
           
            {
                test : /\.html$/,
                loader : 'html-loader'
            },
            {
                test: /\.(svg|png|jpg|gif)/,
                type : 'asset/resource'
            }
           

         ]
    }
}