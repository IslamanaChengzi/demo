<template>
    <div>
        <div>
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签三</el-tag>
            <el-tag type="warning">标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
        </div>

        <div>
            <p 
                v-for="i in list" 
                :key="i.id">
                {{`名字：${i.name},姓氏：${i.cfirst},年龄:${i.natural}`}}
            </p>
            <br />
            <br />
            <h2 v-for="(j,indexJ) in other" :key="indexJ">
                {{j.city}}
            </h2>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
// axios.defaults.timeout = 1000;

export default {
    data() {
        return {
            list: [],
            other: []
        };
    },
    mounted() {
       
        this.getList();
        this.getOther();
    },
    methods: {
        //1.
        getList() {
            axios.get("/api/data")
                .then(res => {
                    // console.log(res.data);
                    this.list = res.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        //2.
        getOther() {
            axios.post("/api/other",{id:2}, {timeout: 1000})
                .then(res => {
                    // console.log(res);
                    this.other = res.data;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>