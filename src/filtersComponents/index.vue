<template lang="pug">
    div
        h1 过滤器
        p 试试看啊
        p.abcde {{ msg | capitaliz }}
        p(:id="msg",class="leiming") 过滤ID
        p #{ msg } 过滤ID123
   
    
       

</template>

<script>
export default {
    name:'filtersModule',
    data() {
        return {
            msg:'abcdefg',
        }
    },
    filters: {
        capitaliz( value ) {
            if(!value) return ''
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
}
        //-     可以写成函数，capitaliz(cc,dd) cc是第二个参数，dd是第三个参数
        //-     <br>
        //-     可以串联写 msg | filterA | filterB
        //- </p>
</script>
