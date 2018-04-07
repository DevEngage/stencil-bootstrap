
const sass = require('@stencil/sass');

exports.config = {
  namespace: 'stb',
  generateDistribution: true,
  generateWWW: false,
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
