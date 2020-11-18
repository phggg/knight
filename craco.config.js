const CracoVtkPlugin = require('craco-vtk')
const path = require('path')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    plugins: [new SimpleProgressWebpackPlugin()],
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@common': pathResolve('src/common'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@pages': pathResolve('src/pages'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils'),
      '@styles': pathResolve('src/styles'),
      // 此处是一个示例，实际可根据各自需求配置
    },
  },
  plugins: [
    {
      plugin: CracoVtkPlugin(),
    },
  ],
}
