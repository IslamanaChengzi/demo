import Vue from 'vue'
import VueRouter from 'vue-router'

// markdown
import markdown from '@/markdown/index.vue';
//elementUi
import elementUi from '@/elementUi/index.vue';


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

    ]
});

  export default router;