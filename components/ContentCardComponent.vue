<template>
    <!-- Simple card -->
    <div class="card d-block bg-holder-img  ribbon-box">
        <div class="card-body">
            <img class="card-img-top" :src="type=='VIDEO' ? `/images/video.png` : `/images/pdf.png`" alt="Card image cap">
            <div v-if="paid && !purchased" class="ribbon ribbon-info float-end"><i class="mdi mdi-access-point me-1"></i> Rs. &nbsp;{{amount}}</div>
            <h5 class="card-title fw-600">{{title}}</h5>
            <p class="card-text text-gray-600 truncate">{{heading}}</p>
            <NuxtLink :to="`/content/detail/${uuid}`" class="btn btn-primary-light">{{paid && !purchased ? 'Buy Now' : 'View'}}</NuxtLink>
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
        uuid:{
            type: String,
            default: ''
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
        amount:{
            type: String,
            default: ''
        },
        type:{
            type: String,
            default: ''
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
/* stylelint-disable */
.card-img-top {
height: 130px;
margin-bottom: 20px;
object-fit: contain;
width: auto;
/* margin-left: 15px; */
}
.bg-holder-img {
position: relative;
background-repeat: no-repeat;
z-index: 0;
background-image: url('/images/abstract-1.svg');
background-position: right top;
background-size: 30% auto;}
.truncate {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ribbon-box .ribbon.float-end{
    margin-right: -25px;
}
.theme-primary .ribbon-box .ribbon-info:before{
    border-color: transparent;
}
</style>