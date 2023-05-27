<template>
    <!-- Simple card -->
    <div class="card d-block bg-holder-img  ribbon-box">
        <div class="card-body">
            <img class="card-img-top" :src="`${apiUrl}/assessment-user/image/${uuid}`" alt="Card image cap">
            <div v-if="paid && !purchased" class="ribbon ribbon-info float-end"><i class="mdi mdi-access-point me-1"></i> Rs. &nbsp;{{amount}}</div>
            <h5 class="card-title fw-600">{{title}}</h5>
            <p class="card-text text-gray-600 truncate">{{heading}}</p>
            <NuxtLink :to="`/assessment/detail/${uuid}`" class="btn btn-primary-light">
                <span v-if="paid && !purchased"> Pay Now @ Rs. {{amount}} & Start Assessment</span>
                <template v-else-if="paid && purchased">
                    <span v-if="status==='PENDING' && assignedRole==='PURCHASED'"> Start Assessment </span>
                    <span v-else-if="status==='ONGOING' && assignedRole==='PURCHASED'"> Continue Assessment </span>
                    <span v-else-if="status==='COMPLETED' && assignedRole==='PURCHASED'"> View Assessment Report </span>
                    <span v-else-if="status==='ABORTED' && assignedRole==='PURCHASED'"> DEBARRED </span>
                </template>
                <span v-else-if="!paid && !purchased"> Start Assessment </span>
                <template v-else-if="!paid && purchased">
                    <span v-if="status==='PENDING' && assignedRole==='ASSIGNED'"> Start Assessment </span>
                    <span v-else-if="status==='ONGOING' && assignedRole==='ASSIGNED'"> Continue Assessment </span>
                    <span v-else-if="status==='COMPLETED' && assignedRole==='ASSIGNED'"> View Assessment Report </span>
                    <span v-else-if="status==='ABORTED' && assignedRole==='ASSIGNED'"> DEBARRED </span>
                </template>
            </NuxtLink>
        </div> <!-- end card-body-->
    </div> <!-- end card-->
</template>

<script>
export default {
    name: 'AssessmentCardComponent',
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
        status:{
            type: String,
            default: ''
        },
        assignedRole:{
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
    },
    computed:{
        apiUrl(){
            return this.$config.apiURL
        }
    }
}
</script>

<style scoped>
/* stylelint-disable */
.card-img-top {
height: 170px;
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
