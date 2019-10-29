
//Truyen
var container=document.getElementById("stories");
var container2=document.getElementById("myfo");
//container.className="container";
//mang truyen
var s1={
	name: "Ngủ cùng sói",
	img: "../IMG/ngu-cung-soi.jpg",
	author: "Diệp Lạc Vô Tâm",
	//link: Hello
}
var s2={
	name: "Mãi mãi là bao xa",
	img: "../IMG/715.jpg",
	author: "Diệp Lạc Vô Tâm",
	//link: Hello
}
var s3={
	name: "Hai lần gặp gỡ",
	img: "../IMG/hai-lan-gap-go.jpg",
	author: "Đinh Mặc",
	//link: Hello
}
var s4={
	name: "Archimedes thân yêu",
	img: "../IMG/archimedes-than-yeu.jpg",
	author: "Đinh Mặc",
	//link: Hello
}
var s5={
	name: "Thất tịch không mưa",
	img: "../IMG/that-tich-khong-mua-a.jpg",
	author: "Lâu Vũ Tình",
	//link: Hello
}
var s6={
	name: "Nếu ốc sên có tình yêu",
	img: "../IMG/neu-oc-sen-co-tinh-yeu.jpg",
	author: "Cố Mạn",
	//link: Hello
}
var s7={
	name: "Đông Cung",
	img: "../IMG/dong-cung-133993.jpg",
	author: "Phỉ Ngã Tư Tồn",
}
var s8={
	name: "Mèo Hoang",
	img: "../IMG/meohoang.jpg",
	author: "Đinh Mặc"
}
var storiesArray=[s1, s2, s3, s4];
var len=storiesArray.length;
for(let i=0; i<len; i++){
	var box=document.createElement("div");
	box.className="box";
	var n=document.createElement("p");
	n.className="title";
	n.innerText=storiesArray[i].name;
	var im=document.createElement("img");
	im.src=storiesArray[i].img;
	im.className="img";
	var a=document.createElement("p");
	a.className="author";
	a.innerText=storiesArray[i].author;
	var read=document.createElement("button");
	read.innerText="Đọc truyện";
	read.className="read";
	var love=document.createElement("button");
	love.innerText="Thêm mục yêu thích";
	love.className="read";
	read.onclick=function(arg){
		return function(){
			alert("hi");
		}
	}(i);
	love.onclick=function(arg){
		return function(){
			arrFavo.push(storiesArray[arg]);
			alert("Đã thêm vào mục yêu thích");
			console.log(arrFavo);
			display();
		}
	}(i);
	box.appendChild(im);
	box.appendChild(n);
	box.appendChild(a);
	box.appendChild(read);
	box.appendChild(love);
	container.appendChild(box);
}
var arrFavo=[];
function display(){
	for(let i=0; i<arrFavo.length; i++){
		var box2=document.createElement("div");
		box2.className="box";
		var title2=document.createElement("p");
		title2.innerText=arrFavo[i].name;
		var img2=document.createElement("img");
		img2.src=arrFavo[i].img;
		var author2=document.createElement("p");
		author2.innerText=arrFavo[i].author;

		box2.appendChild(img2);
		box2.appendChild(title2);
		box2.appendChild(author2);
		container2.appendChild(box);
	}
}
function displayFavo(){
	document.getElementById("stories").style.display = "none";
	document.getElementById("myfo").style.display = "block";
}