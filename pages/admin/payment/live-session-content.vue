<template>
    <div>
        <BreadcrumbComponent main-page="Payment" current-page="Live Session Content" />
        <section class="content">
            <div class="row">

                <div class="col-12">
                    <div class="box">
                        <div class="box-header d-flex justify-content-between align-items-center">
                            <h4 class="box-title">Live Session Content</h4>
                        </div>
                        <div class="box-body">
                            <el-table :data="tableData" style="width: 100%" max-height="100%">
                                <el-table-column fixed prop="id" label="ID" width="150">
                                </el-table-column>
                                <el-table-column prop="orderId" label="Order Id" width="250">
                                </el-table-column>
                                <el-table-column prop="paymentDoneBy.name" label="User Name" width="250">
                                </el-table-column>
                                <el-table-column prop="paymentDoneBy.email" label="User Email" width="250">
                                </el-table-column>
                                <el-table-column prop="paymentDoneBy.phone" label="User Phone" width="250">
                                </el-table-column>
                                <el-table-column prop="forLiveSessionContentAssigned.liveSessionContent.name" label="Content Name" width="250">
                                </el-table-column>
                                <el-table-column prop="forLiveSessionContentAssigned.liveSessionContent.heading" label="Content Heading" width="250">
                                </el-table-column>
                                <el-table-column label="Status" width="150">
                                    <template slot-scope="scope">
                                        <span v-if="scope.row.status=='PAID_FULL'" class="badge badge-success">PAID</span>
                                        <span v-else class="badge badge-danger">UNPAID</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="CreatedAt" width="250">
                                    <template slot-scope="scope">
                                        {{$dateFns.format(new Date(scope.row.createdAt), 'dd-MMM-yyyy hh:mm aa')}}
                                    </template>
                                </el-table-column>
                                <el-table-column fixed="right" label="Amount" width="120">
                                    <template slot-scope="scope">
                                        Rs. {{scope.row.amount}}
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="box-footer text-center">
                            <pagination v-model="currentPage" :records="count" :per-page="10" @paginate="handlePaginationChnage"/>
                        </div>
                    </div>
                </div>

                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
    </div>
</template>
  
<script>
import BreadcrumbComponent from '~/components/BreadcrumbComponent.vue';
export default {
    name: "PaymentContentListPage",
    components: { BreadcrumbComponent },
    layout: "AdminLayout",
    data() {
        return {
            count:1,
            tableData: [],
            currentPage: 1
        }
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
        }
    },
    mounted(){
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if(process.client){
            this.$scrollTo('#__nuxt', 0, {force: true})
        }
        this.handlePageChnage();
    },
    methods: {
        async getTableData(page=0) {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/payment/live-session-content-paginate?skip='+page); // eslint-disable-line
                this.tableData = response?.data?.data?.data
                this.count = response?.data?.data?.count
                this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            } finally {
                loading.close()
            }
        },
        handlePaginationChnage(page){
            this.$router.push({query:{page}});
        },
        handlePageChnage(){
            this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getTableData(this.$route.query.page ? (this.$route.query.page*10)-10 : 0);
            // console.log(this.currentPage);
        }
    }
}
</script>
  