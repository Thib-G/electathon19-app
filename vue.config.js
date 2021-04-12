module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/electathon19-app/'
    : '/',
  transpileDependencies: [
    /d3-.+/,
    'internmap',
    'bootstrap-vue',
  ],
};
