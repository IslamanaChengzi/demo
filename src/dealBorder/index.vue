<template>
    <div>
        <h1>处理边界情况啊</h1>
        
        <parentComponent ref="parent">
            <!-- <borderComponent  ref="usernameInput"></borderComponent> -->
        </parentComponent>
    </div>
</template>
<script>
// import borderComponent from './border'
import parentComponent from './parent'
export default {
    name:'dealborder',
    // components:{borderComponent,parentComponent},
    components:{parentComponent},
    data() {
        return {
            data:'msg'
        }
    },
    mounted(){
        console.log( this.$refs.parent );
    },
}
</script>
