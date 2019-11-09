<template>
    <div id="ebook-read">
        <div id="read"></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            const baseUrl='http://192.168.0.104:8088/epub/'
            //split()z将字符串返回数组,join() 方法用于把数组中的所有元素放入一个字符串。
            const fileName=this.$route.params.fileName.split('|').join('/').
            console.log(fileName)
        },
    }
</script>

<style lang="scss" scoped>

</style>