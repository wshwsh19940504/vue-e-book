module.exports ={
    //通过设置 ，可以打包后成功显示,public文件
   baseUrl:process.env.NODE_ENV === 'production'
   ? './'
   :'/'
}
