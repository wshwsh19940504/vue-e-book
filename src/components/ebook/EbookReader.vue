<template>
    <div id="ebook-read">
        <div id="read"></div>
    </div>
</template>

<script>
import Epub from 'epubjs';
import { ebookMixin } from '../../utils/mixin';
// import {mapGetters} from 'vuex'
global.epub = Epub
    export default {
        //这里mixins数组
        mixins: [ebookMixin],
    // computed: {
    //     ...mapGetters({
    //      fileName:'fileName',
    //      menuVisible:'menuVisible'
    // })
    // },
        methods: {
            hdieMenuAndTitle(){
               this.$store.dispatch('setMenuVisible',false) 
            },
            prevPage(){
                //判断rendition方法是否存在 
                if (this.rendition) {
                    this.rendition.prev()
                    //设置翻页的时候隐藏
                   this.hdieMenuAndTitle()
                }
            },
            nextPage(){
                  if (this.rendition) {
                    this.rendition.next()
                     this.hdieMenuAndTitle()
                }
            },
            toggleTitleAndMenu(){
                this.$store.dispatch('setMenuVisible',!this.menuVisible)
            },
            initEpub() {
                //模板字符串
                 const Url=`http://192.168.0.104:8088/epub/${this.fileName}.epub`
                 console.log(Url)
                 this.book = new Epub(Url)
                 //第一个参数为绑定的dom
               this.rendition=  this.book.renderTo('read',{
                     width:innerWidth,
                     height:innerHeight,
                     methods:'default'
                 })
                 this.rendition.display()
                 this.rendition.on('touchstart',event => {
                     this.touchStartX=event.changedTouches[0].clientX
                     this.touchStartTime = event.timeStamp

                 });
                this.rendition.on('touchend',event => {
                    //touchen事件触发的时候，x的坐标减去start事件的坐标
                     const offsetX = event.changedTouches[0].clientX - this.touchStartX

                     const time = event.timeStamp - this.touchStartTime
                     console.log(offsetX,time)
                     if (time <500 && offsetX > 40) {
                         this.prevPage()
                     }else if(time<500 && offsetX < -40){
                         this.nextPage() 
                     }else{
                         this.toggleTitleAndMenu()
                     }
                     event.preventDefault()
                     event.stopPropagation();
                     
                 })
            },

            
        },
        mounted() {
           
            //split()z将字符串返回数组,join() 方法用于把数组中的所有元素放入一个字符串。
    
            this.$store.dispatch('setFileName',this.$route.params.fileName.split('|').join('/')).then(()=>{
                this.initEpub()
            })
            
         
        }
    }
</script>

<style lang="scss" scoped>

</style>