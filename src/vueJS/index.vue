<template>
    <div>
        vuejs
        <a v-on:[eventName]="doSomething"> 动态绑定事件！ </a>
    </div>
</template>
<script>
export default {
    name:'VueJS',
    data() {
        return {
            eventName:'click'
        }
    },
    methods:{
        doSomething(){
            this.$message('动态绑的单击事件！');
        }
    }
}
</script>
<style scoped>
    a {
        cursor: pointer;
    }
</style>

