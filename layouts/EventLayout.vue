<template>
<div>
    <EventHeaderComponent/>
    <Nuxt />
</div>
</template>

<script>
import EventHeaderComponent from '~/components/EventHeaderComponent.vue';

export default {
    name: "FrontendLayout",
    components: { EventHeaderComponent },
    head() {
        return {
            title: "Mentorslab",
            link: [
                { rel: "stylesheet", integrity: "sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp", href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css", crossorigin: "anonymous" },
                { rel: "stylesheet", href: "/css/event_bootstrap.css" },
                { rel: "stylesheet", href: "/css/event_default.css" },
                { rel: "stylesheet", href: "/css/event_style.css" },
                { rel: "stylesheet", href: "/css/event_responsive.css" },
            ],
        };
    }
}
</script>


