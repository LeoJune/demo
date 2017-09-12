//首页功能

define(['jquery','com/carousel','com/gotop','com/waternews'],function($,Carousel,GoTopl,WaterNews){
	new Carousel($('.ct'));

	new GoTop($('body'));

	WaterNews.init('#pic-ct');
})