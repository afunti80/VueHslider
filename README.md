# Hslider

> for slider

## Usage
Install:

```
npm install vue-hslider -S
```
Import:

```javascript
import vueHslider from 'vue-hslider'
Vue.use(vueHslider)
```
Use:
```javascript
  <template>
    <div id="app">
     <h-Slider  :HsliderOp='HsliderOp' :imgList="imgList" ></h-Slider>
    </div>
  </template>
  <script>
    export default {
       name: 'app',
       data: function () {
         return {
           HsliderOp: {
             width: 543, // 宽度
             height: 543, // 高度
             speed: 5000 // 间隔时间
           },
           imgList: [ // 图片列表
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
  
```
