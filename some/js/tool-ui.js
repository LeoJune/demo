// JavaScript Document
var mv={};

mv.tools={};

mv.tools.getStyle=function(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}


mv.ui={};

mv.ui.textChange=function(obj,str){
	obj.onfocus=function(){
		if(this.value == str){
			this.value = "";
		}
	obj.onblur=function(){
		if(this.value == ""){
			this.value = str;
		}
	}
	}
}

mv.ui.fadeIn=function(obj){
	
	var curstyle = mv.tools.getStyle(obj,'opacity')
	if(curstyle == 1){return false}
	
	var value= 0; 
	clearInterval(obj.timer);
	obj.timer =setInterval(function(){
		var iSpeed = 5;
		if(value == 100){
			clearInterval(obj.timer); 
		}
		else{
			value +=iSpeed;
			obj.style.opacity = value/100;
//			obj.style.filter = "alpha(opacity="+value+")";
		}
		
	},30)
}
mv.ui.fadeOut=function(obj){
	
	var curstyle = mv.tools.getStyle(obj,'opacity')
	if(curstyle == 0){return false}
	
	var value= 100; 
	clearInterval(obj.timer)
	obj.timer =setInterval(function(){
		var iSpeed = -5;
		if(value == 0){
			clearInterval(obj.timer);
		}
		else{
			value +=iSpeed;
			obj.style.opacity = value/100;
//			obj.style.filter = "alpha(opacity="+value+")";
		}
		
	},30)
}

mv.ui.moveLeft=function(obj,now,old){
	
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function(){
		var iSpeed = (now-old)/8;
		iSpeed = iSpeed > 0?Math.ceil(iSpeed):Math.floor(iSpeed);
		if(old == now){
			clearInterval(obj.timer);
		}
		else{
			old = old + iSpeed;
			obj.style.left = old + 'px';
		}
	},30)
}














































