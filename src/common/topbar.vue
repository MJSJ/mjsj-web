<template>
    <div class="top_bar">
        <div class="m_top_bar sm_screen">
            <div class="icon" @click="toggleAside"><icon name="bars"></icon></div>
            <h1>design</h1>
        </div>
        
        <el-row class="top_bar_wrapper bg_screen">
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
        <s-aside :show.sync="showLeft" placement="left" header="Title">
            <div class="aside_wrapper">
                <mt-cell title="标题文字"></mt-cell>
                <mt-cell title="标题文字"></mt-cell>
            </div>
        </s-aside>
    </div>
</template>

<script>
import aside  from './aside.vue'
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        showLeft:false
      };
    },
    components:{
        "s-aside":aside
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      toggleAside(){
          debugger
          this.showLeft = !this.showLeft
      }
    }
}
</script>

<style lang="less" rel="stylesheet/less" >
    @import url(../common/base.less);
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
    .m_top_bar{
        display: flex;
        height: 3rem;
        line-height: 3rem;
        padding:0 1rem;
        box-sizing: border-box;
        .icon{
            height: 100%;
            .v_center();
           
            .fa-icon{
                width: auto;
                height: 2rem;
                line-height: 3rem;
                .v_center();
            }
        }
        h1{
            flex:1;
            text-align: center;
        }
    }
    .aside_wrapper{
        background:#fff;
        height: 100%;
    }

</style>


