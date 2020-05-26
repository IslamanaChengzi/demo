import Vue from 'vue'
import VueRouter from 'vue-router'

// markdown
import markdown from '@/markdown/index.vue';
//elementUi
import elementUi from '@/elementUi/index.vue';


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/markdown',
            name: 'user',
            component: markdown
        },
        {
            path: '/elementUi',
            name: 'user',
            component: elementUi
        },

    ]
});

  export default router;