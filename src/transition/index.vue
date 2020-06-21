<template>
    <div>
        <h1>单元素/组件的过渡</h1>

        <h3>demo11111</h3>
        <div>
            <button v-on:click="show = !show">
                Toggle
            </button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        </div>
        <h3>demo22222</h3>
        <div>
            <button @click="showB = !showB">
                Toggle render
            </button>
            <transition name="slide-fade">
                <p v-if="showB">hello</p>
            </transition>
        </div>
       
    </div>
</template>
<script>
export default {
    name:'transitionComponent',
    data() {
        return {
            show: true,
            showB: true
        }
    },

}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

