<template>
    <div>
        <h1>父组件啊</h1>
        <h3>{{msg}}</h3>
        <child ref="usernameInput"></child>
    </div>
</template>
<script>
import borderComponent from './border'
export default {
    name:'parentComponent',
    components: {
        child: borderComponent
    },
    data() {
        return {
            msg:'父组件啊数据啊'
        }
    },
    mounted(){
        console.log( this.$children[0] );
        console.log( this.$refs.usernameInput );
    },
    // beforeDestroy(){
    //     console.log(123);
    // },
    // destroyed(){
    //     console.log(456);
    // }
}
</script>
