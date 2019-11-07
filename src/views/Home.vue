<template>
  <div class="home">
 <span class="icon-cart">

 </span>
    <div id="read"></div>
  </div>
</template>

<script>
// // @ is an alias to /src
import Epub from 'epubjs'
global.epub = Epub
export default {
  name: 'home',
  mounted(){
    this.book = new Epub('/2013_Book_FulfillingThePromiseOfTechnolo.epub')
    console.log(this.book)
//调用book对象的 renderTo方法，和display（）方法，渲染出电子书
    this.book.renderTo('read',{
      width:window.innerWidth,
      height:window.innerHeight
    }).display()
  }

}
</script>
<style scoped>
  .icon-cart{
    font-size:90px;
    color:brown;
  }
</style>