<template>
  <div>
    <section class="content">
      <div class="box-header d-flex justify-content-between align-items-center box-header-user">
        <UserCrumbComponent main-page="Assessment" current-page="Report" />
      </div>
      <div v-if="!status" class="center-placement">
        <div>
          <h5>Oops!! You are trying to view an invalid assessment report</h5>
          <NuxtLink :to="`/assessment/detail/${uuid}`" type="button" class="btn btn-primary btn-outline mt-2"> Go Back
          </NuxtLink>
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
                      <h2>{{ name }}</h2>
                      <hr>
                      <div class="row align-items-end">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <p><b>Dear: {{ $auth.user.name }}.</b></p>
                          <p>Congratulations. You have made a beginning and getting ready for a journey in your personal life.
                          </p>
                          <p>You will want to know the answers to many questions, answers for which, you may not find outside.
                          </p>
                          <p>
                            <strong><code><u>This report is an indicator and acts only as a guide to help you to engage in a vocation<br/> or a profession suitable to your propensities, under the current circumstances and conditions<br/> you have taken the test.</u></code></strong>
                          </p>
                          <p><strong>However, it is possible to succeed, be happy with the profession & vocation of your
                          choice.</strong></p>
                          <p v-for="(item, i) in mainReportSorted?.data" :key="i">
                            <template v-if="i==0">
                              You belong to the category of {{ item.category }} person. Which would be your first choice.
                              Few of the future courses would be from any of the following:
                              <span v-html-safe="item.choices" />
                            </template>
                          </p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                          <h5 class="text-center"><strong><i><u>Based on the scores, which suggests the following</u> :</i></strong></h5>
                          <pie-chart :data="mainReportSorted?.graph"></pie-chart>
                        </div>
                      </div>

                      <!-- <div class="simple-bar-chart">

                        <div v-for="(item, i) in mainReportSorted?.data" :key="item.id" class="item" :style="`--clr: ${rgb[i]}; --val: ${(item.point/attempted)*100}`">
                          <div class="label">{{ item.category }}</div>
                          <div class="value">{{((item.point/attempted)*100).toFixed(2)}}%</div>
                        </div>

                      </div> -->
                      <p><strong>However, the preferences are likely to narrow down, after confirming your basic personality traits &
                      motivational levels.</strong></p>
                      <div class="row justify-content-center">
                        <div v-for="(item, i) in mainReportSorted?.data" :key="i" class="col-lg-auto col-md-auto col-sm-12">
                          <div class="ribbon-box">
                            <div class="cross-shadow-ribbon" :style="`--clr: ${rgb[i]};`">
                              {{ item.category }}
                            </div>
                            <div class="featured-badge">
                              <span>#{{ i+1 }}</span>
                            </div>
                            <div v-html-safe="item.choices" class="text-center" />
                          </div>
                        </div>
                      </div>
                      <div v-html-safe="main_report_data.message" class="my-10" />
                      <hr>
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
                          <hr />
                          <br />
                        </div>
                        <div class="d-inline col-md-12 col-sm-12 order-1-sm">
                          <el-descriptions class="margin-top" title="Assessment Analysis" :column="1" size="large" border>
                            <el-descriptions-item v-for="item in mainReportSorted?.data" :key="item.id">
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
                          <!-- <hr />
                          <br /> -->
                        </div>
                        <!-- <div class="d-inline col-md-12 col-sm-12 order-1-sm">

                          <h4 class="">
                            <span class="badge badge-primary-light">Question ({{ currentPage }} / {{ total_questions
                            }})</span>
                          </h4>
                          <div v-if="image" class="box box-body b-1 text-center no-shadow" style="max-width:200px;">
                            <img id="product-image" :src="`${apiUrl}/assessment-user/question-answer-image/${image}`"
                              class="img-responsive bg-light rounded img-fluid card-img-top" alt="" />
                          </div>
                          <div v-html-safe="question" class="mt-0" />
                        </div> -->

                      </div>
                      <!-- <hr class="mt-10 mb-20"> -->
                      <!-- <div class="py-20" style="border-bottom: 1px dotted black;">
                        <el-radio v-model="radio" :label="answer_a_choice_id"
                          :disabled="tableData.length > 0 && answer_a_choice_id !== tableData[0].selected_answer_id">Option
                          A :
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
                        <el-radio v-model="radio" :label="answer_b_choice_id"
                          :disabled="tableData.length > 0 && answer_b_choice_id !== tableData[0].selected_answer_id">Option
                          B :
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
                        <el-radio v-model="radio" :label="answer_c_choice_id"
                          :disabled="tableData.length > 0 && answer_c_choice_id !== tableData[0].selected_answer_id">Option
                          C :
                        </el-radio>
                        <div v-html-safe="answer_c" class="my-10" />
                        <p>
                          <b>Category</b> : {{ answer_c_choice.category }}
                        </p>
                        <p>
                          <b>Preferred Choices</b> : {{ answer_c_choice.choices }}
                        </p>
                      </div>
                      <div v-if="answer_d_choice" class="py-20" style="border-bottom: 1px dotted black;">
                        <el-radio v-model="radio" :label="answer_d_choice_id"
                          :disabled="tableData.length > 0 && answer_d_choice_id !== tableData[0].selected_answer_id">Option
                          D :
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
                        <pagination v-model="currentPage" :records="count" :per-page="1"
                          @paginate="handlePaginationChnage" />
                      </div> -->
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
      rgb: [],
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
      name: '',
      heading: '',
    };
  },
  computed: {
    apiUrl() {
      return this.$config.apiURL;
    },
    mainReportSorted() {
      const report = [...this.main_report];
      const sortedReport = report.sort((a, b) => {return b.point - a.point;});
      const data = [];
      const graph = [];
      for (let index = 0; index < sortedReport.length; index++) {
        if(index>2){
          break;
        }
        data.push(sortedReport[index]);
        graph.push([sortedReport[index].category, sortedReport[index].point]);
      }
      return {
        data,
        graph,
      };
    },
  },
  watch: {
    $route(to, from) {
      this.handlePageChnage();
    },
    main_report(to, from){
      this.generateColorArray();
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      this.$scrollTo("#__nuxt", 0, { force: true });
    }
    this.checkId()
    this.handlePageChnage();
    this.generateColorArray();
  },
  methods: {
    randomRgbColor(){
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    },
    generateColorArray(){
      // for(let i = 0; i < this.main_report.length; i++){
      //   this.rgb.push(this.randomRgbColor());
      // }
      this.rgb = ['rgb(51 101 199)', 'rgb(220 57 18)', 'rgb(255 153 0)'];
    },
    async checkId() {
      const loading = this.$loading({
        lock: true,
        fullscreen: true,
      });
      if (!this.$route.params.id) {
        this.$toast.error('Invalid ID')
        this.$router.push('/assessment/all');
      }
      try {
        const response = await this.$privateApi.get('/assessment-user/' + this.$route.params.id); // eslint-disable-line
        this.name = response.data.data.name;
        this.heading = response.data.data.heading;
      } catch (err) {
        if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
        if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
        this.$router.push('/assessment/all');
      } finally {
        loading.close()
      }
    },
    async getTableData(page = 0) {
      const loading = this.$loading({
        lock: true,
        fullscreen: true,
      });
      try {
        const response = await this.$privateApi.get("/assessment-user/report/" + this.$route.params.id + "?skip=" + page); // eslint-disable-line
        this.main_report = response?.data?.data?.main_report;
        this.main_report_data = this.main_report.reduce(function (prev, current) {
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

.align-items-flex-end {
  align-items: flex-end;
}

.bg-holder-img {
  position: relative;
  background-repeat: no-repeat;
  z-index: 0;
  background-image: url('/images/abstract-2.svg');
  background-position: left top;
  background-size: 13% auto;
}

.center-placement {
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 100vh;
  text-align: center;
}

.simple-bar-chart{
  --line-count: 10;
  --line-color: currentcolor;
  --line-opacity: 0.25;
  --item-gap: 2%;
  --item-default-color: #060606;

  height: 25rem;
  display: grid;
  grid-auto-flow: column;
  gap: var(--item-gap);
  align-items: end;
  padding-inline: var(--item-gap);
  --padding-block: 1.5rem; /*space for labels*/
  padding-block: var(--padding-block);
  position: relative;
  isolation: isolate;
  margin-top: 25px;
  margin-bottom: 25px;
}

.simple-bar-chart::after{
  content: "";
  position: absolute;
  inset: var(--padding-block) 0;
  z-index: -1;
  --line-width: 1px;
  --line-spacing: calc(100% / var(--line-count));
  background-image: repeating-linear-gradient(to top, transparent 0 calc(var(--line-spacing) - var(--line-width)), var(--line-color) 0 var(--line-spacing));
  box-shadow: 0 var(--line-width) 0 var(--line-color);
  opacity: var(--line-opacity);
}
.simple-bar-chart > .item{
  height: calc(1% * var(--val));
  background-color: var(--clr, var(--item-default-color));
  position: relative;
  animation: item-height 1s ease forwards
}
@keyframes item-height { from { height: 0 } }

.simple-bar-chart > .item > * { position: absolute; text-align: center }
.simple-bar-chart > .item > .label {
  inset: 100% 0 auto 0;
  color: #000;
  font-size: 15px;
}
.simple-bar-chart > .item > .value { inset: auto 0 100% 0 }

.ribbon-box {
	border: 1px solid #CCC;
	padding: 40px 60px 15px 10px;
	background: #FFF;
	max-width: 300px;
	position: relative;
	border-radius: 3px;
  margin: 30px auto 45px;
}
.cross-shadow-ribbon {
  position: absolute;
  background: var(--clr, var(--item-default-color));
  top: -15px;
  padding: 10px;
  margin-left: 15px;
  color: #FFF;
  border-radius: 0 0 2px 2px;
}
.cross-shadow-ribbon:before {
  content: "";
  position: absolute;
  left: -15px;
  right: 0;
  top: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-bottom: 15px solid var(--clr, var(--item-default-color));
  border-left: 15px solid transparent;
}


.featured-badge {
  --badge-size: 4rem;
  height: var(--badge-size);
  width: var(--badge-size);
  position: absolute;
  right: -10px;
  bottom: -20px;
}
/* add ribbons */
.featured-badge::before,
.featured-badge::after {
  content: '';
  position: absolute;
  top: 50%;
  width: calc(var(--badge-size) / 4);
  height: calc(var(--badge-size) * 0.75);
  background: #ff0000;
  border-width: 0 calc(var(--badge-size) / 16);
  border-color: #140037;
  border-style: solid;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 90%, 0% 100%);
}
.featured-badge::before {
  left: 0; transform: translateX(100%) rotate(25deg);
}
.featured-badge::after {
  right: 0; transform: translateX(-100%) rotate(-25deg);
  z-index: -1;
}
/* text */
.featured-badge span {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: var(--badge-size);
  height: var(--badge-size);
  font-size: calc(var(--badge-size) / 3);
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0c808;
  box-shadow: 0.025em 0.025em 0.1em #303030;
  border-radius: 50%;
}
/* text area */
.featured-badge span::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 85%; height: 85%;
  background: #c4a408;
  box-shadow: 0.025em 0.025em 0.1em #303030 inset;
  border-radius: 50%;
  z-index: -1;
}
</style>
