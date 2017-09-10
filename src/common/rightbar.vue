<template>
    <div class="right_bar">
        <p>©2003-2017 mykrystal.com, All Rights Reserved. 本站发布的所有内容，未经许可，不得转载，详见 《知识产权声明》 《用户使用协议》 《Google广告隐私声明》</p>
        <p>增值电信业务经营许可证： xxxxxxxxx 互联网地图服务资质：乙测资字xxxxxxx</p>
    </div>
</template>

<script>
// import api from "../common/api.js"
export default {

}
</script>

<style lang="less" rel="stylesheet/less" >
@media screen and (max-width:980px){
    .right_bar{
        font-size: 1.2rem;
        color: #999;
        letter-spacing: 0;
        padding: 3rem 0;
        // height: 100px;
        box-sizing: border-box;
        background: #333;
        text-align: center;
        
   }
}
@media screen and (min-width:980px){
    .right_bar{
        font-size: 12px;
        color: #999;
        letter-spacing: 0;
        padding: 30px 0;
        // height: 100px;
        box-sizing: border-box;
        background: #333;
        text-align: center;
        p{
            margin-bottom: .5rem;
        }
   }
}
</style>


