<template>
    <div class="header">
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <router-link to="/markdown">Go to markdown</router-link>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <router-link to="/elementUi">Go to element</router-link>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <router-link to="/component">Go to component</router-link>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <router-link to="/vuejs">Go to vueJS</router-link>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <router-link to="/asynccomponents">动态组件&异步组件</router-link>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <router-link to="/dealborder">处理边界情况</router-link>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <router-link to="/transition">过渡</router-link>
                </div>
            </el-col>

            
            
        </el-row>
    </div>
</template>

<style lang="less" scoped src="./header.less"></style>


<script>
export default {
    name: "Header",
    data() {
        return {
            title: ""
        };
    }
};
</script>