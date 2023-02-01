<template>
    <div>
        <BreadcrumbComponent main-page="Question & Answer" current-page="Create" />
        <section class="content">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h4 class="box-title">Create Question & Answer</h4>
                        </div>
                        <!-- /.box-header -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form class="form" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="box-body">
                                <h4 class="box-title text-primary mb-0"><i class="el-icon-reading"></i> Question & Answer Info</h4>
                                <hr class="my-15">
                                <div class="row">
                                    <div class="col-md-12">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="question">
                                        <div class="form-group">
                                            <label class="form-label">Question</label>
                                        </div>
                                        <client-only>
                                          <VueEditor v-model="question" :editor-toolbar="customToolbar" />
                                        </client-only>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4 mt-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="duration">
                                        <div class="form-group">
                                            <label class="form-label">Duration (In Minutes) *</label>
                                            <el-select v-model="duration" placeholder="Select Duration" style="width:100%">
                                                <el-option
                                                v-for="item in [1,2,3,4,5,6,7,8,9,10]"
                                                :key="item"
                                                :label="item"
                                                :value="item">
                                                <span>{{ item }}</span>
                                                </el-option>
                                            </el-select>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4 mt-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="correct answer">
                                        <div class="form-group">
                                            <label class="form-label">Correct Answer *</label>
                                            <el-select v-model="correct_answer" placeholder="Select Correct Answer" style="width:100%">
                                                <el-option
                                                v-for="item in answerType"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                <span>{{ item.label }}</span>
                                                </el-option>
                                            </el-select>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4 mt-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="ext:jpg,jpeg,png,webp" name="image">
                                        <div class="form-group">
                                            <label class="form-label">Image </label>
                                            <input v-model="image" type="hidden" />
                                            <input class="form-control" type="file" @change="handleFileChnage" />
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-12 mt-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="answer_a">
                                        <div class="form-group">
                                            <label class="form-label">Answer A</label>
                                        </div>
                                        <client-only>
                                          <VueEditor v-model="answer_a" :editor-toolbar="customToolbar" />
                                        </client-only>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-12 mt-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="answer_b">
                                        <div class="form-group">
                                            <label class="form-label">Answer B</label>
                                        </div>
                                        <client-only>
                                          <VueEditor v-model="answer_b" :editor-toolbar="customToolbar" />
                                        </client-only>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-12 mt-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="answer_c">
                                        <div class="form-group">
                                            <label class="form-label">Answer C</label>
                                        </div>
                                        <client-only>
                                          <VueEditor v-model="answer_c" :editor-toolbar="customToolbar" />
                                        </client-only>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-12 mt-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="answer_d">
                                        <div class="form-group">
                                            <label class="form-label">Answer D</label>
                                        </div>
                                        <client-only>
                                          <VueEditor v-model="answer_d" :editor-toolbar="customToolbar" />
                                        </client-only>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-4 mt-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="draft">
                                        <div class="form-group">
                                            <label class="form-label">Draft</label>
                                            <el-switch
                                                v-model="draft"
                                                style="display: block"
                                                active-color="#13ce66"
                                                inactive-color="#ff4949"
                                                active-text="Yes"
                                                inactive-text="No">
                                            </el-switch>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <!-- /.box-body -->
                            <div class="box-footer">
                                <NuxtLink :to="`/admin/exam/${$route.params.exam_id}/question-answer/list`"><button type="button" class="btn btn-primary-light me-1">
                                    <i class="el-icon-close"></i> Cancel
                                </button></NuxtLink>
                                <button type="submit" class="btn btn-primary">
                                    <i class="el-icon-folder-add"></i> Save
                                </button>
                            </div>
                        </form>
                        </ValidationObserver>
                    </div>
                    <!-- /.box -->
                </div>
            </div>
            <!-- /.row -->

        </section>
    </div>
</template>

<script>
import BreadcrumbComponent from '~/components/BreadcrumbComponent.vue';
export default {
    name: "EditEventInstructorPage",
    components: { BreadcrumbComponent },
    layout: "AdminLayout",
    data() {
        return {
          question: '',
            answer_a: '',
            answer_b: '',
            answer_c: '',
            answer_d: '',
            correct_answer: "answer_a",
            duration: 1,
            draft: false,
            image: [],
            answerType: [{
                value: 'answer_a',
                label: 'Answer A',
                }, {
                value: 'answer_b',
                label: 'Answer B',
                }, {
                value: 'answer_c',
                label: 'Answer C',
                }, {
                value: 'answer_d',
                label: 'Answer D',
            }],
            customToolbar: [
                [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                ["bold", "italic", "underline", "strike"], // toggled buttons
                [
                    { align: "" },
                    { align: "center" },
                    { align: "right" },
                    { align: "justify" }
                ],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
                [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
                [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                ["link"],
                ["clean"] // remove formatting button
            ]
        }
    },
    beforeMount(){
        this.checkId();
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if(process.client){
            this.$scrollTo('#__nuxt', 0, {force: true})
        }
    },
    methods: {
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const formData = new FormData;
                formData.append('question', this.question);
                formData.append('answer_a', this.answer_a);
                formData.append('answer_b', this.answer_b);
                formData.append('answer_c', this.answer_c);
                formData.append('answer_d', this.answer_d);
                formData.append('correct_answer', this.correct_answer);
                formData.append('duration', this.duration);
                formData.append('draft', this.draft);
                if(!Array.isArray(this.image)){
                    formData.append('image', this.image);
                }
                const response = await this.$privateApi.put('/question-answer/'+this.$route.params.id, formData); // eslint-disable-line
                this.$toast.success('Event Instructor updated successfully')
                this.$router.push(this.$nuxt.context.from.path);
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                  question: err?.response?.data?.form_error?.question,
                  answer_a: err?.response?.data?.form_error?.answer_a,
                  answer_b: err?.response?.data?.form_error?.answer_b,
                  answer_c: err?.response?.data?.form_error?.answer_c,
                  answer_d: err?.response?.data?.form_error?.answer_d,
                  correct_answer: err?.response?.data?.form_error?.correct_answer,
                  duration: err?.response?.data?.form_error?.duration,
                  image: err?.response?.data?.form_error?.image,
                  draft: err?.response?.data?.form_error?.draft,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            }finally{
            loading.close()
            }
        },
        async checkId(){
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            if(!this.$route.params.id){
                this.$toast.error('Invalid ID')
                this.$router.push(`/admin/exaam/${this.$route.params.exam_id}/question-answer/list`);
            }
            try {
                const response = await this.$privateApi.get('/question-answer/display/'+this.$route.params.id); // eslint-disable-line
                // eslint-disable-next-line no-console
                console.log(response);
                this.question = response.data.data.question;
                this.answer_a = response.data.data.answer_a;
                this.answer_b = response.data.data.answer_b;
                this.answer_c = response.data.data.answer_c;
                this.answer_d = response.data.data.answer_d;
                this.correct_answer = response.data.data.correct_answer;
                this.duration = response.data.data.duration;
                this.draft = response.data.data.draft;
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                this.$router.push(`/admin/exaam/${this.$route.params.exam_id}/question-answer/list`);
            } finally{
                loading.close()
            }
        },
        handleFileChnage(event){
            this.banner = event.target.files[0];
        },
    }
}
</script>
