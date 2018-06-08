
const sass = require('@stencil/sass');

exports.config = {
  namespace: 'stb',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: false
    },
    {
      type: 'dist'
    }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
