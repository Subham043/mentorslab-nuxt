<template>
    <div>
        <button @click="test">test</button>
        <zoom-window />
    </div>
</template>
  
<script>
import ZoomWindow from '~/components/ZoomWindow'
export default {
    name: "PaymentContentListPage",
    components: ZoomWindow,
    layout: "UserLayout",
    data() {
        return {
            count:1,
        }
    },
    methods: {
        test(){
            alert('yes')
        },
        
    },
}
</script>
  