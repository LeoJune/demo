//首页功能

define(['jquery','com/carousel','com/gotop','com/waternews'],function($,Carousel,GoTop,WaterNews){
	new Carousel($('.ct'));

	new GoTop($('body'));

	WaterNews.init($('.news-ct'));
})