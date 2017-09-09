<template>
    <div class="top_bar" v-if="navStore&&navStore.navList&&navStore.title">
        <div class="m_top_bar sm_screen">
            <div class="icon" @click="toggleAside"><icon name="bars"></icon></div>
            <h1>{{navStore.title}}</h1>
        </div>
        
        <el-row class="top_bar_wrapper bg_screen">
            <el-col :span="12"><div class="top_icon">{{navStore.title}}</div></el-col>
            <el-col :span="12">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item v-for="(nav,index) in navStore.navList" :index="index+''" :key="'nav_'+index"><a :href="nav.href" target="_blank">{{nav.title}}</a></el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <s-aside :show.sync="showLeft" placement="left" header="Title" :toggleAside="toggleAside">
            <mt-cell  is-link v-for="(nav,index) in navStore.navList" :to="nav.href" :key="'nav_'+index">
                 <icon slot="icon" name="th-large" class="v_center"></icon>
                 <span slot="title" class="v_center">{{nav.title}}</span>
            </mt-cell>
        </s-aside>
    </div>
</template>

<script>
import api from "../common/api.js"
import aside  from './aside.vue'
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        showLeft:false,
        navStore:{}
      };
    },
    // props:{
    //     navStore:{},
    // },
    components:{
        "s-aside":aside
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      toggleAside(){
          this.showLeft = !this.showLeft
      }
    },
    mounted(){
        api.fetchNavStore().then((res)=>{
            this.navStore = res
        })
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
        height: 6rem;
        line-height: 6rem;
        padding:0 1rem;
        box-sizing: border-box;
        .icon{
            height: 100%;
            .v_center();
           
            .fa-icon{
                width: auto;
                height: 2rem;
                line-height: 6rem;
                .v_center();
            }
        }
        h1{
            flex:1;
            text-align: center;
            font-size: 1.4rem;
            line-height: 6.2rem;
        }
    }
    .aside_wrapper{
        background:#fff;
        height: 100%;
    }

</style>


