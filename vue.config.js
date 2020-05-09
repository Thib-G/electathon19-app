module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/electathon19-app/'
    : '/',
  transpileDependencies: [
    'd3-array',
    'd3-collection',
    'bootstrap-vue',
  ],
};
