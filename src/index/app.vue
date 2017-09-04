<template>
<div class="app">
    <top-bar></top-bar> 
    <tele-text :teleTextList="teleTextList" v-if="teleTextList"></tele-text>
    <carousel :carouselList="carouselList"></carousel>
</div>
</template>

<script>
import topBar from "../common/topbar.vue"
import teleText from "./components/teleText.vue"
import carousel from "./components/carousel.vue"
import api from "../common/api.js"
export default {
    name: 'app',
    data(){
        return {
            teleTextList:{},
            carouselList:{}
        }
    },
    components: {
        topBar,
        teleText,
        carousel
    },
    mounted(){
        api.fetchTeleTextList().then((res)=>{
            this.teleTextList = res
        })
        api.fetchCarouselList().then((res)=>{
            this.carouselList = res
        })
    }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

</style>
