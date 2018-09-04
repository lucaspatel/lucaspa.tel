module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Portfolio for Lucas Patel' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    // node.js module but we specify the pre-processor
    
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
    { src: '~/assets/styles/custom.scss', lang: 'scss' },
    { src: '~/assets/styles/fonts.scss', lang: 'scss'}
  ],
  
  plugins: ['~/plugins/buefy.js'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#CD6374' },
  router: { base: '/lucaspa.tel/' },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
