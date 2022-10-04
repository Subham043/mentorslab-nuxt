export default function ({ $axios, $config: {apiURL} }, inject) {
  // Create a custom axios instance
  const publicApi = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
  })

  // Set baseURL to something different
  publicApi.setBaseURL(`${apiURL}`)

  // Inject to context as $api
  inject('publicApi', publicApi)
}
