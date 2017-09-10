<template>
    <div class="img_list_container" v-if="imgStore&&imgStore.imgList" :style="'background-image:url('+imgStore.bg+')'">
        <div class="img_list_wrapper">
            <h2 class="img_list_title">{{imgStore.title}}</h2>
            <h3 class="img_list_subtitle">{{imgStore.subTitle}}</h3>

            <el-row class="img_list" :gutter="20">
                <el-col v-for="(img,index) in imgStore.imgList" :xs="smSize" :sm="smSize" :md="size" :key="'img_'+index">
                    <div class="img_list_pic_box" @click="jump(img)">
                        <img v-touch width="100%" :src="img.pic" alt="">
                    </div>
                </el-col>
            </el-row>
        </div>   
    </div>
</template>

<script>
export default {
    props:{
        imgStore:{}
    },
    computed:{
        size(){
            if(this.imgStore&&this.imgStore.imgList&&this.imgStore.imgList.length){
                return 24/this.imgStore.imgList.length
            }else{
                return 0
            }
        },
        smSize(){
            if(this.imgStore&&this.imgStore.imgList&&this.imgStore.imgList.length){
                if(this.imgStore.imgList.length%2){
                    return 24
                }else{
                    return 12
                }
            }else{
                return 0
            }
        }
    },
    methods:{
        jump(img){
            window.open(img.url,'_self')
        }
    }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
    .img_list_container{
        text-align: center;
        background-size:cover;
        background-repeat: no-repeat;
        background-position: center;
        padding-top:2rem;
        margin-bottom:2rem;
        padding-bottom:2rem;
        .img_list_wrapper{
            max-width: 980px;
            margin:0 auto;
            
            .img_list_title{
                margin-bottom:1rem;
                font-size: 1.4rem;
            }
            .img_list_subtitle{
                color:#848484;
                margin-bottom:2rem;
                font-size: 1rem;
            }
            .img_list{
                .el-col{
                    overflow: hidden;
                    margin-bottom:1rem;
                }
                .img_list_pic_box{
                    width: 100%;
                    height: 330px;
                    overflow: hidden;

                    @media screen and(max-width: 980px){
                        height: 20rem;
                    }
                }
                
                img{
                    transition:all .3s linear;
                    &:hover{
                        transform:scale(1.1);
                        
                    }
                }
            }
        }
    }
</style>
