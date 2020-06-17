<template>
    <div>
        <h1>边界情况自组件</h1>
        <h3>{{msg}}</h3>
    </div>
</template>
<script>
export default {
    name:'borderComponent',
    data() {
        return {
            msg:'边界情况的数据！'
        }
    },
    mounted(){
        console.log( this.$parent.msg );
    },
}
</script>
