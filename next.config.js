const withPlugins = require('next-compose-plugins');
// const withImages = require('next-images');
// const withCSS = require('@zeit/next-css')

// const webpackConfigModifier = config => {
//     return config
// }
const assetPrefix = process.env.ASSET_PREFIX;

const nextConfig = {
    // webpack: webpackConfigModifier,
    assetPrefix: assetPrefix
}

module.exports = withPlugins([{
    env: {
        ASSET_PREFIX: process.env.ASSET_PREFIX || '/',
        API_URL: process.env.API_URL || 'https://test.com/api/',
    },
  }
],nextConfig);