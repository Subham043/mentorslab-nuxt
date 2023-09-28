export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: 'Mentorslab',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'author', content: 'Mentorslab' },
      { name: 'owner', content: 'PFLA International Pvt. Ltd.' },
      { name: 'robots', content: 'index, follow' },
      { name: 'ROBOTS', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { property: 'og:image', content: process.env.MAIN_BASE_URL+'/images/logo-mentor.png' },
      { property: 'og:title', content: 'Mentorslab' },
      { property: 'og:site_name', content: 'Mentorslab' },
      { property: 'og:description', content: 'Learn Future Skills Now Online And Flexible Learning' },
      { property: 'og:url', content: process.env.MAIN_BASE_URL },
      { property: 'og:type', content: 'website' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:image', content: process.env.MAIN_BASE_URL+'/images/logo-mentor.png' },
      { property: 'twitter:url', content: process.env.MAIN_BASE_URL },
      { property: 'twitter:title', content: 'Mentorslab' },
      { property: 'twitter:description', content: 'Learn Future Skills Now Online And Flexible Learning' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type:'image/png', href: '/apple-touch-icon.png' },
      { rel: 'icon',  type:'image/png', href: '/icon.png' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/image_viewer',
    '~/plugins/validation-provider.js',
    '~/plugins/vuefullscreen.js',
    '~/plugins/publicApi.js',
    '~/plugins/privateApi.js',
    '~/plugins/pagination.js',
    '~/plugins/countdown.js',
    '~/plugins/vue-slick-carousel.js',
    // { src: '~/plugins/zoom.client.js', mode: "client" },
    { src: '~/plugins/safeHtml.js', mode: "client" },
    { src: '~/plugins/chart.js', mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/date-fns',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-helmet',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    "vue2-editor/nuxt",
    'vue-scrollto/nuxt',
    ["vue-toastification/nuxt", {
      timeout: 8000,
      position: "bottom-center"
    }],
  ],


  publicRuntimeConfig: {
    apiURL: process.env.API_BASE_URL,
    mainURL: process.env.MAIN_BASE_URL,
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  },
  privateRuntimeConfig: {
    apiURL: process.env.API_BASE_URL,
    mainURL: process.env.MAIN_BASE_URL,
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
      icons:[{
        src:`/dir/icon.png`,
        size:"144x144",
        type:"image/png"
      },{
        src:`/dir/apple-touch-icon.png`,
        size:"180x180",
        type:"image/png"
      }
    ]
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
      home: '/dashboard'
    },
    localStorage: true, // REALLY not secure, so nah
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

  helmet: {
    /*
    frameguard: false,
    ...
    */
    contentSecurityPolicy: false,
    crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" },
    crossOriginResourcePolicy: true,
    referrerPolicy: {policy: "no-referrer"},
    frameguard: {action: "sameorigin"},
    hidePoweredBy: true,
    hsts: {
      maxAge: 15552000,
      includeSubDomains: true,
      preload: true,
    },
    xssFilter: true,
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true,
    }
  },

  loading: {
    color: '#0c96e2',
    height: '3px'
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
  }
}
