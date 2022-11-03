<template>
    <div class="col-lg-12">
        <div class="box bg-holder-img ">
            <div class="box-body">
                <div class="row">
                    
                    <div class="col-sm-12 events-content">
                        <div class="selected">
                            <div class="row justify-content-between align-items-flex-end">
                                <div class="d-inline col-auto">
                                    <h3 class="mt-0">{{name}}</h3>
                                    <h4 class=""><span class="badge badge-success-light">Live Session</span></h4>
                                </div>
                                <div class="col-md-2 col-sm-6 text-center">
                                    <div class="box box-body b-1 text-center no-shadow">
                                        <img id="product-image" :src="`${apiUrl}/live-session-content-user/image/${uuid}`" class="img-responsive bg-light rounded img-fluid card-img-top" alt="" />
                                    </div>
                                    <button v-if="paid && !purchased" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('payment-click')"><i class="mdi mdi-cart me-1"></i> Buy Now @ Rs. {{amount}}</button>
                                    <template v-else-if="paid && purchased">
                                        <button v-if="status==='PENDING' && assignedRole==='PURCHASED'" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('payment-click')"><i class="mdi mdi-cart me-1"></i> Request Session </button>
                                        <button v-else-if="status==='USER_REQUESTED' && assignedRole==='PURCHASED'" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('payment-click')"><i class="mdi mdi-cart me-1"></i> Requested </button>
                                        <button v-else-if="status==='SCHEDULED' && assignedRole==='PURCHASED'" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('payment-click')"><i class="mdi mdi-cart me-1"></i> Scheduled </button>
                                    </template>
                                    <button v-else-if="!paid && !purchased" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('payment-click')"><i class="mdi mdi-cart me-1"></i> Request Session </button>
                                    <template v-else-if="!paid && purchased">
                                        <button v-if="status==='PENDING' && assignedRole==='ASSIGNED'" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('payment-click')"><i class="mdi mdi-cart me-1"></i> Request Session </button>
                                        <button v-else-if="status==='USER_REQUESTED' && assignedRole==='ASSIGNED'" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('payment-click')"><i class="mdi mdi-cart me-1"></i> Requested </button>
                                        <button v-else-if="status==='SCHEDULED' && assignedRole==='ASSIGNED'" type="button" class="btn btn-primary btn-outline mt-2" @click="$emit('payment-click')"><i class="mdi mdi-cart me-1"></i> Scheduled </button>
                                    </template>
                                </div>
                            </div>
                            <hr class="mt-10 mb-20">
                            <h5 class="">{{heading}}</h5>
                            <p class="pb-20 text-fade" v-html="paragraph"></p>
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