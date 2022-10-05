export default function ({ $axios, app, $config: {apiURL} }, inject) {
  // Create a custom axios instance
  const privateApi = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
    credentials: true,
  })

  // Set baseURL to something different
  privateApi.setBaseURL(`${apiURL}`)

  privateApi.interceptors.request.use(
    (config) => {
      if (!config.headers.authorization) {
        if (app.$auth.loggedIn) {
          config.headers.Authorization = `${app.$auth.strategy.token.get()}`
        }
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  privateApi.interceptors.response.use(
    (response) => response,
    async (error) => {
      const prevRequest = error?.config
      if (
        (error?.response?.status === 403 || error?.response?.status === 401) &&
        !prevRequest?.sent
      ) {
        prevRequest.sent = true
        await app.$auth.refreshTokens('refresh')
        prevRequest.headers.Authorization = `${app.$auth.strategy.token.get()}`
        return privateApi(prevRequest)
      }
      return Promise.reject(error)
    }
  )

  // Inject to context as $api
  inject('privateApi', privateApi)
}
