<template>
    <div class="ebook">
我是ebook页
<ebook-reader></ebook-reader>
 <router-view></router-view>
    </div>
   
</template>

<script>
 import EbookReader from '../../components/ebook/EbookReader'
    export default {
        components:{
            EbookReader
        }
    }
</script>

<style lang="scss" scoped>

</style>