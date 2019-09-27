module.exports ={
    //通过设置 ，可以打包后成功显示
   baseUrl:process.env.NODE_ENV === 'production'
   ? './'
   :'/'
}
