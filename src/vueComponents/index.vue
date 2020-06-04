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
            <h5>示例二</h5>
            <dialogComponent 
                :title="`提示啊呀`"
                :dialogVisible="Visible"
                @pushStr="submit">
            </dialogComponent>
            <el-button type="primary" @click="Visible = true">点击打开 Dialog</el-button>
            <dialogComponent 
                :title="`试试插槽`"
                :dialogVisible="VisibleSlot"
                @update:dialogVisible="VisibleSlot = $event"
                @pushStr="submitSlot">
                <p slot="footerIn">插槽测试123</p>
            </dialogComponent>
            <el-button type="primary" @click="VisibleSlot = true">点击打开 Dialog</el-button>
        </div>
    </div>
</template>
<script>

import importComponent from './importComponent';
import dialogComponent from './dialogComponent';
	
export default {
    name:'vueComponent',
    // 注册组件
    components:{importComponent,dialogComponent},
    data() {
        return {
            msg:'送个你值，展示一下！',
            groceryList: [
                { id: 0, text: '蔬菜' },
                { id: 1, text: '奶酪' },
                { id: 2, text: '随便其它什么人吃的东西' }
            ],
            Visible:false,
            VisibleSlot:false
        }
    },
    methods: {
        submit(data){
            if(data){
                this.Visible = false;
            } else {
                this.$message({
                    message: '请输入内容啊！',
                    type: 'warning'
                });
            }
        },
        submitSlot(data){
            if(data){
                this.VisibleSlot = false;
            } else {
                this.$message({
                    message: '请输入内容啊！',
                    type: 'warning'
                });
            }
        }
    },
}
</script>
