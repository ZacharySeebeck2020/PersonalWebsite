module.exports = {
  output: 'standalone',
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/zacharyseebeck2020.github.io/' : ''
}