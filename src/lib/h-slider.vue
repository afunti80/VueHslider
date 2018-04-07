<template>
  <div class="H-silder" :style="{ width: HsliderOp.width + 'px' }">
    <div class="m-imgs f-cb" :style="{ width: boxwidth + 'px', 'margin-left': leftpx + 'px' }">
      <img class="img" :style="{ width: HsliderOp.width + 'px' }" v-for="item in imgList" :src="item.url">
    </div>
    <div class="u-dot">
      <i :class="[act == key ? 'act' : '']" v-for="itm,key in HsliderOp.size" @click="pay(key,1)"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h-slider',
    data (){
      return{
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
    mounted (){
      var _this = this
      this.boxwidth = _this.HsliderOp.width *  _this.HsliderOp.size
      _this.slider()
    },
    methods: {
      slider: function () {
        let _this = this
        _this.slider = setInterval(()=> {
          let i = this.act + 1
          if (this.act === (this.HsliderOp.size - 1)) {
              i = 0
          }
          _this.pay(i)
        }, _this.HsliderOp.speed)
      },
      pay: function (index) {
        this.act = index
        this.leftpx = (0 - index) * this.HsliderOp.width
      }
    }
  }
</script>

<style  scoped lang="less">
  .H-silder{
    position: relative;
    margin: 20px;
    overflow: hidden;
    .m-imgs {
      -webkit-transition: all 1s ease-in-out;
      -moz-transition: all 1s ease-in-out;
      -o-transition: all 1s ease-in-out;
      transition: all 1s ease-in-out;
      .img{
        float: left;
      }
    }
    .u-dot {
      position: absolute;
      bottom:20px;
      left:20px;
      i{
        cursor: pointer;
        margin-right:10px;
        width:12px;height:12px;
        border-radius: 50%;
        border:3px solid #f5f5f5;
        display: inline-block;
      }
      .act{
        background:#fff;
      }
    }
  }



</style>


