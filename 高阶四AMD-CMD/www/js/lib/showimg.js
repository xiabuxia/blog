requirejs.config({
    paths: {
        jquery: './jquery'
    }  
})
define(['jquery'],function(){

        
        var tabImg = (function(){
            function ShowImg($ct){
            this.$ct = $ct;
            this.init();
            this.bind();
        }
        ShowImg.prototype = {
            init: function(){
                this.bg = this.$ct.find('.images');
                // console.log(this.bg)
                this.index = 0;
    
                this.$ct.find('.showImg img').show();
            },
            bind: function(){
                var _this = this;

                this.$ct.on('click','li',function(){
                     _this.judge();
                     
                var $index = $(this).index();
                var $obj = $(this).find('.images')
                     if($index === 0){
                         $obj.addClass('show1')
                         
                     }else if($index === 1){
                          $obj.addClass('show2')
                     }else if($index === 2){
                         $obj.addClass('show3')
                     }else if($index === 3){
                          $obj.addClass('show4')
                     }else if($index === 4){
                         $obj.addClass('show5')
                     }
                     $obj.parent().find('img').show();
                })
            },
            judge: function(){
                var _this = this;
                _this.$ct.find('img').css('display','none')
                $.each(_this.$ct.find('.images'),function(index,item){
                    if($(item).hasClass('show1')){
                        $(item).removeClass('show1')
                    }else if($(item).hasClass('show2')){
                        $(item).removeClass('show2')
                    }else if($(item).hasClass('show3')){
                        $(item).removeClass('show3')
                    }else if($(item).hasClass('show4')){
                        $(item).removeClass('show4')
                    }else if($(item).hasClass('show5')){
                        $(item).removeClass('show5')
                    }
                })
            } 
        }
            return {
                init: function(){
                    new ShowImg($('.information'))
                }
            }
        })()
        return tabImg
    })