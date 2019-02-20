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
var mainP;
var flag=false;
var d_today;

var img=document.getElementsByTagName("img");
for(var u=0;u<pp.length;u++){
    if(pp[u].po==true){
        img[u].style.display="block";
    }
}
for(var j=0;j<pp.length;j++){
    
    if(pp[j].died_t==true){
        card[j].style.background="url(../images/back-woof-die.png) 0 0/100% 100%";
        card[j].style.border="2px solid red";
        d_today=j;
    }
    if(pp[j].died==true){
        card[j].style.background="url(../images/back-woof-die.png) 0 0/100% 100%";
    }
    if(parseInt(pp[j].pid)==4){
        card[j].style.background="url("+pp[j].src+") 0 0/100% 100%";
        console.log(card[j].style.background_image);
        mainP=j;
        console.log(mainP);
    }
}

for(let i=0;i<12;i++){
    if(i<pp.length){
        card[i].addEventListener("click",function () {
            if(pp[i].pid!=4&&dFlag==true&&dP==i){
                dFlag=false;
                card[i].style.border="none";
                pp[i].died_t=false;
            }else
            if(pp[i].pid!=4&&dFlag==false&&pp[i].died_t==false&&flag==false&&pp[i].died==false){
                card[i].style.border="2px solid #fff";
                dFlag=true;
                dP=i;
                pp[i].died_t=true;
            }
            
        },false)
    }else{
        console.log(card[i]);
        card[i].style.display="none";
    }
}
kill.addEventListener("click",function () {
    if(dP!=-1&&dFlag!=false&&pp[mainP].bottle_r>0&&flag==false){
        pp[mainP].bottle_r--;
        pp[dP].died_t=false;
        card[dP].style.border="1px solid red";
        card[dP].style.background="url(../images/back-woof-die.png) 0 0/100% 100%";
        var dd=JSON.stringify(pp);
        st.setItem("pp",dd);
        flag=true;
    }else if(flag==false){
        console.log(dP+" "+dFlag+" "+flag);
        alert("请选择要毒的人");
    }
},false);
save.addEventListener("click",function () {
    console.log(card[dP]);
    if(pp[mainP].bottle_g>0&&flag==false){
        pp[mainP].bottle_g--;
        savee();
        
        var dd=JSON.stringify(pp);
        st.setItem("pp",dd);
        card[d_today].style.border="1px solid green";
        card[d_today].style.background="url(../images/back-woof.png) 0 0/100% 100%";
        flag=true;
    }else if(flag==false){
        alert("已救或解药不够");
    } 
},false);
rtn.addEventListener("click",function () {
    location.href="game1.html";
},false);
if(pp[mainP].died==true){
    sub.style.display="none";
}
function savee() {
    for(var u=0;u<pp.length;u++){
        if(pp[u].died_t==true){
            pp[u].died_t=false;
            console.log(pp[u].died_t);
        }
    }
}