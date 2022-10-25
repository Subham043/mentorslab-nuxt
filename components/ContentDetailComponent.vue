<template>
    <div class="col-lg-12">
        <div class="box">
            <div class="box-body">
                <div class="row">

                    <div v-if="!paid || (paid && purchased)" class="col-md-12 col-sm-12">
                        <div v-if="type=='PDF'" class="box box-body b-1 text-center no-shadow">
                            <PdfComponent :file="`http://localhost:3300/content-user/pdf-file/${file}`" />
                        </div>
                        <div v-else-if="type=='VIDEO'" class="box box-body b-1 text-center no-shadow">
                            <PdfComponent :file="`${videoLink}`" />
                        </div>
                        <div class="clear"></div>
                    </div>
                    
                    <div class="col-md-10 col-sm-6">
                        <div class="ps-lg-4">
                            <!-- Product title -->
                            <div class="row align-items-center">
                                <h3 class="mt-0 d-inline col-auto">{{name}}</h3>
                                <h4 class=" ms-1 d-inline col-auto"><span class="badge badge-success-light">{{type}}</span></h4>
                            </div>
                            
                            <!-- Product stock -->
                            <div class="mt-3">
                                <h5 class="mt-0 d-inline col-auto">{{heading}}</h5>
                            </div>

                            <!-- Product description -->
                            <div class="mt-4">
                                <p class="text-fade" v-html="paragraph"></p>
                            </div>

                            
                        </div>
                    </div>
                    
                    <div class="col-md-2 col-sm-6">
                        <div class="box box-body b-1 text-center no-shadow">
                            <img id="product-image" :src="type=='VIDEO' ? `/images/video.png` : `/images/pdf.png`" class="img-fluid card-img-top" alt="" />
                        </div>
                        <div class="text-center">
                            <button v-if="paid && !purchased" type="button" class="btn btn-primary mt-2"><i class="mdi mdi-cart me-1"></i> Buy Now @ Rs. {{amount}}</button>
                        </div>
                        <div class="clear"></div>
                    </div>

                </div>
            </div>				
        </div>
    </div>
</template>

<script>
import PdfComponent from './PdfComponent.vue';


export default {
    name: "ContentDetailComponent",
    // eslint-disable-next-line vue/no-unused-components
    components: { PdfComponent },
    props: {
        id: {
            type: Number,
            default: 0
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
        type: {
            type: String,
            default: ""
        },
        file: {
            type: String,
            default: ""
        },
        videoLink: {
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