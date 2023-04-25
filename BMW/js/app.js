let home=document.getElementById("home");

let text=document.getElementById("text");

let redbtn=document.getElementById("redbtn");
let bluebtn=document.getElementById("bluebtn");
let blackbtn=document.getElementById("blackbtn");

redbtn.onclick=function(){
	
	home.style.backgroundImage="url(img/BMW1.png)";
	text.style.color="#f92a2a";
}

bluebtn.onclick=function(){
	
	home.style.backgroundImage="url(img/BMW2.png)";
	text.style.color="#311cff";
}

blackbtn.onclick=function(){
	
	home.style.backgroundImage="url(img/BMW3.png)";
	text.style.color="#111"
}
