<template>
    <div>
        vuejs
        <br>
        <br>
        <el-button v-on:[eventName]="doSomething"> 动态绑定事件！ </el-button>
        <br>
        <br>
        计算属性
        <p :class="classObject">Original message: "{{ message }}"</p>
        <p>结果: "{{ reversedMessage }}"</p>
        <p>时间：{{ now }}</p>
        <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">动态绑定style</div>
        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username" key="username">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address" key="address">
        </template>
        <br>
        <br>
        遍历属性可以遍历对象
        <br>
        value in object
        <br>
        item of items
        <br>
        数组变更，刷新视图方法<br>
        push()、pop()、shift()、unshift()、splice()、sort()、reverse() <br>
        返回一个新数组的方法 filter()、concat() 和 slice()
        <br>
        <br>
        修饰符<br>
        .stop ： 阻止单击事件继续传播(阻止冒泡) <br>
        .prevent ： 提交事件不再重载页面(阻止默认事件) &lt;form v-on:submit.prevent="onSubmit"&gt;&lt;/form&gt;<br>
        .capture：即内部元素触发的事件先在此处理，然后才交由内部元素进行处理<br>
        .self ： 只当在 event.target 是当前元素自身时触发处理函数<br>
        .once ： 点击事件将只会触发一次<br>
        .passive ： 提高滚动监听的流畅度<br>
        <br>
        按键修饰符<br>
        keyup.enter /  v-on:keyup.13 <br>
        &lt;!-- Alt + C --&gt;
        &lt;input v-on:keyup.alt.67="clear"&gt;
        .lazy input输入非实时更新<br>
        .number 自动转换类型<br>
        .trim 自动过滤前后空格 <br>
         

    </div>
</template>
<script>
export default {
    name:'VueJS',
    data() {
        return {
            eventName:'click',
            message:'hello world!',
            classObject: {
                active: true,
                'text-danger': true
            },
            loginType:'username'
        }
    },
    methods:{
        doSomething(){
            // this.message = 'change' + Math.floor((Math.random()*10)+1);
            this.message = '!'+Date.now()+'!';
            this.$message('动态绑的单击事件，修改计算属性的值123！');
            this.loginType === 'username' ? this.loginType = 'logout' : this.loginType = 'username'
        }
    },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.message.split('').reverse().join('')
        },
        now: function () {
            return Date.now()
        }
    },
    watch: {
        message: function (val,old) {
            console.log(val);
            console.log(old);
        }
    },
}
</script>
<style scoped>
    a {
        cursor: pointer;
    }
</style>

