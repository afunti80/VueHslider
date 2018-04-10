<template>
  <div class="H-silder" :style="{ height: HsliderOp.height + 'px',width: HsliderOp.width + 'px'}">
    <transition-group tag="ul" class='slide-ul' name="list">
      <li v-for="(list,index) in imgList" :key="index" v-show="index===currentIndex" @mouseenter="HStop" @mouseleave="HSgo">
        <a :href="list.clickUrl" >
          <img :src="list.url" :alt="list.desc">
        </a>
      </li>
    </transition-group>
    <div class="carousel-items">
      <span v-for="(item,index) in imgList.length" :class="{'active':index===currentIndex}" @click="change(index)"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h-slider',
    data (){
      return{
        currentIndex: 0,
        run: false,
        boxwidth: '',
        leftpx: 0,
        act: 0
      }
    },
    props: {
      'imgList': {
        type: Array
      },
      'HsliderOp': {
        type: Object
      }
    },
    created (){
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, this.HsliderOp.speed)
      })
    },
    methods: {
      HStop: function () {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, this.HsliderOp.speed)
      },
      HSgo: function () {
        clearInterval(this.timer)
        this.timer = null
      },
      autoPlay: function () {
        this.currentIndex++
        if (this.currentIndex > this.imgList.length - 1) {
          this.currentIndex = 0
        }
      },
      change: function (index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style  scoped lang="less">
  .H-silder {
    width: 100%;
    position: relative;
    overflow: hidden;
    ul{
      width: 100%;
      height: 100%;
      margin:0;
      padding:0px;
      li{
        list-style: none;
        margin:0;
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    .carousel-items{
      position: absolute;
      bottom:15px;
      left:15px;
      span{
        cursor: pointer;
        margin-right:10px;
        width:12px;height:12px;
        border-radius: 50%;
        border:3px solid #f5f5f5;
        display: inline-block;
        &.active{
            background:#Fff;
         }
      }
    }
  }
  .list-enter-to {
    transition: all 1s ease;
    transform: translateX(0);
  }

  .list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
  }

  .list-enter {
    transform: translateX(100%)
  }

  .list-leave {
    transform: translateX(0)
  }

</style>


