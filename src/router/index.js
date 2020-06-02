import Vue from 'vue'
import VueRouter from 'vue-router'

// markdown
import markdown from '@/markdown/index.vue';
//elementUi
import elementUi from '@/elementUi/index.vue';
// 组件示例
import component from '@/vueComponents/index.vue';
// vue 基础部分重点
import vueJs from '@/vueJS'



Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/markdown',
            name: 'markdown',
            component: markdown
        },
        {
            path: '/elementUi',
            name: 'elementUi',
            component: elementUi
        },
        {
            path: '/component',
            name: 'component',
            component: component
        },
        {
            path: '/vuejs',
            name: 'vueJs',
            component: vueJs
        }
    ]
});

  export default router;