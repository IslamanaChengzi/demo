<template>
    <div class="propsTest" v-bind="$attrs">
        <h5>props内容</h5>
        <p>
            <br>
            get标题: {{postTitle}}
            <br><br>
            点赞数量：{{ likes }}
            <br><br>
        </p>
        <pre>
            禁用attribute继承
            Vue.component('my-component', {
                inheritAttrs: false,
                // ...
            })
        </pre>
    </div>
</template>
<script>

export default {
    inheritAttrs: false,
    name:'props',
    props:{
        postTitle: {
            type: String,
            required: true //在不能使用默认的情况下加入必填项
        },
        likes: {
            type: Number,
            default: 100
        },
        isPublished: Boolean,
        commentIds: Array,
        author: Object,
        callback: Function,
        contactsPromise: Promise
    },
    mounted(){

    }
}
</script>