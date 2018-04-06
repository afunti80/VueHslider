<template>
  <div id="app">
   <h-slider  class="two"  :HsliderOp='HsliderOp' :imgList="imgList" ></h-slider>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: function () {
      return {
        HsliderOp: {
          width: 543,
          height: 543,
          size: 3,
          speed: 5000
        },
        imgList: [
          {
            url: 'http://www.sql80.com/pic/gundongeu-1.png'
          },
          {
            url: 'http://www.sql80.com/pic/gundongeu-2.png'
          },
          {
            url: 'http://www.sql80.com/pic/gundongeu-3.png'
          }
        ]
      }
    }
  }
</script>

<style>

</style>
