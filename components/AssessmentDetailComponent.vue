<template>
  <div class="row justify-content-center">
    <div class="col-lg-8 col-sm-12">
        <div class="box bg-holder-img ">
            <div class="box-body">
                <div class="row">

                    <div class="col-sm-12 events-content">
                        <div class="selected">
                            <div class="row justify-content-between align-items-center">
                                <div class="col-12">
                                  <div class="box box-body b-1 text-center no-shadow">
                                      <img id="product-image" :src="`${apiUrl}/assessment-user/image/${uuid}`" class="img-responsive bg-light rounded img-fluid card-img-top" alt="" />
                                  </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center flex-wrap col-12">
                                  <div class="d-inline col-auto">
                                      <h1 class="m-0" style="font-weight:bold;color:#0047b2;">{{name}}</h1>
                                      <!-- <h4 class=""><span class="badge badge-success-light">Assessment</span></h4> -->
                                  </div>
                                  <button v-if="paid && !purchased" type="button" class="btn btn-primary btn-outline m-0" @click="$emit('payment-click')"><i class="mdi mdi-cart me-1"></i> Buy Now @ Rs. {{amount}} & Start Assessment</button>
                                  <template v-else-if="paid && purchased">
                                      <button v-if="status==='PENDING' && assignedRole==='PURCHASED'" type="button" class="btn btn-primary btn-outline m-0" @click="$emit('request-session-click')"><i class="mdi mdi-cart me-1"></i> Start Assessment </button>
                                      <NuxtLink v-else-if="status==='ONGOING' && assignedRole==='PURCHASED'" :to="`/assessment/sets/${uuid}`" type="button" class="btn btn-warning btn-outline m-0"><i class="mdi mdi-cart me-1"></i> Continue Assessment </NuxtLink>
                                      <NuxtLink v-else-if="status==='COMPLETED' && assignedRole==='PURCHASED'" :to="`/assessment/report/${uuid}`" type="button" class="btn btn-success btn-outline m-0"><i class="mdi mdi-cart me-1"></i> View Assessment Report </NuxtLink>
                                      <template v-else-if="status==='ABORTED' && assignedRole==='PURCHASED'">
                                        <el-tag type="danger" effect="dark">DEBARRED</el-tag><br/><br/>
                                        {{ reason }}
                                      </template>
                                  </template>
                                  <button v-else-if="!paid && !purchased" type="button" class="btn btn-primary btn-outline m-0" @click="$emit('request-session-click')"><i class="mdi mdi-cart me-1"></i> Start Assessment </button>
                                  <template v-else-if="!paid && purchased">
                                      <button v-if="status==='PENDING' && assignedRole==='ASSIGNED'" type="button" class="btn btn-primary btn-outline m-0" @click="$emit('request-session-click')"><i class="mdi mdi-cart me-1"></i> Start Assessment </button>
                                      <NuxtLink v-else-if="status==='ONGOING' && assignedRole==='ASSIGNED'" :to="`/assessment/sets/${uuid}`" type="button" class="btn btn-warning btn-outline m-0" ><i class="mdi mdi-cart me-1"></i> Continue Assessment </NuxtLink>
                                      <NuxtLink v-else-if="status==='COMPLETED' && assignedRole==='ASSIGNED'" :to="`/assessment/report/${uuid}`" type="button" class="btn btn-success btn-outline m-0" ><i class="mdi mdi-cart me-1"></i> View Assessment Report </NuxtLink>
                                      <template v-else-if="status==='ABORTED' && assignedRole==='ASSIGNED'">
                                        <el-tag type="danger">DEBARRED</el-tag><br/><br/>
                                        {{ reason }}
                                      </template>
                                  </template>
                                </div>
                            </div>
                            <hr class="mt-10 mb-20">
                            <!-- <h5 class="">{{heading}}</h5> -->
                            <p v-html-safe="paragraph" class="text-fade"></p>
                            <div>
                              <button v-if="paid && !purchased" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('payment-click')"><i class="mdi mdi-cart me-1"></i> Buy Now @ Rs. {{amount}} & Start Assessment</button>
                              <template v-else-if="paid && purchased">
                                  <button v-if="status==='PENDING' && assignedRole==='PURCHASED'" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('request-session-click')"><i class="mdi mdi-cart me-1"></i> Start Assessment </button>
                                  <NuxtLink v-else-if="status==='ONGOING' && assignedRole==='PURCHASED'" :to="`/assessment/sets/${uuid}`" type="button" class="btn btn-warning btn-outline mt-2"><i class="mdi mdi-cart me-1"></i> Continue Assessment </NuxtLink>
                                  <NuxtLink v-else-if="status==='COMPLETED' && assignedRole==='PURCHASED'" :to="`/assessment/report/${uuid}`" type="button" class="btn btn-success btn-outline mt-2"><i class="mdi mdi-cart me-1"></i> View Assessment Report </NuxtLink>
                                  <template v-else-if="status==='ABORTED' && assignedRole==='PURCHASED'">
                                    <el-tag type="danger" effect="dark">DEBARRED</el-tag><br/><br/>
                                    {{ reason }}
                                  </template>
                              </template>
                              <button v-else-if="!paid && !purchased" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('request-session-click')"><i class="mdi mdi-cart me-1"></i> Start Assessment </button>
                              <template v-else-if="!paid && purchased">
                                  <button v-if="status==='PENDING' && assignedRole==='ASSIGNED'" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('request-session-click')"><i class="mdi mdi-cart me-1"></i> Start Assessment </button>
                                  <NuxtLink v-else-if="status==='ONGOING' && assignedRole==='ASSIGNED'" :to="`/assessment/sets/${uuid}`" type="button" class="btn btn-warning btn-outline mt-2" ><i class="mdi mdi-cart me-1"></i> Continue Assessment </NuxtLink>
                                  <NuxtLink v-else-if="status==='COMPLETED' && assignedRole==='ASSIGNED'" :to="`/assessment/report/${uuid}`" type="button" class="btn btn-success btn-outline mt-2" ><i class="mdi mdi-cart me-1"></i> View Assessment Report </NuxtLink>
                                  <template v-else-if="status==='ABORTED' && assignedRole==='ASSIGNED'">
                                    <el-tag type="danger">DEBARRED</el-tag><br/><br/>
                                    {{ reason }}
                                  </template>
                              </template>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "AssessmentDetailComponent",
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
    height: 400px;
    width: 100%;
    object-fit: cover;
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
