export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'course',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/static/css/bootstrap.min.css',
    '~/static/css/color_theme.css',
    '~/static/css/style_rtl.css',
    '~/static/css/style.css',
    '~/static/css/skin_color.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/validation-provider.js',
    '~/plugins/vuefullscreen.js',
    '~/plugins/publicApi.js',
    '~/plugins/privateApi.js',
    '~/plugins/pagination.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    "vue2-editor/nuxt",
    ["vue-toastification/nuxt", {
      timeout: 8000,
      position: "bottom-center"
    }]
  ],

  publicRuntimeConfig: {
    apiURL: process.env.API_BASE_URL,
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  },
  privateRuntimeConfig: {
    apiURL: process.env.API_BASE_URL,
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE_URL,
    credentials: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/,"vee-validate/dist/rules"],
  },

  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/login',
      // home: '/auth/dashboard'
      home: '/auth/login'
    },
    localStorage: false, // REALLY not secure, so nah
    resetOnError: true, // kick the user if any error happens w/ the auth
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'data.access_token',
          global: true,
          required: true,
          type: 'Bearer',
          name: 'Authorization'
        },
        refreshToken: {
          property: 'data.refresh_token',
          data: 'refresh_token',
          maxAge: 24 * 60 * 60 * 1000,
          required: true,
          type: 'Bearer',
          name: 'Authorization'
        },
        user: {
          property: 'data.user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/sign-in', method: 'post' },
          logout: { url: '/auth/logout', method: 'get' },
          refresh: { url: '/auth/refresh-token', method: 'get' },
          user: { url: '/auth/profile', method: 'get' }
        },
        tokenRequired: true,
        tokenType: 'JWT',
      }
    }
  },



  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true,
    }
  },
}
