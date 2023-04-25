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
                                    <h4 class=""><span class="badge badge-success-light">Exam</span></h4>

                                </div>
                                <div class="col-md-2 col-sm-6 text-center order-2-sm">
                                    <div class="box box-body b-1 text-center no-shadow">
                                        <img id="product-image" :src="`${apiUrl}/exam-user/image/${uuid}`" class="img-responsive bg-light rounded img-fluid card-img-top" alt="" />
                                    </div>
                                    <button v-if="paid && !purchased" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('payment-click')"><i class="mdi mdi-cart me-1"></i> Buy Now @ Rs. {{amount}} & Start Exam</button>
                                    <template v-else-if="paid && purchased">
                                        <button v-if="status==='PENDING' && assignedRole==='PURCHASED'" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('request-session-click')"><i class="mdi mdi-cart me-1"></i> Start Exam </button>
                                        <NuxtLink v-else-if="status==='ONGOING' && assignedRole==='PURCHASED'" :to="`/exam/sets/${uuid}`" type="button" class="btn btn-warning btn-outline mt-2"><i class="mdi mdi-cart me-1"></i> Continue Exam </NuxtLink>
                                        <NuxtLink v-else-if="status==='COMPLETED' && assignedRole==='PURCHASED'" :to="`/exam/report/${uuid}`" type="button" class="btn btn-success btn-outline mt-2"><i class="mdi mdi-cart me-1"></i> View Exam Report </NuxtLink>
                                        <template v-else-if="status==='ABORTED' && assignedRole==='PURCHASED'">
                                          <el-tag type="danger" effect="dark">DEBARRED</el-tag><br/><br/>
                                          {{ reason }}
                                        </template>
                                    </template>
                                    <button v-else-if="!paid && !purchased" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('request-session-click')"><i class="mdi mdi-cart me-1"></i> Start Exam </button>
                                    <template v-else-if="!paid && purchased">
                                        <button v-if="status==='PENDING' && assignedRole==='ASSIGNED'" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('request-session-click')"><i class="mdi mdi-cart me-1"></i> Start Exam </button>
                                        <NuxtLink v-else-if="status==='ONGOING' && assignedRole==='ASSIGNED'" :to="`/exam/sets/${uuid}`" type="button" class="btn btn-warning btn-outline mt-2" ><i class="mdi mdi-cart me-1"></i> Continue Exam </NuxtLink>
                                        <NuxtLink v-else-if="status==='COMPLETED' && assignedRole==='ASSIGNED'" :to="`/exam/report/${uuid}`" type="button" class="btn btn-success btn-outline mt-2" ><i class="mdi mdi-cart me-1"></i> View Exam Report </NuxtLink>
                                        <template v-else-if="status==='ABORTED' && assignedRole==='ASSIGNED'">
                                          <el-tag type="danger">DEBARRED</el-tag><br/><br/>
                                          {{ reason }}
                                        </template>
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
    name: "ExamDetailComponent",
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
        reason: {
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
        set: {
            type: Object,
            default: null
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
