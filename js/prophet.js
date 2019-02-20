var card =document.getElementsByTagName("h6");
var poS =document.getElementsByTagName("img");
var sub=document.getElementById("sub");
var rtn=document.getElementById("rtn");

var st=window.localStorage;
var d=st.pp;
var pp=JSON.parse(d);

var dFlag=false;
var dP=-1;
var mainP;
var flag=false;

var img=document.getElementsByTagName("img");
for(var u=0;u<pp.length;u++){
    if(pp[u].po==true){
        img[u].style.display="block";
    }
}
for(var j=0;j<pp.length;j++){
    if(parseInt(pp[j].pid)==3){
        card[j].style.background="url("+pp[j].src+") 0 0/100% 100%";
        mainP=j;
    }
    if(pp[j].died===true){
        card[j].style.background="url(../images/back-woof-die.png) 0 0/100% 100%";
    }
}

for(let i=0;i<12;i++){
    if(i<pp.length){
        card[i].addEventListener("click",function () {
            if(pp[i].pid!=3&&dFlag==true&&dP==i){
                dFlag=false;
                card[i].style.border="none";
                console.log();
            }else
            if(pp[i].pid!=3&&dFlag==false&&pp[i].died==false&&flag==false){
                card[i].style.border="1px solid #fff";
                dFlag=true;
                dP=i;
                console.log();
            }
            
        },false)
    }else{
        console.log(card[i]);
        card[i].style.display="none";
    }
}
sub.addEventListener("click",function () {
    if(dP!=-1&&dFlag!=false){
        card[dP].style.background="url("+pp[dP].src+") 0 0/100% 100%";
        flag=true;
    }else if(flag==false){
        console.log(dP+" "+dFlag+" "+flag);
        alert("请选择要验的人");
    } 
},false);
rtn.addEventListener("click",function () {
    if(flag==true){
        location.href="game1.html";
    }
},false);

if(pp[mainP].died==true){
    flag=true;
    sub.style.display="none";
}