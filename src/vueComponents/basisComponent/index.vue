<template>
    <div class="basis">
        <h3>{{ title }}</h3>
        <input 
            type="text"  
            v-bind:value="inputStr"  
            v-on:input="$emit('inputIng', $event.target.value)">
        <button @click="count++">
            {{ count }}
        </button>
        <button @click="$emit('countPost')">提交事件给父组件</button>
        <h5>
            <slot name="header">
                默认内容
            </slot>
            <slot name="footr">
                默认内容
            </slot>
        </h5>
    </div>
</template>

<script>
export default {
    name:'basis',
    data() {
        return {
            count:0
        }
    },
    props:{
        inputStr:String,
        title:String
    }
}
</script>

<style lang="less" scoped>
.basis {
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    h3 {
        color: cornflowerblue;
    }
}

</style>


