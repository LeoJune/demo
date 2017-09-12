define(['jquery'],function($){

	var WaterNews = (function(){
		function WaterNews($ct){
			this.$ct = $ct
			this.init()
			this.bind()
		}

		WaterNews.prototype = {
			init:function(){
				this.count = 8
				this.curPage = 1
				this.nodeWidth = this.$ct.find('.item').outWidth(true)
				this.cols = parseInt(this.$ct.find('.news-ct').width()/this.nodeWidth)
				this.colSumHeight = []
				for(var i=0;i<this.cols;i++){
					this.colSumHeight[i] = 0
				}
				this.getData()
			},

			bind:function(){
				var _this = this
				this.$ct.find('#loadmore').on('click',function(){
					_this.getData()
				})
			},

			getData:function(){
				$ajax({
					url:'http://platform.sina.com.cn/slide/album_tech',
					type:'get',
					dataType:'jsonp',
					jsonp:'jsoncallback',
					data:{
						app_key:'1271687855',
						num:self.count,
						page:self.curPage
					}
				}).done(function(res){
					if(res && res.status && res.status.code === '0'){
						_this.render(res.data)
						_this.curPage++
					}else{
						console.log('data error')
					}
				})
			},
			//新浪新闻的 jsonp 接口，可以直接看数据， 如： http://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=3&page=4

			render:function(data){
				var _this = this

				$.each(data,function(index,perData){
					var $node = _this.getNode(perData)
					$node.find('img').on('load',function(){
						_this.$ct.find('.news-ct').append($node)
						_this.waterFall($node)
					})
				})
			},

			getNode:function(item){
				var str = ''
			  		str += '<li class="item">'
			  		str += '<a href="' + item.url +'" class="link">'
			  		str += '<img src="' + item.img_url +'" alt="">'
			  		str += '</a>'
			  		str += '<h4 class="header">'+ item.short_name + '</h4>'
			  		str += '<p class="desp">' + item.short_intro +'</p>'
			  		str += '</li>'

			  		return $(str) 
			  	} 
			},

			waterFall:function($node){
				var minH = Math.min.apply(null,this.colSumHeight)
		  		var minIndex = this.colSumHeight.indexOf(minH)

		  		$node.css({
		  			top: minH,
		  			left: this.nodeWidth*minIndex,
		  			opacity: 1
		  		})

		  		this.colSumHeight[minIndex] += $node.outerHeight(true)
		  		this.$ct.find('.news-ct').height(Math.max.apply(null,this.colSumHeight))
			}
		}

		return{
			init:function($nodes){
				$nodes.each(function(index,node){
					new WaterNews($($node))
				})
			}
		}
	})

	return WaterNews
})