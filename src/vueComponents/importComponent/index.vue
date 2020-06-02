<template>
    <div>
        <p>props:{{todo}}</p>
    </div>
</template>
<script>
export default {
    name:'importComponent',
    props:['todo'],
    data() {
        return {
            msg:'好好做项目啊！'
        }
    },
}
</script>
