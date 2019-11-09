<template>
  <div id="app">
    <div id="nav">
     <span class="text">abcde</span>
    </div>
    <router-view/>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
  document.addEventListener('DOMContentLoaded',()=>{
    const html=document.querySelector('html')
    let fontSize=window.innerWidth/10
    fontSize=fontSize>50?50:fontSize
    html.style.fontSize = fontSize + 'px'
  })
export default {
  computed: {
    ...mapGetters('test')
  },

}
</script>
<style lang="scss" scoped>
#app{
  width:100%;
  height:100%;
  overflow:hidden;
}

.text{
  /* 引入字体操作 */
  font-family: 'Days one';
  color:red;
}
</style>
