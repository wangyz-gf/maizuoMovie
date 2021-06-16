module.exports={
    // 关闭eslint
    lintOnSave:false,
    // devServer:{
    // // 关闭eslint
    //     overlay:{
    //         warnings:true,
    //         errors:true
    //     },
    // }
    // 配置跨域一定要重新启动
    devServer: {
        proxy: {
          '/ajax': {
            target: 'https://m.maoyan.com',
            ws: true,
            changeOrigin: true
          },
        //   '/foo': {
        //     target: '<other_url>'
        //   }
        }
      }
}