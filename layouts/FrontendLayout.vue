<template>
<div class="main-wrapper">
    <FrontendHeaderComponent/>
    <Nuxt />
    <FrontendFooterComponent/>
</div>
</template>

<script>
import FrontendFooterComponent from '~/components/FrontendFooterComponent.vue';
import FrontendHeaderComponent from '~/components/FrontendHeaderComponent.vue';

export default {
    name: "FrontendLayout",
    components: { FrontendHeaderComponent, FrontendFooterComponent },
    head() {
        return {
            title: "Edumentorslab",
            link: [
                { rel: "stylesheet", integrity: "sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp", href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css", crossorigin: "anonymous" },
                { rel: "stylesheet", href: "/css/bootstrap.min.css" },
                { rel: "stylesheet", href: "/css/all.min.css" },
                { rel: "stylesheet", href: "/css/frontend_style.css" },
            ],
        };
    }
}
</script>


