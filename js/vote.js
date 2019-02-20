var card =document.getElementsByTagName("h6");
var poS =document.getElementsByTagName("img");
var sub=document.getElementById("sub");
var rtn=document.getElementById("rtn");

console.log(card[1]);
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
    if(pp[j].died===true){
        card[j].style.background="url(../images/back-woof-die.png) 0 0/100% 100%";
    }
}
// 选择要杀的人
for(let i=0;i<12;i++){
    if(i<pp.length){
        card[i].addEventListener("click",function () {
            if(dFlag==true&&dP==i){
                dFlag=false;
                card[i].style.border="none";
                pp[i].died_t=false;
            }else
            if(dFlag==false&&pp[i].died==false&&flag==false){
                card[i].style.border="1px solid #fff";
                dFlag=true;
                dP=i;
                pp[i].died_t=true;
            }
            
        },false)
    }else {
        console.log(card[i]);
        card[i].style.display="none";
    }
}
sub.addEventListener("click",function () {
    if(dP!=-1&&dFlag!=false&&flag==false){
        card[dP].style.border="1px solid red";
        pp[dP].died=pp[dP].died_t;
        pp[dP].died_t=false;
        pp[dP].po=false;
        var day = st.day;
        day=parseInt(day)+1;
        var dd=JSON.stringify(pp);
        st.setItem("pp",dd);
        st.setItem("day",day);
        flag=true;
        console.log("222");
    }else if(flag==false){
        alert("请选择投票结果");
    } 
},false);
rtn.addEventListener("click",function () {
    if(flag==true){
        location.href="game1.html";
    }
},false);

