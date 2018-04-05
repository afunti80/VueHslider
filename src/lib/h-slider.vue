<template>
  <div class="H-silder" :style="{ width: HsliderOp.width + 'px' }">
    <div class="m-imgs f-cb" :style="{ width: boxwidth + 'px', 'margin-left': leftpx + 'px' }">
      <img class="img" :style="{ width: HsliderOp.width + 'px' }" v-for="item in imgList" :src="item.url">
    </div>
    <div class="u-dot">
      <i :class="[act == key ? 'act' : '']" v-for="itm,key in HsliderOp.size" @click="pay(key)"></i>
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
    watch: {
      content (){
        var _this = this;
      }
    },
    mounted (){
      // let out = document.getElementById(this.pid.out).clientWidth;
      // let _in = document.getElementById(this.pid.in).clientWidth;
      var _this = this
      this.$nextTick(()=>{
        console.log('3333')
        this.boxwidth = _this.HsliderOp.width *  _this.HsliderOp.size
      });
    },
    watch: {
      leftpx (){
        var _this = this;
        setTimeout(()=>{
          // let out = document.getElementById(_this.pid.out).clientWidth;
          // let _in = document.getElementById(_this.pid.in).clientWidth;
          _this.$nextTick(()=>{
            let i = this.act + 1
            if (this.act === (this.HsliderOp.size - 1)) {
              i = 0
            }
            _this.pay(i)
          });
        },3000);
      }
    },
    methods: {
      pay: function (index) {
        this.act = index
        this.leftpx = (0-index) * this.HsliderOp.width
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
      bottom:10px;
      left:10px;
      i{
        cursor: pointer;
        margin-right:5px;
        width:10px;height:10px;
        border-radius: 50%;
        background:rgba(255,255,255,0.5);
        display: inline-block;
      }
      .act{
        background:#fff;
      }
    }
  }



</style>


