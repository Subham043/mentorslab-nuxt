<template>
    <div class="swiper-slide">
        <div class="certificate-col">
            <!-- Certificate Item Start -->
            <div class="certificate-item text-center">
                <div class="certificate-img">
                    <img :src="image" loading="lazy" alt="">
                </div>
            </div>
            <!-- Certificate Item End -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendClientCardComponent',
    props: {
        image: {
            // eslint-disable-next-line vue/require-prop-type-constructor
            type: String,
            default: ''
        },
    }
}
</script>