// JavaScript Document
window.onload=function(){
	mv.app.toHide();
	mv.app.toFade();
	mv.app.toRun();
	mv.app.toTab();
	
}
mv.app={};

mv.app.toHide=function(){
	var head = document.getElementById("head");
	var gLi = head.getElementsByClassName("baoliu");
	var hide = head.getElementsByClassName("hide");
	
	for(var i=0;i<gLi.length;i++){
		gLi[i].index=i;
		gLi[i].onmouseover=function(){
			for(var j=0;j<hide.length;j++){
				hide[j].style.display="none";
			}
			hide[this.index].style.display="block";
		}
	
		gLi[i].onmouseout=function(){
			for(var j=0;j<hide.length;j++){
				hide[j].style.display="none";
			}
		}
	}
	
}
mv.app.toFade=function(){
	var slidebox = document.getElementsByClassName("slidebox")[0];
	var slideli = slidebox.getElementsByTagName("li");
	
	var slide=document.getElementById("slide");
	
	var control = document.getElementsByClassName("control")[0];
	var controli = control.getElementsByTagName("li");
	
	var iNow = 0;
	
	timer = setInterval(auto,3000);
	
	function auto(){
		if(iNow == slideli.length-1){
			iNow = 0;
		}
		else{
			iNow++;
		}
		for(var i=0;i<slideli.length; i++){
			mv.ui.fadeOut(slideli[i]);
			controli[i].className = "";
		}
		mv.ui.fadeIn(slideli[iNow]);
		controli[iNow].className = "control-active"; 
	}
	
	
	for(var i=0;i<controli.length;i++){
		
		controli[i].index = i;
		controli[i].onclick=function(){
			
			clearInterval(timer);
			
			for(var i=0;i<slideli.length; i++){
				mv.ui.fadeOut(slideli[i]);
				controli[i].className = "";
			}
			mv.ui.fadeIn(slideli[this.index]);
			iNow = this.index;
			this.className = "control-active"
		}
		controli[i].onmouseout=function(){
			clearInterval(timer)
			timer = setInterval(auto,3000);
		}
	}
	
	slide.onmouseover=function(){
		clearInterval(timer);
	}
	slide.onmouseout=function(){
		clearInterval(timer);
		timer = setInterval(auto,3000);
	}
}
mv.app.toRun= function(){
	var carousel = document.getElementById("carousel");
	
	var runUl = carousel.getElementsByClassName("run")[0];
	var runLi = runUl.getElementsByClassName("runli");
	
	
	var control= carousel.getElementsByClassName("control")[0];
	var controli = control.getElementsByTagName("li");
	
	
	var oPrev = carousel.getElementsByClassName("prev")[0];
	var oNext = carousel.getElementsByClassName("next")[0];
	
	var iNow = 0;
	
	runUl.style.width = runLi.length * runLi[0].offsetWidth + 'px';
	
	oPrev.onclick=function(){
		if( iNow == 0){
			return false;
		}
		
		mv.ui.moveLeft(runUl,-(iNow-1)*runLi[0].offsetWidth,-iNow*runLi[0].offsetWidth);
		
		iNow--;
		
		for(var i=0;i<controli.length;i++){
			controli[i].className="";
		}
		controli[iNow].className="control-active";
	}
	oNext.onclick=function(){
		if( iNow == runLi.length-1){
			return false;
		}
		
		mv.ui.moveLeft(runUl,-(iNow+1)*runLi[0].offsetWidth,-iNow*runLi[0].offsetWidth);
		
		iNow++;
		
		for(var i=0;i<controli.length;i++){
			controli[i].className="";
		}
		controli[iNow].className="control-active";
	}
	
	for(var i=0;i<controli.length;i++){
		
		controli[i].index = i;
		
		controli[i].onclick=function(){
			var star = iNow;
			
			iNow = this.index;
			
			mv.ui.moveLeft(runUl,-iNow*runLi[0].offsetWidth,-star*runLi[0].offsetWidth);
			
			for(var i=0;i<controli.length;i++){
			controli[i].className="";
		}
			controli[this.index].className="control-active";
			
		}
	}
	
	mv.app.toTab=function(){
		var yuanQu=document.getElementsByClassName("yuanqu")[0];
		var yuanLi = yuanQu.getElementsByTagName("li");
		var yuanBox=yuanQu.getElementsByClassName("box");
		
		var pingZhong=document.getElementsByClassName("pingzhong")[0];
		var pingNav = pingZhong.getElementsByClassName("nav")[0];
		var pingLi = pingNav.getElementsByTagName("li");
		var pingBox= pingZhong.getElementsByClassName("box");
		
		var xianChang=document.getElementsByClassName("xianchang")[0];
		var xianNav = xianChang.getElementsByClassName("nav")[0];
		var xianLi = xianNav.getElementsByTagName("li");
		var xianBox= xianChang.getElementsByClassName("box");
		
		
		for(var i=0;i<yuanLi.length;i++){
			yuanLi[i].index=i;
			yuanLi[i].onmouseover=function(){
				for(var j=0;j<yuanBox.length;j++){
					yuanBox[j].style.display="none";
					yuanLi[j].className="";
				}
				yuanLi[this.index].className="active";
				yuanBox[this.index].style.display="block";
			}
		}
		
		for(var i=0;i<pingLi.length;i++){
			pingLi[i].index=i;
			pingLi[i].onmouseover=function(){
				for(var j=0;j<pingBox.length;j++){
					pingBox[j].style.display="none";
					pingLi[j].className="";
				}
				pingLi[this.index].className="active";
				pingBox[this.index].style.display="block";
			}
		}
		for(var i=0;i<xianLi.length;i++){
			xianLi[i].index=i;
			xianLi[i].onmouseover=function(){
				for(var j=0;j<xianBox.length;j++){
					xianBox[j].style.display="none";
					xianLi[j].className="";
				}
				xianLi[this.index].className="active";
				xianBox[this.index].style.display="block";
			}
		}
		
	}
}