/** @type {import('next').NextConfig} */

const fs = require('fs');
const path = require('path');
const withLess = require('next-with-less');
const lessToJS = require('less-vars-to-js');

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './styles/variables.less'), 'utf8')
);

module.exports = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables, // make your antd custom effective
      localIdentName: '[path]___[local]___[hash:base64:5]',
    },
  },
});
