<template>
    <!-- Simple card -->
    <div class="card d-block">
        <img class="card-img-top" :src="type=='VIDEO' ? `/images/video.png` : `/images/pdf.png`" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title fw-600">{{title}}</h5>
            <p class="card-text text-gray-600">{{paragraph}}</p>
            <NuxtLink :to="`/content/detail/${id}`" class="btn btn-primary-light">{{paid && !purchased ? 'Buy' : 'View'}}</NuxtLink>
        </div> <!-- end card-body-->
    </div> <!-- end card-->
</template>

<script>
export default {
    name: 'ContentCardComponent',
    props:{
        id:{
            type: Number,
            default: 0
        },
        title:{
            type: String,
            default: ''
        },
        heading:{
            type: String,
            default: ''
        },
        paragraph:{
            type: String,
            default: ''
        },
        type:{
            type: String,
            default: 'VIDEO'
        },
        paid:{
            type: Boolean,
            default: false
        },
        purchased:{
            type: Boolean,
            default: false
        },
    }
}
</script>

<style scoped>
.card-img-top{
    height: 130px;
    margin-top: 10px;
    object-fit: contain;
}
</style>