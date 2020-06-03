<template>
    <div class="app">
        <Header></Header>
        <router-view class="viewWrap"></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
    components: {
        Header,
        Footer
    }
};
</script>
<style>
@import "./assets/reset.css";
.viewWrap {
	background: #0cc;
	position: absolute;
	top: 50px;
	left: 0;
	right: 0;
    bottom: 30px;
    padding: 10px 20px;
	overflow-y: auto;
}
html,body,.app {
	position: relative;
	height: 100%;
	width: 100%;
}
</style>
