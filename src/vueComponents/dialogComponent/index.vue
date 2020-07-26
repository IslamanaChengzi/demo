<template>
    <div>
        <el-dialog 
            :title="title" 
            :visible="visibleComputed"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息sync</span>
            <input type="text" v-model="inputSrt">
            <button @click="sendInfo">$emit发送按钮</button>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelBtn">取 消</el-button>
                <el-button type="primary" @click="submitBtn">确 定</el-button>
            </span>
            <slot name="footerIn">
                <p>等待内容的页脚插槽测试</p>
            </slot>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputSrt:''
        };
    },
    computed:{
        visibleComputed:{
            get(){
                return this.dialogVisible
            },
            set(val){
                this.$emit('update:dialogVisible',val);
            }
        }
    },
    props:{
        dialogVisible:{
            type: Boolean,
            required: true,
        },
        title:{
            type:String,
            required:false,
            default:'提示'
        }
    },
    methods: {
        handleClose() {
            this.$confirm("确认关闭？")
                .then( () => {
                    this.cancelBtn();
                })
                .catch( () => {});
        },
        cancelBtn(){
            this.visibleComputed = false;
        },
        submitBtn(){
            this.$emit('pushStr',this.inputSrt)
        },
        sendInfo(){
            this.$EventBus.$emit('endThing')
        }
    }
};
</script>