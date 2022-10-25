<template>
    <div>
        <iframe :src="file" width="100%" height="300px" />
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
