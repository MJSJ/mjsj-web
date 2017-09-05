<template>
    <div class="aside_container" @click="hideAside" :class="{
            'show':show,
            'show_left':placement=='left',
            'show_right':placement=='right',
        }">
        <div class="aside_wrapper" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show:false,
        title:"",
        placement:""
    },
    methods: {
      hideAside(){
          this.show = false;
      }
    },
    computed:{
        isShow(){
            return this.show
        }
    },
    mounted(){

    }
}
</script>

<style lang="less" rel="stylesheet/less" >
    .aside_container{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 100;
        left:0;
        top:0;
        background:rgba(0,0,0,.5);
        transition:all .2s ease-in;
        &.show_left{
            transform:translateX(-100%);
        }
        &.show_right{
            transform:translateX(100%);
        }
        &.show{
            transform:translateX(0);
        }
        .aside_wrapper{
            width:60%;
            height: 100%;
        }
    }
</style>


