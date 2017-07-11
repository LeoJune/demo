//Javascript document
window.onload = function(){
	var tab = document.querySelector(".tab");
	var tabLi = tab.querySelectorAll("li");

	var conBox = document.querySelector(".content-box");
	var con = conBox.querySelectorAll("div");

	for(var i = 0;i < tabLi.length; i++){
		var index;
		tabLi[i].index = i;
		tabLi[i].onclick = function(){
			console.log(index)
			for(var j = 0; j < tabLi.length; j++){
				tabLi[j].classList.remove('active');
				con[j].classList.remove('blo');
			}
			tabLi[this.index].classList.add('active');
			con[this.index].classList.add('blo');
		}
	}

	var btn = document.querySelector("#chufa");
	var moudel = document.querySelector(".moudel");
	var moudelCon = document.querySelector(".moudel-content");
	var close = document.getElementsByClassName("close");
	console.log(close)

	btn.addEventListener("click",function(){
		moudel.classList.add("blo");
	})
	moudel.addEventListener("click",function(e){
		e.stopPropagation();
		moudel.classList.toggle("blo");
	})
	moudelCon.addEventListener("click",function(e){
		e.stopPropagation();
	})
	for(var i = 0;i < close.length; i++){
		close[i].onclick = function(e){
		e.stopPropagation();
		moudel.classList.remove("blo");
		}
	}
	
}


