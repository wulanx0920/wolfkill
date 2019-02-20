var card =document.getElementsByTagName("h6");
var poS =document.getElementsByTagName("img");
var sub=document.getElementById("sub");
var rtn=document.getElementById("rtn");

var st=window.localStorage;
var d=st.pp;
var pp=JSON.parse(d);

var dFlag=false;
var dP=-1;
var flag=false;

var img=document.getElementsByTagName("img");
for(var u=0;u<pp.length;u++){
    if(pp[u].po==true){
        img[u].style.display="block";
    }
}
// 狼人牌翻开
for(var j=0;j<pp.length;j++){
    card[j].style.background="url("+pp[j].src+") 0 0/100% 100%";
    if(pp[j].died===true){
        card[j].style.background="url("+pp[j].src_1+") 0 0/100% 100%";
    }
}
// 选择要杀的人


rtn.addEventListener("click",function () {
    location.href="game1.html";
},false);

