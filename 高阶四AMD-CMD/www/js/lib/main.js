

requirejs.config({
    baseUrl: './js/lib',
    paths: {

    }
    
})

require(['carousel','showimg','goTop','waterFlow'],
function(carousel,showimg,goTop,waterFlow){
    carousel.init()
    showimg.init();
    waterFlow.init();
    console.log(2)
   goTop.init()
   
})
 