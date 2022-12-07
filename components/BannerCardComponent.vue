<template>
    <div class="col-lg-4 col-md-4 features-col">
        <!-- Features Item Start -->
        <div class="features-item">
            <div class="features-icon">
                <img :src="image" loading="lazy" alt="">
            </div>
            <div class="features-content">
                <h3 class="title">{{title}}</h3>
                <p>{{paragraph}}</p>
            </div>
        </div>
        <!-- Features Item End -->
    </div>
</template>


<script>
export default {
    name: 'BannerCardComponent',
    props:{
        image:{
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        title:{
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        paragraph:{
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
    }
}
</script>