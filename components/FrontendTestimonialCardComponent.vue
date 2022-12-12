<template>
    <div class="swiper-slide">
        <!-- Single Testimonial Start -->
        <div class="single-testimonial">
            <div class="testimonial-img">
                <img :src="image" loading="lazy" alt="">
            </div>
            <div class="testimonial-content color-1">
                <p>{{message}}</p>
                <div class="testimonial-bottom">
                    <div class="name-degree">
                        <span class="name">{{title}}</span>
                        <span class="degree">{{designation}}</span>
                    </div>
                    <span><i class="flaticon-straight-quotes"></i></span>
                </div>
            </div>
        </div>
        <!-- Single Testimonial End -->
    </div>
</template>

<script>
export default {
    name: 'FrontendTestimonialCardComponent',
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
        message: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
        designation: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
    }
}
</script>

<style scoped>
.single-testimonial {
    margin-left: 10px;
    margin-right: 10px;
}
</style>