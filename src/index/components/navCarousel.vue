<template>
    <div class="nav_carousel_container" v-if="carouselList">
        <carousel paginationActiveColor="#42b983" :navigationEnabled="true" navigationNextLabel="" navigationPrevLabel=""
         paginationColor="#b2ebd1" :paginationSize="5" :perPage="1" easing="linear" :speed="300" >
            <slide v-for="(item,index) in carouselList" :key="index">
                <div class="slide_img_bg" :style="'background-image:url('+item.pic+')'"></div>
            </slide>   
        </carousel>

        <div class="navigation-ctl-box">
            <div class="navigation-ctl-prev" @click="slidePrev"><icon name="angle-left" scale="3"></icon></div>
            <div class="navigation-ctl-next" @click="slideNext"><icon name="angle-right" scale="3"></icon></div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

import {dispatchEvent} from "../../common/tool.js"
export default {
    name:"carousel-container",
    components: {
        Carousel,
        Slide
    },
    props:{
        carouselList:{}
    },
    methods:{
        slidePrev(){
            dispatchEvent(document.querySelector(".nav_carousel_container .VueCarousel-navigation-prev"))
        },
        slideNext(){
            dispatchEvent(document.querySelector(".nav_carousel_container .VueCarousel-navigation-next"))
        }
    }
    
}
</script>

<style lang="less" rel="stylesheet/less">
    .nav_carousel_container{
        // max-width: 980px;
        position: relative;
        margin:0 auto;

        .VueCarousel-navigation{
            display: none;
        }
        .VueCarousel-pagination{
            position: absolute;
            bottom:0;
        }
        .VueCarousel,.VueCarousel-wrapper,.VueCarousel-inner{
            height: 100%;
        }
        .slide_img_bg{
            background-position: center;
            background-size:cover;
            width:100%;
            height: 100%;;
        }

    }
    @media screen  and (max-width:980px){
        
        .navigation-ctl-box{
            display: none;
        }
        .nav_carousel_container{
            height: 15rem;
        }
     
    }

 
    @media screen  and (min-width:980px){
        .nav_carousel_container{
            height: 600px;

            .navigation-ctl-box{
            position: absolute;
            top:50%;
            left: 0;
            transform: translateY(-50%);
            z-index: 100;
            width: 100%;
        }

        .navigation-ctl-prev{
            position: absolute;
            left: 0;
            margin-left: 50px;
            cursor: pointer;
        }
        .navigation-ctl-next{
            position: absolute;
            right: 0;
            margin-right: 50px;
            cursor: pointer;
        }
        .navigation-ctl-prev,.navigation-ctl-next{  
            color:#fff;
            opacity: .5;
            &:hover{
                opacity: 1;
            }
        }
        }
     
    }
</style>
