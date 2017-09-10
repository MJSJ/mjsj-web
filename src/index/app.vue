<template>
<div class="app">
    <top-bar></top-bar> 
    <nav-carousel :carouselList="navCarouselList"></nav-carousel>
    <tele-text :teleTextList="teleTextList" v-if="teleTextList"></tele-text>
    <img-list :imgStore="imgStore"></img-list>
    <carousel></carousel>
    <right-bar></right-bar>
</div>
</template>

<script>
import topBar from "../common/topbar.vue"
import rightBar from "../common/rightbar.vue"
import teleText from "./components/teleText.vue"
import navCarousel from "./components/navCarousel.vue"
import carousel from "./components/carousel.vue"
import imgList from "./components/imgList.vue"
import api from "../common/api.js"
export default {
    name: 'app',
    data(){
        return {
            teleTextList:{},
            navCarouselList:{},
            imgStore:{},
            carouselList:{}
        }
    },
    props:{
        navStore:{}
    },
    components: {
        topBar,
        rightBar,
        teleText,
        navCarousel,
        imgList,
        carousel,
        
    },
    mounted(){
        api.fetchTeleTextList().then((res)=>{
            this.teleTextList = res
        })
        api.fetchNavCarouselList().then((res)=>{
            this.navCarouselList = res
        })

        api.fetchImglList().then((res)=>{
            this.imgStore = res
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
