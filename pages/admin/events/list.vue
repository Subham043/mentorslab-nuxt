<template>
    <div>
        <BreadcrumbComponent main-page="Event" current-page="List" />
        <section class="content">
            <div class="row">

                <div class="col-12">
                    <div class="box">
                        <div class="box-header d-flex justify-content-between align-items-center">
                            <h4 class="box-title">Event</h4>
                            <NuxtLink to="/admin/events/create"><el-button type="warning">Create</el-button></NuxtLink>
                        </div>
                        <div class="box-body">
                            <el-table :data="tableData" style="width: 100%" max-height="100%">
                                <el-table-column fixed prop="id" label="ID" width="150">
                                </el-table-column>
                                <el-table-column prop="title" label="Title" width="250">
                                </el-table-column>
                                <el-table-column prop="url" label="Page URL" width="250">
                                </el-table-column>
                                <el-table-column label="From Date" width="250">
                                    <template slot-scope="scope">
                                        {{$dateFns.format(new Date(scope.row.from_date), 'dd-MMM-yyyy')}}
                                    </template>
                                </el-table-column>
                                <el-table-column label="Event Time" width="250">
                                    <template slot-scope="scope">
                                        {{$dateFns.format(new Date(scope.row.time), 'hh:mm aa')}}
                                    </template>
                                </el-table-column>
                                
                                <el-table-column prop="amount" label="Amount" width="250">
                                </el-table-column>
                                <el-table-column label="Paid" width="150">
                                    <template slot-scope="scope">
                                        <span v-if="scope.row.paid==1" class="badge badge-success">Yes</span>
                                        <span v-else class="badge badge-danger">No</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="Draft" width="150">
                                    <template slot-scope="scope">
                                        <span v-if="scope.row.draft==1" class="badge badge-success">Yes</span>
                                        <span v-else class="badge badge-danger">No</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="CreatedAt" width="250">
                                    <template slot-scope="scope">
                                        {{$dateFns.format(new Date(scope.row.createdAt), 'dd-MMM-yyyy hh:mm aa')}}
                                    </template>
                                </el-table-column>
                                <el-table-column label="Operations" width="1100">
                                    <template slot-scope="scope">
                                        <NuxtLink :to="`/admin/events/edit/${scope.row.id}`"><el-button type="primary" icon="el-icon-edit" circle></el-button></NuxtLink>
                                        <el-popconfirm
                                            confirm-button-text='OK'
                                            cancel-button-text='No, Thanks'
                                            icon="el-icon-info"
                                            icon-color="red"
                                            title="Are you sure to delete this?"
                                            @confirm="deleteRow(scope.row.id)"
                                            >
                                            <el-button
                                            slot="reference" type="danger" icon="el-icon-delete"  circle
                                            ></el-button>
                                        </el-popconfirm>
                                        <NuxtLink :to="`/admin/events/call-to-action/${scope.row.id}`"><el-button type="primary">Call To Action</el-button></NuxtLink>
                                        <NuxtLink :to="`/admin/events/about-section/${scope.row.id}`"><el-button type="primary">About Section</el-button></NuxtLink>
                                        <NuxtLink :to="`/admin/events/${scope.row.id}/testimonial/list`"><el-button type="primary">Testimonial Section</el-button></NuxtLink>
                                        <NuxtLink :to="`/admin/events/${scope.row.id}/instructor/list`"><el-button type="primary">Instructor Section</el-button></NuxtLink>
                                        <NuxtLink :to="`/admin/events/${scope.row.id}/schedule/list`"><el-button type="primary">Schedule Section</el-button></NuxtLink>
                                        <NuxtLink :to="`/admin/events/${scope.row.id}/gallery`"><el-button type="primary">Gallery Section</el-button></NuxtLink>
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
    name: "ListEventPage",
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
                const response = await this.$privateApi.get('/event/paginate?skip='+page); // eslint-disable-line
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
        async deleteRow(id){
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                // eslint-disable-next-line no-unused-vars
                const response = await this.$privateApi.delete('/event/'+id);
                const newTableData = this.tableData.filter((item)=>{
                    return item.id!==id;
                })
                this.tableData = newTableData;
                this.$toast.success('Event deleted successfully')
            } catch (err) {
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
  