<template>
    <div>
        <div class="hold-transition light-skin theme-primary bg-img" style="background-image: url('/images/bg-17.png'); background-position: bottom right">

            <section class="error-page h-p100" style="min-height:100vh">
                <div class="container h-p100">
                    <div class="row h-p100 align-items-center justify-content-center text-center">
                        <div class="col-lg-7 col-md-10 col-12">
                            <div class="rounded10 p-50">
                                <h1 class="fs-100">404</h1>
                                <h1>Page Not Found !</h1>
                                <h3 class="text-fade">looks like, page doesn't exist</h3>
                                <div class="my-30"><NuxtLink to="/" class="btn btn-primary">Back to home page</NuxtLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    </div>
  </template>

  <script>
  export default {
      name: 'ErrorDefault',
      props: ['error'],// eslint-disable-line
      head() {
        return {
            title: "Edumentorslab",
            link: [
              { rel: "stylesheet", href: "/css/bootstrap.min.css" },
              { rel: "stylesheet", href: "/css/color_theme.css" },
              { rel: "stylesheet", href: "/css/skin_color.css" },
              { rel: "stylesheet", href: "/css/style_rtl.css" },
              { rel: "stylesheet", href: "/css/style.css" },
            ],
        };
    },
  }
  </script>

  <style scoped>

  </style>
