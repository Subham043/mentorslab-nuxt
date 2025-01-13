<template>
<div class="hold-transition theme-primary bg-img h-p100" style="background-image: url('/images/auth-bg/bg-16.jpg')">
    <div class="container h-p100">
		<div class="row align-items-center justify-content-md-center h-p100">

			<div class="col-12">
				<div class="row justify-content-center g-0">
					<div class="col-lg-5 col-md-5 col-12">

							<Nuxt />

					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
    name: "AuthLayout",
	middleware: ['Unauthenticated'],
	head() {
        return {
            title: "Edumentorslab",
            link: [
                { rel: "stylesheet", href: "/css/bootstrap.min.css" },
                { rel: "stylesheet", href: "/css/color_theme.css" },
                { rel: "stylesheet", href: "/css/style_rtl.css" },
                { rel: "stylesheet", href: "/css/style.css" },
                { rel: "stylesheet", href: "/css/skin_color.css" },
            ],
        };
  },
}
</script>
