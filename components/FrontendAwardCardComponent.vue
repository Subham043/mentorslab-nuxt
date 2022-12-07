<template>
    <div class="col-lg-4 col-md-4 certificate-col">
        <!-- Certificate Item Start -->
        <div class="certificate-item text-center">
            <div class="certificate-img">
                <img :src="image" loading="lazy" alt="">
            </div>
            <div class="certificate-content">
                <h3 class="title">{{title}}
                </h3>
                <!-- <p>Start streaming on-demand video lectures today from instructors Attention heatmaps.</p> -->
            </div>
        </div>
        <!-- Certificate Item End -->
    </div>
</template>


<script>
export default {
    name: 'FrontendAwardCardComponent',
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
    }
}
</script>