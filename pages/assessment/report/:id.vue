<template>
    <div>
        <section class="content">
            <div class="box-header d-flex justify-content-between align-items-center box-header-user">
                <UserCrumbComponent main-page="Assessment" current-page="Report" />
            </div>
            <div v-if="!status" class="center-placement">
                <div>
                    <h5>Oops!! You are trying to view an invalid assessment report</h5>
                    <NuxtLink :to="`/assessment/detail/${uuid}`" type="button" class="btn btn-primary btn-outline mt-2"> Go Back </NuxtLink>
                </div>
            </div>
            <template v-else>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="box bg-holder-img ">
                          <div class="box-body">
                              <div class="row">

                                  <div class="col-sm-12 events-content">
                                      <div class="selected">
                                          <div class="row justify-content-between align-items-flex-end">
                                            <div class="d-inline col-md-12 col-sm-12 order-1-sm">
                                              <el-descriptions class="margin-top" title="Assessment Report" :column="1" size="large" border>
                                                <el-descriptions-item>
                                                  <template slot="label">
                                                   <b>Total Questions</b>
                                                  </template>
                                                  <div style="text-align: right;">
                                                    {{ total_questions }}
                                                  </div>
                                                </el-descriptions-item>
                                                <el-descriptions-item>
                                                  <template slot="label">
                                                    <b>Attempted</b>
                                                  </template>
                                                  <div style="text-align: right;">
                                                    {{ attempted }}
                                                  </div>
                                                </el-descriptions-item>
                                              </el-descriptions>
                                              <hr/>
                                              <br/>
                                            </div>
                                            <div class="d-inline col-md-12 col-sm-12 order-1-sm">
                                              <el-descriptions class="margin-top" title="Assessment Analysis" :column="1" size="large" border>
                                                <el-descriptions-item v-for="item in main_report" :key="item.id">
                                                  <template slot="label">
                                                    <el-badge :value="item.point" class="item">
                                                      <el-tag type="info">{{ item.category }}</el-tag>
                                                    </el-badge>
                                                  </template>
                                                  <div style="text-align: right;">
                                                    {{ item.choices }}
                                                  </div>
                                                </el-descriptions-item>
                                              </el-descriptions>
                                              <hr/>
                                              <br/>
                                            </div>
                                            <div class="col-12">
                                              <div v-html-safe="main_report_data.message" class="my-10" />
                                              <p>
                                                <code>NOTE : </code> This report is an indicator and acts only as a guide to help you to engage in a vocation or a profession suitable to your propensities, under the current circumstances and conditions you have taken the test.
                                              </p>
                                              <hr/>
                                              <br/>
                                            </div>
                                            <div class="d-inline col-md-12 col-sm-12 order-1-sm">

                                              <h4 class="">
                                                <span class="badge badge-primary-light">Question ({{ currentPage }} / {{ total_questions }})</span>
                                              </h4>
                                              <div v-if="image" class="box box-body b-1 text-center no-shadow" style="max-width:200px;">
                                                <img id="product-image" :src="`${apiUrl}/assessment-user/question-answer-image/${image}`" class="img-responsive bg-light rounded img-fluid card-img-top" alt="" />
                                              </div>
                                              <div v-html-safe="question" class="mt-0" />
                                            </div>

                                          </div>
                                          <hr class="mt-10 mb-20">
                                          <div class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" :label="answer_a_choice_id" :disabled="tableData.length > 0 && answer_a_choice_id !== tableData[0].selected_answer_id">Option A :
                                            </el-radio>
                                            <div v-html-safe="answer_a" class="my-10" />
                                            <p>
                                              <b>Category</b> : {{ answer_a_choice.category }}
                                            </p>
                                            <p>
                                              <b>Preferred Choices</b> : {{ answer_a_choice.choices }}
                                            </p>
                                          </div>
                                          <div class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" :label="answer_b_choice_id" :disabled="tableData.length > 0 && answer_b_choice_id !== tableData[0].selected_answer_id">Option B :
                                            </el-radio>
                                            <div v-html-safe="answer_b" class="my-10" />
                                            <p>
                                              <b>Category</b> : {{ answer_b_choice.category }}
                                            </p>
                                            <p>
                                              <b>Preferred Choices</b> : {{ answer_b_choice.choices }}
                                            </p>
                                          </div>
                                          <div v-if="answer_c_choice" class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" :label="answer_c_choice_id" :disabled="tableData.length > 0 && answer_c_choice_id !== tableData[0].selected_answer_id">Option C :
                                            </el-radio>
                                            <div v-html-safe="answer_c" class="my-10" />
                                            <p>
                                              <b>Category</b> : {{ answer_c_choice.category }}
                                            </p>
                                            <p>
                                              <b>Preferred Choices</b> : {{ answer_c_choice.choices }}
                                            </p>
                                          </div>
                                          <div  v-if="answer_d_choice" class="py-20" style="border-bottom: 1px dotted black;">
                                            <el-radio v-model="radio" :label="answer_d_choice_id" :disabled="tableData.length > 0 && answer_d_choice_id !== tableData[0].selected_answer_id">Option D :
                                            </el-radio>
                                            <div v-html-safe="answer_d" class="my-10" />
                                            <p>
                                              <b>Category</b> : {{ answer_d_choice.category }}
                                            </p>
                                            <p>
                                              <b>Preferred Choices</b> : {{ answer_d_choice.choices }}
                                            </p>
                                          </div>
                                          <div class="py-20 text-center">
                                            <pagination v-model="currentPage" :records="count" :per-page="1" @paginate="handlePaginationChnage"/>
                                          </div>
                                      </div>
                                  </div>


                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
            </template>
        </section>
    </div>
</template>

