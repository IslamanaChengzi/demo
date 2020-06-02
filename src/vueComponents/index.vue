<template>
    <div>
        <h3>组件示例</h3>
        <div>
            <h5>示例一</h5>
            <importComponent :todo='msg'></importComponent>
            <br>
            <importComponent 
                v-for="item in groceryList" 
                :key="item.id"
                :todo='item.text'>
            </importComponent>
        </div>
    </div>
</template>
<script>

import importComponent from './importComponent';
	
export default {
    name:'vueComponent',
    components:{importComponent},
    data() {
        return {
            msg:'送个你值，展示一下！',
            groceryList: [
                { id: 0, text: '蔬菜' },
                { id: 1, text: '奶酪' },
                { id: 2, text: '随便其它什么人吃的东西' }
            ]
        }
    },
}
</script>
