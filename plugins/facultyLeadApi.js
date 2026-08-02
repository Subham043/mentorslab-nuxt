export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const facultyLeadApi = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
  })

  // Set baseURL to something different
  facultyLeadApi.setBaseURL(`https://facultyleads.com/backend/api/v1`)

  // Inject to context as $api
  inject('facultyLeadApi', facultyLeadApi)
}
