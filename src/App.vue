<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   <h-Slider  class="two"  :HsliderOp='HsliderOp' :imgList="imgList" ></h-Slider>
  </div>
</template>

<script>
  import hSlider from './lib/h-slider.vue'
  export default {
    name: 'app',
    components: {
      hSlider
    },
    data: function () {
      return {
        HsliderOp: {
          width: 543,
          height: 543,
          size: 4
        },
        imgList: [
          {
            url: 'http://manage.wangqiuban.cn/static/img/login-bg.60bfb1c.jpg'
          },
          {
            url: 'http://manage.wangqiuban.cn/static/img/login-bg.60bfb1c.jpg'
          },
          {
            url: 'http://manage.wangqiuban.cn/static/img/login-bg.60bfb1c.jpg'
          },
          {
            url: 'http://manage.wangqiuban.cn/static/img/login-bg.60bfb1c.jpg'
          }
        ]
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .marquee-wrap {
    width: 100px;
    margin: 0 auto;
  }
</style>
