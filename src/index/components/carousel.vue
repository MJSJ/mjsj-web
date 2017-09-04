<template>
    <div class="carousel_container">
        <carousel paginationActiveColor="#42b983" :navigationEnabled="true"
         paginationColor="#b2ebd1" :paginationSize="5" :perPage="1" easing="linear" :speed="300" >
            <slide v-for="(item,index) in carouselList" :key="index">
                <img width="100%" :src="item.pic" alt="">
            </slide>   
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name:"carousel-container",
    components: {
        Carousel,
        Slide
    },
    props:{
        carouselList:{}
    }
    
}
</script>

<style lang="less" rel="stylesheet/less">
    .carousel_container{
        max-width: 980px;
        margin:0 auto;
    }
    @media screen  and (max-width:980px){
        .VueCarousel-pagination{
            display: none;
        }
    }
</style>
