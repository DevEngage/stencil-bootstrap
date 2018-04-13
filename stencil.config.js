
const sass = require('@stencil/sass');

exports.config = {
  namespace: 'stb',
  generateDistribution: true,
  outputTargets: [
    { type: 'www' },
    { type: 'dist' }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
