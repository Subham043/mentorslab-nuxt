<template>
    <NuxtLink class="post-link" :to="link">
        <div class="post-thumb">
            <img :src="image" alt="" />
        </div>
        <div class="post-text">
            <h4 class="title">{{title}}</h4>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    name: 'CourseCardComponent',
    props: {
        image: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        title: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        link: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
    }
}
</script>