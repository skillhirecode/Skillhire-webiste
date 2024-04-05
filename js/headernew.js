var menuUL = document.getElementsByTagName("ul");
		var heightOful = menuUL[0].scrollHeight;
		var btnToggle = document.getElementsByClassName("btn-toggle");
		btnToggle[0].addEventListener("click",function(){
			if(menuUL[0].style.maxHeight){
				menuUL[0].style.maxHeight = null;
			}
			else{
				menuUL[0].style.maxHeight = menuUL[0].scrollHeight + "px";
			}
		});