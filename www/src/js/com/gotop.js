define(['jquery'],function($){  //amd写法

	function GoTop($ct){
		this.ct = $ct
		this.target =$("<a class='gotop'>Top</a>")
		this.bind()
	}

	GoTop.prototype = {
		bind:function(){
			var _this = this

			this.creatNode()
			this.target.hide()

			$(window).on('scroll',function(){
				if($(window).scrollTop() > 500){
					console.log(123)
					_this.target.fadeIn()
				}else{
					_this.target.fadeOut()
				}
			})

			this.target.on('click',function(){
				_this.ct.animate({
					scrollTop:0
				},300)
			})
		},
		creatNode:function(){
			this.ct.append(this.target)
		}	
	}

	return GoTop;
})
