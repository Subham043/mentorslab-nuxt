<template>
    <div class="col-lg-12">
        <div class="box bg-holder-img ">
            <div class="box-body">
                <div class="row">

                    <div class="col-sm-12 events-content">
                        <div class="selected">
                            <div class="row justify-content-between align-items-flex-end">
                                <div class="d-inline col-auto order-1-sm">
                                    <h3 class="mt-0">{{name}}</h3>
                                    <h4 class=""><span class="badge badge-success-light">Live Session</span></h4>

                                </div>
                                <template v-if="paid && purchased">
                                    <div class="d-inline col-auto order-3-sm mt-sm-5">
                                        <template v-if="status==='SCHEDULED' && assignedRole==='PURCHASED'">
                                            <client-only>
                                                <vac :end-time="new Date(scheduledOn).getTime()" @finish="timeElapsedHandler">
                                                    <span
                                                    slot="process"
                                                    slot-scope="{ timeObj }">
                                                    <h5 class="text-center">Time remaining before you can join the live session:</h5>
                                                    <h6 class="text-center">{{ `${timeObj.d} days ${timeObj.h} hrs ${timeObj.m} mins ${timeObj.s} secs` }}</h6>
                                                    </span>
                                                    <h6 slot="finish" class="text-center">You can click the join button to join the session!</h6>
                                                </vac>
                                            </client-only>
                                        </template>
                                        <template v-else-if="status==='RESCHEDULED' && assignedRole==='PURCHASED'">
                                            <client-only>
                                                <vac :end-time="new Date(scheduledOn).getTime()" @finish="timeElapsedHandler">
                                                    <span
                                                    slot="process"
                                                    slot-scope="{ timeObj }">
                                                    <h5 class="text-center">Time remaining before you can join the live session:</h5>
                                                    <h6 class="text-center">{{ `${timeObj.d} days ${timeObj.h} hrs ${timeObj.m} mins ${timeObj.s} secs` }}</h6>
                                                    </span>
                                                    <h6 slot="finish" class="text-center">You can click the join button to join the session!</h6>
                                                </vac>
                                            </client-only>
                                        </template>
                                    </div>
                                </template>
                                <template v-else-if="!paid && purchased">
                                    <div class="d-inline col-auto order-3-sm mt-sm-5">
                                        <template v-if="status==='SCHEDULED' && assignedRole==='ASSIGNED'">
                                            <client-only>
                                                <vac :end-time="new Date(scheduledOn).getTime()" @finish="timeElapsedHandler">
                                                    <span
                                                    slot="process"
                                                    slot-scope="{ timeObj }">
                                                    <h5 class="text-center">Time remaining before you can join the live session:</h5>
                                                    <h6 class="text-center">{{ `${timeObj.d} days ${timeObj.h} hrs ${timeObj.m} mins ${timeObj.s} secs` }}</h6>
                                                    </span>
                                                    <h6 slot="finish" class="text-center">You can click the join button to join the session!</h6>
                                                </vac>
                                            </client-only>
                                        </template>
                                        <template v-else-if="status==='RESCHEDULED' && assignedRole==='ASSIGNED'">
                                            <client-only>
                                                <vac :end-time="new Date(scheduledOn).getTime()" @finish="timeElapsedHandler">
                                                    <span
                                                    slot="process"
                                                    slot-scope="{ timeObj }">
                                                    <h5 class="text-center">Time remaining before you can join the live session:</h5>
                                                    <h6 class="text-center">{{ `${timeObj.d} days ${timeObj.h} hrs ${timeObj.m} mins ${timeObj.s} secs` }}</h6>
                                                    </span>
                                                    <h6 slot="finish" class="text-center">You can click the join button to join the session!</h6>
                                                </vac>
                                            </client-only>
                                        </template>
                                    </div>
                                </template>
                                <div class="col-md-2 col-sm-6 text-center order-2-sm">
                                    <div class="box box-body b-1 text-center no-shadow">
                                        <img id="product-image" :src="`${apiUrl}/live-session-content-user/image/${uuid}`" class="img-responsive bg-light rounded img-fluid card-img-top" alt="" />
                                    </div>
                                    <button v-if="paid && !purchased" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('payment-click')"><i class="mdi mdi-cart me-1"></i> Buy Now @ Rs. {{amount}}</button>
                                    <template v-else-if="paid && purchased">
                                        <button v-if="status==='PENDING' && assignedRole==='PURCHASED'" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('request-session-click')"><i class="mdi mdi-cart me-1"></i> Request Session </button>
                                        <button v-else-if="status==='USER_REQUESTED' && assignedRole==='PURCHASED'" type="button" class="btn btn-primary btn-outline mt-2" disabled><i class="mdi mdi-cart me-1"></i> Requested On <br/>{{$dateFns.format(new Date(scheduledAt), 'dd-MMM-yyyy hh:mm aa')}} </button>
                                        <button v-else-if="status==='SCHEDULED' && assignedRole==='PURCHASED' && !showJoinButton" type="button" class="btn btn-primary btn-outline mt-2" disabled><i class="mdi mdi-cart me-1"></i> Scheduled At <br/>{{$dateFns.format(new Date(scheduledOn), 'dd-MMM-yyyy hh:mm aa')}} </button>
                                        <button v-else-if="status==='RESCHEDULED' && assignedRole==='PURCHASED' && !showJoinButton" type="button" class="btn btn-primary btn-outline mt-2" disabled><i class="mdi mdi-cart me-1"></i> Rescheduled At <br/>{{$dateFns.format(new Date(scheduledOn), 'dd-MMM-yyyy hh:mm aa')}} </button>
                                        <NuxtLink v-else-if="showJoinButton" :to="`/live-session-content/join/${uuid}`" type="button" class="btn btn-primary btn-outline mt-2"><i class="mdi mdi-cart me-1"></i> Join Session </NuxtLink>
                                    </template>
                                    <button v-else-if="!paid && !purchased" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('request-session-click')"><i class="mdi mdi-cart me-1"></i> Request Session </button>
                                    <template v-else-if="!paid && purchased">
                                        <button v-if="status==='PENDING' && assignedRole==='ASSIGNED'" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('request-session-click')"><i class="mdi mdi-cart me-1"></i> Request Session </button>
                                        <button v-else-if="status==='USER_REQUESTED' && assignedRole==='ASSIGNED'" type="button" class="btn btn-primary btn-outline mt-2" disabled><i class="mdi mdi-cart me-1"></i> Requested On <br/>{{$dateFns.format(new Date(scheduledAt), 'dd-MMM-yyyy hh:mm aa')}} </button>
                                        <button v-else-if="status==='SCHEDULED' && assignedRole==='ASSIGNED' && !showJoinButton" type="button" class="btn btn-primary btn-outline mt-2" disabled><i class="mdi mdi-cart me-1"></i> Scheduled At <br/>{{$dateFns.format(new Date(scheduledOn), 'dd-MMM-yyyy hh:mm aa')}} </button>
                                        <button v-else-if="status==='RESCHEDULED' && assignedRole==='ASSIGNED' && !showJoinButton" type="button" class="btn btn-primary btn-outline mt-2" disabled><i class="mdi mdi-cart me-1"></i> Rescheduled At <br/>{{$dateFns.format(new Date(scheduledOn), 'dd-MMM-yyyy hh:mm aa')}} </button>
                                        <NuxtLink v-else-if="showJoinButton" :to="`/live-session-content/join/${uuid}`" type="button" class="btn btn-primary btn-outline mt-2"><i class="mdi mdi-cart me-1"></i> Join Session </NuxtLink>
                                    </template>
                                </div>
                            </div>
                            <hr class="mt-10 mb-20">
                            <h5 class="">{{heading}}</h5>
                            <p v-html-safe="paragraph" class="pb-20 text-fade"></p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "LiveContentDetailComponent",
    props: {
        id: {
            type: Number,
            default: 0
        },
        uuid: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        heading: {
            type: String,
            default: ""
        },
        paragraph: {
            type: String,
            default: ""
        },
        amount: {
            type: String,
            default: ""
        },
        status: {
            type: String,
            default: ""
        },
        assignedRole: {
            type: String,
            default: ""
        },
        paid: {
            type: Boolean,
            default: false
        },
        purchased: {
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
    data(){
        return {
            displayTimer:true,
            showJoinButton: false,
        }
    },
    computed:{
        apiUrl(){
            return this.$config.apiURL
        }
    },
    methods: {
        timeElapsedHandler(){
            this.displayTimer=false;
            this.showJoinButton= true;
        }
    }
}
</script>

<style scoped>
/* stylelint-disable */
.card-img-top{
    height: 130px;
    width: auto;
    object-fit: contain;
}
.align-items-flex-end{ align-items: flex-end;}
.bg-holder-img {
position: relative;
background-repeat: no-repeat;
z-index: 0;
background-image: url('/images/abstract-2.svg');
background-position: left top;
background-size: 13% auto;}
</style>
