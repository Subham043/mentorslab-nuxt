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
                                    <div class="col-md-12 mt-4">
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
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="category for answer a">
                                        <div class="form-group">
                                            <label class="form-label">Category That Answer A Belongs To *</label>
                                            <el-select v-model="answer_a_choice_id" placeholder="Select Category That Answer A Belongs To" style="width:100%">
                                                <el-option
                                                v-for="item in categories"
                                                :key="item.id"
                                                :label="item.category"
                                                :value="item.id">
                                                <span>{{ item.category }}</span>
                                                </el-option>
                                            </el-select>
                                        </div>
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
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="category for answer a">
                                        <div class="form-group">
                                            <label class="form-label">Category That Answer B Belongs To *</label>
                                            <el-select v-model="answer_b_choice_id" placeholder="Select Category That Answer B Belongs To" style="width:100%">
                                                <el-option
                                                v-for="item in categories"
                                                :key="item.id"
                                                :label="item.category"
                                                :value="item.id">
                                                <span>{{ item.category }}</span>
                                                </el-option>
                                            </el-select>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-12 mt-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="answer_c">
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
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="category for answer a">
                                        <div class="form-group">
                                            <label class="form-label">Category That Answer C Belongs To *</label>
                                            <el-select v-model="answer_c_choice_id" placeholder="Select Category That Answer C Belongs To" style="width:100%">
                                                <el-option
                                                v-for="item in categories"
                                                :key="item.id"
                                                :label="item.category"
                                                :value="item.id">
                                                <span>{{ item.category }}</span>
                                                </el-option>
                                            </el-select>
                                        </div>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-12 mt-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="answer_d">
                                        <div class="form-group">
                                            <label class="form-label">Answer D</label>
                                        </div>
                                        <client-only>
                                          <VueEditor v-model="answer_d" :editor-toolbar="customToolbar" />
                                        </client-only>
                                        <span :class="classes">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="col-md-12 mt-4">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="" name="category for answer a">
                                        <div class="form-group">
                                            <label class="form-label">Category That Answer D Belongs To *</label>
                                            <el-select v-model="answer_d_choice_id" placeholder="Select Category That Answer D Belongs To" style="width:100%">
                                                <el-option
                                                v-for="item in categories"
                                                :key="item.id"
                                                :label="item.category"
                                                :value="item.id">
                                                <span>{{ item.category }}</span>
                                                </el-option>
                                            </el-select>
                                        </div>
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
                                <NuxtLink :to="`/admin/assessment/${$route.params.assessment_id}/assessment-question-answer/list`"><button type="button" class="btn btn-primary-light me-1">
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
            answer_a_choice_id: "",
            answer_b_choice_id: "",
            answer_c_choice_id: "",
            answer_d_choice_id: "",
            draft: false,
            image: [],
            categories: [],
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
        this.getCategory();
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
                formData.append('answer_a_choice_id', this.answer_a_choice_id);
                formData.append('answer_b_choice_id', this.answer_b_choice_id);
                formData.append('answer_c_choice_id', this.answer_c_choice_id);
                formData.append('answer_d_choice_id', this.answer_d_choice_id);
                formData.append('draft', this.draft);
                if(!Array.isArray(this.image)){
                    formData.append('image', this.image);
                }
                const response = await this.$privateApi.put('/assessment-question-answer/'+this.$route.params.id, formData); // eslint-disable-line
                this.$toast.success('Question & Answer updated successfully')
                this.$router.push(this.$nuxt.context.from.path);
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                  question: err?.response?.data?.form_error?.question,
                  answer_a: err?.response?.data?.form_error?.answer_a,
                  answer_b: err?.response?.data?.form_error?.answer_b,
                  answer_c: err?.response?.data?.form_error?.answer_c,
                  answer_d: err?.response?.data?.form_error?.answer_d,
                  answer_a_choice_id: err?.response?.data?.form_error?.answer_a_choice_id,
                  answer_b_choice_id: err?.response?.data?.form_error?.answer_b_choice_id,
                  answer_c_choice_id: err?.response?.data?.form_error?.answer_c_choice_id,
                  answer_d_choice_id: err?.response?.data?.form_error?.answer_d_choice_id,
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
                this.$router.push(`/admin/assessment/${this.$route.params.assessment_id}/question-answer/list`);
            }
            try {
                const response = await this.$privateApi.get('/assessment-question-answer/display/'+this.$route.params.id); // eslint-disable-line
                // eslint-disable-next-line no-console
                // console.log(response);
                this.question = response.data.data.question;
                this.answer_a = response.data.data.answer_a;
                this.answer_b = response.data.data.answer_b;
                this.answer_c = response.data.data.answer_c;
                this.answer_d = response.data.data.answer_d;
                this.answer_a_choice_id = response.data.data.answer_a_choice_id;
                this.answer_b_choice_id = response.data.data.answer_b_choice_id;
                this.answer_c_choice_id = response.data.data.answer_c_choice_id;
                this.answer_d_choice_id = response.data.data.answer_d_choice_id;
                this.draft = response.data.data.draft;
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                this.$router.push(`/admin/assessment/${this.$route.params.assessment_id}/question-answer/list`);
            } finally{
                loading.close()
            }
        },
        async getCategory(){
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/category/all/'+this.$route.params.assessment_id); // eslint-disable-line
                // eslint-disable-next-line no-console
                // console.log(response);
                this.categories = response.data.data;
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally{
                loading.close()
            }
        },
        handleFileChnage(event){
            this.image = event.target.files[0];
        },
    }
}
</script>
