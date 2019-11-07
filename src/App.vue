<template>
  <div id="app">
    <div id="nav">
     <span class="text">abcde</span>
    </div>
    <router-view/>
  </div>
</template>
<script>

  document.addEventListener('DOMContentLoaded',()=>{
    const html=document.querySelector('html')
    let fontSize=window.innerWidth/10
    fontSize=fontSize>50?50:fontSize
    html.style.fontSize = fontSize + 'px'
  })
export default {}
</script>
<style lang="scss" scoped>
@import "./assets/styles/global.scss";

.text{
  /* 引入字体操作 */
  font-family: 'Days one';
  color:red;
}
</style>
