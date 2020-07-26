<template>
    <div>
        <h3>插槽进阶</h3>
        <br>
        <div class="eventTestStyle">
            <deconstruction>
                <h5 slot="header">子组件属性传递给父组件</h5>
                <!-- <template  v-slot:default="slotProps"> -->
                    <!-- 此处 default content 为插槽的name -->
                <template  v-slot:content="slotProps">
                    <button @click="slotFn(slotProps)">
                        {{slotProps.slotUser.lastName}}
                    </button>
                </template>
            </deconstruction>
            <br>
            <deconstruction>
                <h5 slot="header">解构传递</h5>
                <!-- 默认插槽 -->
                <!-- <template v-slot="{ slotUser }"> -->
                <!-- 指定插槽 -->
                <!-- <template  v-slot:content="{ slotUser }"> -->
                    <!-- 此处写法为缩写，#= 错误的，必须#content= 要有值 -->
                <template  #content="{ slotUser }">
                    <button @click="slotFn(slotUser)">
                        {{slotUser.lastName}}
                    </button>
                </template>
            </deconstruction>
            <br>
            <deconstruction>
                <h5 slot="header">重命名解构传递</h5>
                <template v-slot:content="{ slotUser:slotPerson }">
                    <button @click="slotFn(slotPerson)">
                        {{slotPerson.lastName}}
                    </button>
                </template>
            </deconstruction>
            <br>
            <!-- 此处user在自组件中为undefined，给个默认值 -->
            <deconstruction>
                <h5 slot="header">插槽prop是undefined时解构传递</h5>
                <template v-slot:content="{ user = { firstName: 'Guest' } }">
                    <button @click="slotFn(user)">
                        {{user.firstName}}
                    </button>
                </template>
               
            </deconstruction>
            <br>
            <deconstruction>
                <h5 slot="header">子组件方法传递给父组件</h5>
                <template v-slot:footer="{ getSlotVal }">
                    <button @click="slotFn(getSlotVal)">
                        方法尝试
                    </button>
                </template>
            </deconstruction>
            
        </div>
        <br>
        <div class="eventTestStyle">
            <slotTest name="作用域插槽">
                <!-- <template v-slot:default="slotProps">
                    {{ slotProps.user.firstName }}
                </template> -->
                <template v-slot="slotProps">
                    {{ slotProps.user.firstName }}
                </template>
            </slotTest>
        </div>
        <br>
        <h3>自定义事件</h3>
        <div class="eventTestStyle">
            <eventComponent @my-event="eventTodo">
                <p style="color:blue;">
                    见证内容插入！
                </p>
                <!-- <propsComponent
                    style="color:blue;"
                    data-date-picker="activated"
                    :postTitle="propsList.title"
                    :likes="propsList.likes">

                </propsComponent> -->
                <p slot="header" style="color:blue;">
                    header插入！
                </p>
                <template v-slot:footer>
                    <p style="color:blue;">v-slotsolt内容</p>
                </template>
            </eventComponent>
        </div>
        
        <h3>props</h3>
        <propsComponent
            data-date-picker="activated"
            :postTitle="propsList.title"
            :likes="propsList.likes">

        </propsComponent>
        <br>
        <br>
        <h1>解析 DOM 模板时的注意事项</h1>
        <h3>动态组件切换</h3>
        <br>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">
                <span slot="label">
                    <i class="el-icon-date"></i>
                    我的行程
                </span>
                tab内容:用户管理
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
                tab内容:配置管理
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">
                tab内容:角色管理
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">
                tab内容:定时任务补偿
            </el-tab-pane>
        </el-tabs>
        <keep-alive>
            <!-- 多组件动态切换节点 -->
            <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
        <hr>
        <h3>组件基础</h3>
        <div>
            <basisComponent 
                title="My journey with Vue" 
                @countPost="countGet"
                inputStr="请输入内容啊"
                @inputIng="inputIngGet">

            </basisComponent> 
            <basisComponent title="react">
                <div slot="header">
                    插槽header
                </div>
                <div slot="footr">
                    插槽footer
                </div>
            </basisComponent>
            <basisComponent title="angular">

            </basisComponent>
        </div>
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
                @update:dialogVisible="Visible = $event"
                @pushStr="submit">
            </dialogComponent>
            <br>
            <el-button type="primary" @click="Visible = true">点击打开 Dialog</el-button>
            <!-- 

                :dialogVisible="VisibleSlot"
                @update:dialogVisible="VisibleSlot = $event"
                简写为 
                :dialogVisible.sync="VisibleSlot"
             -->
            <dialogComponent 
                :title="`试试插槽`"
                :dialogVisible.sync="VisibleSlot"
                @pushStr="submitSlot">
                <p slot="footerIn">插槽测试123</p>
            </dialogComponent>
            <br>
            <el-button type="primary" @click="VisibleSlot = true">点击打开 Dialog</el-button>
        </div>
    </div>
</template>
<script>

import importComponent from './importComponent';
import dialogComponent from './dialogComponent';
import basisComponent from './basisComponent';
import firstTabComponent from './tabComponent/first.vue';
import secondTabComponent from './tabComponent/second.vue';
import thirdTabComponent from './tabComponent/third.vue';
import fourthTabComponent from './tabComponent/fourth.vue';
import propsComponent from './propsTest'
import eventComponent from './eventTest'
import slotTest from './slotTest'
import deconstruction from './slotTest/deconstruction'



export default {
    name:'vueComponent',
    // 注册组件
    components:{    
        importComponent,
        dialogComponent,
        basisComponent,
        firstTabComponent,
        secondTabComponent,
        thirdTabComponent,
        fourthTabComponent,
        propsComponent,
        eventComponent,
        slotTest,
        deconstruction
    },
    data() {
        return {
            activeName: 'first',
            msg:'送个你值，展示一下！',
            groceryList: [
                { id: 0, text: '蔬菜' },
                { id: 1, text: '奶酪' },
                { id: 2, text: '随便其它什么人吃的东西' }
            ],
            Visible:false,
            VisibleSlot:false,
            currentTabComponent:firstTabComponent,
            propsList:{
                title:'props学习测试',
                likes:23
            },
            // user:{
            //     firstName:'父组件姓氏',
            //     lastName:'父组件名字'
            // }
        }
    },
    created(){
        this.$EventBus.$on('endThing',function () {
            console.log('接受到消息了！(跨组件通信！)')
        })
    },
    methods: {
        slotFn(data){
            console.log( data );
            if( typeof data == 'function' ){
                data()
            }
        },
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
        },
        // 组件传值接受
        countGet(){
            console.log(123);
        },
        // 组件中有input输入框
        inputIngGet(val){
            console.log(val);
        },
        // 组件tab切换
        handleClick(tab) {
            if( tab.name == 'first' ){
                this.currentTabComponent = firstTabComponent;
            } else if(  tab.name == 'second' ) {
                this.currentTabComponent = secondTabComponent;
            } else if(  tab.name == 'third' ) {
                this.currentTabComponent = thirdTabComponent;
            } else if(  tab.name == 'fourth' ) {
                this.currentTabComponent = fourthTabComponent;
            }
        },
        // 自定义事件
        eventTodo(event){
            console.log(event);
        }
    },
}
</script>
<style scoped>
h3 {
    padding: 10px 0;
}
.eventTestStyle {
    background: #ccc;
    padding: 10px;
    border-radius: 5px;
}
</style>
