<template>
    <div>
        <h3>自定义事件</h3>
        <button @click="emitFn">绕圈触发事件</button>
        <p>
            .native 监听原生事件
            <br>
            v-on="$listeners" 将所有的事件监听器指向这个组件的某个特定的子元素
        </p>
        <h3>slot demo</h3>
        <slot>
            <p style="color:red;">默认solt内容</p>
        </slot>
        <slot name="header">
            <p style="color:red;">header：默认solt内容</p>
        </slot>
        <slot name="footer">
            <p style="color:red;">footer：默认solt内容</p>
        </slot>
    </div>
</template>
<script>
export default {
    name: "eventTest",
    methods:{
        emitFn(){
            this.$emit('my-event','自定义内容！')
        }
    }
}
</script>
