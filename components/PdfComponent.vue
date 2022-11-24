<template>
    <div>
        <iframe :src="file" width="100%" class="iframe-main" />
    </div>
</template>

<script>
export default {
    name: 'PdfComponent',
    props:{
        file:{
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String|Object,
            default: ''
        },
    }
}
</script>

<style scoped>
.iframe-main{
    height: 500px;
}
@media only screen and (max-width: 500px) {
    .iframe-main{
        height: 350px;
    }

}
</style>
