<template>
    <div class="top_bar">
        <icon name="bars"></icon>
        <i class="fa fa-bars" aria-hidden="true"></i>
        <el-row class="top_bar_wrapper">
            <el-col :span="12"><div class="top_icon">design</div></el-col>
            <el-col :span="12">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="less" rel="stylesheet/less" >
    .el-menu--horizontal .el-menu-item,.el-menu--horizontal .el-submenu{
        float:right;
    }
    .top_bar{
        
        background:#eef1f6;
        .top_bar_wrapper{
            width:980px;
            margin:0 auto;
        }
    }
    .top_icon{
        height: 60px;
        line-height: 60px;
    }
</style>


