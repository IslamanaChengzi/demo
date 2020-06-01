<template>
    <div>
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
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
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