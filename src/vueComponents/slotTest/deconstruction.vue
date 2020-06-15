<template>
    <div>
        <!-- <h5>
            组件插槽属性解构传递，组件插槽方法解构传递，
        </h5> -->
        <slot name="header">
            
        </slot>
        <slot name="content" v-bind:slotUser="slotUser">
            <!-- 外部的值失败的时候，会展示此处的默认值 -->
            {{ slotUser.lastName }} 
        </slot>
        <slot name="footer" v-bind:getSlotVal="getSlotVal">
            
        </slot>
        
    </div>
</template>
<script>
export default {
    name:'slotTest',
    data() {
        return {
            slotUser:{
                firstName:'姓氏：张',
                lastName:'名字：三',
                thirdname:undefined
            },
        }
    },
    methods:{
        getSlotVal(){
            console.log( 1111111 );
        }
    }
}
</script>
