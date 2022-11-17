<template>
    <!-- Simple card -->
    <div class="card d-block bg-holder-img  ribbon-box">
        <div class="card-body">
            <img class="card-img-top" :src="`${apiUrl}/live-session-content-user/image/${uuid}`" alt="Card image cap">
            <div v-if="paid && !purchased" class="ribbon ribbon-info float-end"><i class="mdi mdi-access-point me-1"></i> Rs. &nbsp;{{amount}}</div>
            <h5 class="card-title fw-600">{{title}}</h5>
            <p class="card-text text-gray-600 truncate">{{heading}}</p>
            <NuxtLink :to="`/live-session-content/detail/${uuid}`" class="btn btn-primary-light">
                <span v-if="paid && !purchased"> Buy Now @ Rs. {{amount}}</span>
                <template v-else-if="paid && purchased">
                    <span v-if="status==='PENDING' && assignedRole==='PURCHASED'"> Request Session </span>
                    <span v-else-if="status==='USER_REQUESTED' && assignedRole==='PURCHASED'"> Requested </span>
                    <span v-else-if="status==='SCHEDULED' && assignedRole==='PURCHASED'"> Scheduled </span>
                    <span v-else-if="status==='RESCHEDULED' && assignedRole==='PURCHASED'"> Rescheduled </span>
                </template>
                <span v-else-if="!paid && !purchased"> Request Session </span>
                <template v-else-if="!paid && purchased">
                    <span v-if="status==='PENDING' && assignedRole==='ASSIGNED'"> Request Session </span>
                    <span v-else-if="status==='USER_REQUESTED' && assignedRole==='ASSIGNED'"> Requested </span>
                    <span v-else-if="status==='SCHEDULED' && assignedRole==='ASSIGNED'"> Scheduled </span>
                    <span v-else-if="status==='RESCHEDULED' && assignedRole==='ASSIGNED'"> Rescheduled </span>
                </template>
            </NuxtLink>
        </div> <!-- end card-body-->
    </div> <!-- end card-->
</template>

<script>
export default {
    name: 'LiveContentCardComponent',
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
        scheduledOn:{
            type: String,
            default: ''
        },
        scheduledAt:{
            type: String,
            default: ''
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