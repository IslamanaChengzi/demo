import Vue from 'vue'
import VueRouter from 'vue-router'


import markdown from '@/markdown/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/markdown',
            name: 'user',
            component: markdown
        }
    ]
});

  export default router;