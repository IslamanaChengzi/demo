<template>
    <div>
        <h3>
            动态组件
        </h3>
        <div>
            <el-button type="primary" @click="data=demoA">DemoA</el-button>
            <el-button type="primary" @click="data=demoB">DemoB</el-button>
            <el-button type="primary" @click="data=demoC">DemoC</el-button>        
            <el-button type="primary" @click="dataFn">DemoD</el-button>
            <keep-alive>
                <component v-bind:is="data"></component>
            </keep-alive>
            <!-- 在truth值为true时，组件开始异步调用 -->
            <demoDAsync v-if="truth"></demoDAsync>
            <later></later>
        </div>
    </div>
</template>
<script>
import demoA from './demoA'
import demoB from './demoB'
import demoC from './demoC'

import Vue from 'vue';
const later = Vue.component('later', function (resolve) {
    setTimeout(function () {
        require(['./demoELater.vue'], resolve)
    }, 3000);
});

export default {
    name:'asynccomponents',
    components:{ 
        demoA, 
        demoB, 
        demoC,
        later,
        demoDAsync:() => import('./demoDAsync')
    },
    data() {
        return {
            truth:false,
            data:demoA,
            demoA:demoA,
            demoB:demoB,
            demoC:demoC,
        }
    },
    methods:{
        dataFn(){
            this.truth = true
        }
    }
}
</script>