<template>
    <div class="tele_text_container">
        <el-row class="tele_text" v-for="teleText in teleTextList">
            <el-col :md="16">
                <img height="100%" v-touch :src="teleText.pic" alt="">
            </el-col>
            <el-col :md="8" class="figure_text" v-html="teleText.texts"></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props:{
        teleTextList:{}
    }
}
</script>

<style lang="less" rel="stylesheet/less">

    @media screen  and (min-width:980px){
        .tele_text>div{
            height: 400px;
        }
        .figure_text{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    .figure_text{
        padding:0 2rem;
    }
    .tele_text_container{
        max-width: 980px;
        margin:0 auto;
        margin-top:3rem;
        .tele_text{
            margin-bottom:2rem;
            &>.el-col:first-child{
                overflow: hidden;
                @media screen and (max-width:980px){
                    height: 20rem;
                }
            }
            @media screen and (max-width:980px){
                h1{
                    margin-top:1rem;
                    font-size:2rem;
                    line-height: 3rem;
                }
                p{
                    line-height: 2rem;
                }
            }

            @media screen and (min-width:980px){
                h1{
                    margin-top:10px;
                    font-size:30px;
                    line-height: 50px;
                }
                p{
                    line-height: 30px;
                }
            }
        }

        
    }
</style>
