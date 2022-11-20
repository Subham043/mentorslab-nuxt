<template>
    <div>
        <BreadcrumbComponent main-page="Schedule Live Session" current-page="List" />
        <section class="content">
            <div class="row">

                <div class="col-12">
                    <div class="box">
                        <div class="box-header d-flex justify-content-between align-items-center">
                            <h4 class="box-title">Schedule Live Session</h4>
                        </div>
                        <div class="box-body">
                            <el-table :data="tableData" style="width: 100%" max-height="100%">
                                <el-table-column fixed prop="id" label="ID" width="150">
                                </el-table-column>
                                <el-table-column prop="requestedBy.name" label="User Name" width="250">
                                </el-table-column>
                                <el-table-column prop="requestedBy.email" label="User Email" width="250">
                                </el-table-column>
                                <el-table-column prop="requestedBy.phone" label="User Phone" width="250">
                                </el-table-column>
                                <el-table-column prop="liveSessionContent.name" label="Content Name" width="250">
                                </el-table-column>
                                <el-table-column prop="liveSessionContent.heading" label="Content Heading" width="250">
                                </el-table-column>
                                <el-table-column label="Status" width="150">
                                    <template slot-scope="scope">
                                        <span class="badge badge-success">{{scope.row.status}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="CreatedAt" width="250">
                                    <template slot-scope="scope">
                                        {{$dateFns.format(new Date(scope.row.createdAt), 'dd-MMM-yyyy hh:mm aa')}}
                                    </template>
                                </el-table-column>
                                <el-table-column label="User Requested On" width="250">
                                    <template slot-scope="scope">
                                        {{$dateFns.format(new Date(scope.row.scheduledAt), 'dd-MMM-yyyy hh:mm aa')}}
                                    </template>
                                </el-table-column>
                                <el-table-column label="Session Scheduled On" width="250">
                                    <template slot-scope="scope">
                                        {{$dateFns.format(new Date(scope.row.scheduledOn), 'dd-MMM-yyyy hh:mm aa')}}
                                    </template>
                                </el-table-column>
                                <el-table-column fixed="right" label="Action" width="200">
                                    <template slot-scope="scope">
                                        <el-button v-if="scope.row.status=='USER_REQUESTED'" type="text" @click.prevent="openDialog(scope.row.id)">Schedule</el-button>
                                        <el-button v-if="scope.row.status=='SCHEDULED' || scope.row.status=='RESCHEDULED'" type="text" @click.prevent="openDialog2(scope.row.id)">Reschedule</el-button>
                                        <NuxtLink v-if="scope.row.status=='SCHEDULED' || scope.row.status=='RESCHEDULED'" :to="`/admin/schedule-live-session/join/${scope.row.liveSessionContent.id}`" class="text-success font-weight-bold">Join Session</NuxtLink>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                        <div class="box-footer text-center">
                            <pagination v-model="currentPage" :records="count" :per-page="10" @paginate="handlePaginationChnage"/>
                        </div>
                    </div>
                    <el-dialog title="Schedule Session" width="25%" :visible.sync="dialogFormVisible" @close="closeDialog">
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <div>
                                <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                                    <ValidationProvider v-slot="{ classes, errors }" rules="required" name="datetime">
                                        <div class="form-group">
                                            <label class="form-label">DateTime *</label><br/>
                                            <el-date-picker
                                            v-model="datetime"
                                            style="width: 100%;"
                                            type="datetime"
                                            placeholder="Select date and time"
                                            default-time="12:00:00">
                                            </el-date-picker>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    <div class="block">
                                        <span class="demonstration"></span>
                                    </div>
                                </form>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button type="primary" @click.prevent="handleSubmit(formHandler)">Confirm</el-button>
                            </span>
                        </ValidationObserver>
                    </el-dialog>
                    <el-dialog title="Reschedule Session" width="25%" :visible.sync="dialogFormVisible2" @close="closeDialog2">
                        <ValidationObserver ref="form2" v-slot="{ handleSubmit }">
                        <div>
                                <form class="form" method="post" @submit.prevent="handleSubmit(formHandler2)">
                                    <ValidationProvider v-slot="{ classes, errors }" rules="required" name="datetime">
                                        <div class="form-group">
                                            <label class="form-label">DateTime *</label><br/>
                                            <el-date-picker
                                            v-model="datetime"
                                            style="width: 100%;"
                                            type="datetime"
                                            placeholder="Select date and time"
                                            default-time="12:00:00">
                                            </el-date-picker>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    <div class="block">
                                        <span class="demonstration"></span>
                                    </div>
                                </form>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button type="primary" @click.prevent="handleSubmit(formHandler2)">Confirm</el-button>
                            </span>
                        </ValidationObserver>
                    </el-dialog>
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
    name: "ScheduleLiveSessionListPage",
    components: { BreadcrumbComponent },
    layout: "AdminLayout",
    data() {
        return {
            count:1,
            tableData: [],
            currentPage: 1,
            dialogFormVisible: false,
            dialogFormVisible2: false,
            datetime:'',
            id:'',
        }
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
        }
    },
    mounted(){
        this.handlePageChnage();
    },
    methods: {
        async getTableData(page=0) {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/live-session-assigned-content/paginate?skip='+page); // eslint-disable-line
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
        },
        openDialog(id){
            this.id=id;
            this.dialogFormVisible = true;
        },
        closeDialog(){
            this.id='';
            this.datetime='';
            this.dialogFormVisible=false;
        },
        openDialog2(id){
            this.id=id;
            this.dialogFormVisible2 = true;
        },
        closeDialog2(){
            this.id='';
            this.datetime='';
            this.dialogFormVisible2=false;
        },
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$privateApi.post('/live-session-assigned-content/schedule/'+this.id, {datetime: this.datetime}); // eslint-disable-line
                this.$toast.success('Scheduled successfully')
                this.closeDialog()
                this.handlePageChnage()
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                datetime: err?.response?.data?.form_error?.datetime,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            }finally{
            loading.close()
            }
        },
        async formHandler2() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$privateApi.post('/live-session-assigned-content/re-schedule/'+this.id, {datetime: this.datetime}); // eslint-disable-line
                this.$toast.success('Rescheduled successfully')
                this.closeDialog2()
                this.handlePageChnage()
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                datetime: err?.response?.data?.form_error?.datetime,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            }finally{
            loading.close()
            }
        },
    }
}
</script>
  