<script>
import UserCrumbComponent from '~/components/UserCrumbComponent.vue';

export default {
    name: "AssessmentAppearPage",
    components: { UserCrumbComponent },
    layout: "UserLayout",
    data() {
        return {
            count: 1,
            tableData: [],
            currentPage: 1,
            id: 0,
            uuid: "",
            question: "",
            answer_a: "",
            answer_a_choice_id: "",
            answer_a_choice: null,
            answer_b: "",
            answer_b_choice_id: "",
            answer_b_choice: null,
            answer_c: "",
            answer_c_choice_id: "",
            answer_c_choice: null,
            answer_d: "",
            answer_d_choice_id: "",
            answer_d_choice: null,
            duration: 0,
            current_total_marks: 0,
            current_marks: 0,
            image: null,
            status: false,
            radio: "",
            warnStatus: false,
            warnCounter: 0,
            total_questions: 0,
            total_marks: 0,
            attempted: 0,
            marks_alloted: 0,
            percentage: 0,
            current_question: 0,
            main_report: [],
            main_report_data: null,
        };
    },
    computed: {
        apiUrl() {
            return this.$config.apiURL;
        },
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
        }
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo("#__nuxt", 0, { force: true });
        }
        this.handlePageChnage();
    },
    methods: {
        async getTableData(page = 0) {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get("/assessment-user/report/" + this.$route.params.id + "?skip=" + page); // eslint-disable-line
                this.main_report = response?.data?.data?.main_report;
                this.main_report_data = this.main_report.reduce(function(prev, current) {
                    return (prev.point > current.point) ? prev : current
                })
                this.tableData = response?.data?.data?.data;
                this.count = response?.data?.data?.count;
                this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
                this.id = response.data.data.questionSet.id;
                this.uuid = response.data.data.questionSet.uuid;
                this.question = response.data.data.questionSet.question;
                this.answer_a = response.data.data.questionSet.answer_a;
                this.answer_a_choice_id = response.data.data.questionSet.answer_a_choice_id;
                this.answer_a_choice = response.data.data.questionSet.answer_a_choice;
                this.answer_b = response.data.data.questionSet.answer_b;
                this.answer_b_choice_id = response.data.data.questionSet.answer_b_choice_id;
                this.answer_b_choice = response.data.data.questionSet.answer_b_choice;
                this.answer_c = response.data.data.questionSet.answer_c;
                this.answer_c_choice_id = response.data.data.questionSet.answer_c_choice_id;
                this.answer_c_choice = response.data.data.questionSet.answer_c_choice;
                this.answer_d = response.data.data.questionSet.answer_d;
                this.answer_d_choice_id = response.data.data.questionSet.answer_d_choice_id;
                this.answer_d_choice = response.data.data.questionSet.answer_d_choice;
                this.image = response.data.data.questionSet.image;
                this.radio = this.tableData.length > 0 ? this.tableData[0].selected_answer_id : "";
                this.current_marks = this.tableData.length > 0 ? this.tableData[0].marks : "";
                this.current_total_marks = parseInt(response.data.data.questionSet.marks);
                this.status = true;
                this.total_questions = response?.data?.data?.total_questions;
                this.attempted = response?.data?.data?.attempted;
                this.marks_alloted = response?.data?.data?.marks_alloted;
                this.total_marks = response?.data?.data?.total_marks;
                this.percentage = response?.data?.data?.percentage;
            }
            catch (err) {
                // console.log(err.response);// eslint-disable-line
                if (err?.response?.data?.message)
                    this.$toast.error(err?.response?.data?.message);
                if (err?.response?.data?.error)
                    this.$toast.error(err?.response?.data?.error);
            }
            finally {
                loading.close();
            }
        },
        handlePaginationChnage(page) {
            this.$router.push({ query: { page } });
        },
        handlePageChnage() {
            this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getTableData(this.$route.query.page ? (this.$route.query.page * 1) - 1 : 0);
            // console.log(this.currentPage);
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
.center-placement{
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 100vh;
    text-align: center;
}

.countdown{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.timer {
    background: -webkit-linear-gradient(left, #eee 50%, #019ff8 50%);
    border-radius: 100%;
    height: calc(var(--size) * 1px);
    width: calc(var(--size) * 1px);
    position: relative;
    -webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) infinite;
      -webkit-mask: radial-gradient(transparent 50%,#000 50%);
      mask: radial-gradient(transparent 50%,#000 50%);
}
.timer-full {
    font-size: 3.2rem;
    display: inline-block;
    vertical-align: top;
    font-weight: 600;
    background: -webkit-linear-gradient(left, #eee 100%, #019ff8 50%);
    border-radius: 100%;
    height: calc(var(--size) * 1px);
    width: calc(var(--size) * 1px);
    position: relative;
    -webkit-animation: time calc(var(--duration) * 1s) steps(1000, start) infinite;
      -webkit-mask: radial-gradient(transparent 50%,#000 50%);
      mask: radial-gradient(transparent 50%,#000 50%);
}
.mask {
    border-radius: 100% 0 0 100% / 50% 0 0 50%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
    -webkit-animation: mask calc(var(--duration) * 1s) steps(500, start) infinite;
    -webkit-transform-origin: 100% 50%;
}
@keyframes time {
    100% {
        -webkit-transform: rotate(360deg);
    }
}
@keyframes mask {
    0% {
        background: #019ff8;
        -webkit-transform: rotate(0deg);
    }
    50% {
        background: #019ff8;
        -webkit-transform: rotate(-180deg);
    }
    50.01% {
        background: #eee;
        -webkit-transform: rotate(0deg);
    }
    100% {
        background: #eee;
        -webkit-transform: rotate(-180deg);
    }
}
</style>
