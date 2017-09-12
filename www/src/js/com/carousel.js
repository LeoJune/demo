define(function(require,exports){

    var $ = require('jquery')   //cmd的写法

    function Carousel($ct){
      this.$ct = $ct;
      var $imgCt =this.$imgCt=this.$ct.find('.slide')
      var $imgs = this.$imgs=this.$ct.find('.slide>li')
      var $preBtn =this.$preBtn=this.$ct.find('.pre')
      var $nextBtn = this.$nextBtn=this.$ct.find('.next')
      var $controlLi = this.$controlLi=this.$ct.find('.control li')

      var pageIndex =this.pageIndex= 0
      var isAnimate = this.isAnimate=false

      var imgCount =this.imgCount= $imgs.length
      var imgWidth = this.imgWidth=$imgs.width()

      this.$imgCt.append($imgs.first().clone())
      this.$imgCt.prepend($imgs.last().clone())
      this.$imgCt.width((imgCount + 2) * imgWidth)
      this.$imgCt.css({left: -imgWidth})



      this.bind();
      this.bullet();
      this.autoPlay();
    }

    Carousel.prototype = {

      bind: function(){
        var _this=this
        
        this.$nextBtn.on('click',function(){
          _this.playNext(1)
        })
        this.$preBtn.click(function(){
        _this.playPre(1)
        })

        this.$ct.on('mouseover',function(){
           _this.stopAutoPlay()
        })
        this.$ct.on('mouseout',function(){
           _this.autoPlay()
        })
      },

      playNext:function(len){
        var _this=this
        
        if(_this.isAnimate) return
        _this.isAnimate = true
        
        _this.$imgCt.animate({
          left: '-='+len*_this.imgWidth
        }, function(){
          
          _this.pageIndex += len
          if(_this.pageIndex === _this.imgCount) {
            _this.pageIndex = 0
            _this.$imgCt.css({left: -_this.imgWidth})
          }
          _this.setBullet()
          _this.isAnimate = false
        })
      },

      playPre:function(len){
        var _this=this

        if(_this.isAnimate) return
        _this.isAnimate = true

        _this.$imgCt.animate({
          left: '+='+len*_this.imgWidth
        }, function(){
          _this.pageIndex -= len
          if(_this.pageIndex < 0){
            _this.pageIndex = _this.imgCount - 1
            _this.$imgCt.css({left: -_this.imgCount*_this.imgWidth})
          }
          _this.setBullet()
          _this.isAnimate = false
        })
      },

      setBullet:function(){
        var _this=this
        _this.$controlLi.removeClass('active')
                .eq(_this.pageIndex)
                .addClass('active')
      },

      bullet:function(){
        var _this=this
        _this.$controlLi.click(function(){
          var index = $(this).index()
          // console.log(index)
          if(index > _this.pageIndex) {
            _this.playNext(index - _this.pageIndex)
          }else if(index < _this.pageIndex){
            _this.playPre(_this.pageIndex - index)
          }
        })
      },

      autoPlay:function(){
        var _this = this;
        this.clock = setInterval(function(){
          _this.playNext(1);
        },3000)
      },

      stopAutoPlay:function(){
        clearInterval(this.clock);
      }

    }

    return Carousel;

})