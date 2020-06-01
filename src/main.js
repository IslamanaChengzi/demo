import Vue from 'vue';
import App from './App.vue';

import router from './router';

require('./mock/index.js');


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);


// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

new Vue(
  {
    router,
    render: h => h(App),
  }
)
.$mount('#app')
