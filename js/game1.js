var btn=document.getElementsByTagName("button");
console.log(btn);
// 第一天0 晚上1 狼人杀人2 预言家查看3 女巫选择4 守卫选择5
// 白天6 竞选警长7 警徽选择8 警长发言9 所有人发言10 投票11 
// 法官查看12


// 按钮功能
var st=window.localStorage;
var b0=true,b1=true,b6=true;
var step=st.step;
var day=st.day;
var d=st.pp;
var str=JSON.parse(d);
console.log(str);

var stepM=0;


btn[0].addEventListener("click",function () {
    
    if(b0==true){
        for(var i=1;i<btn.length-1;i++){
            btn[i].style.display="none";
        }
        b0=false;
    }else{
        for(var j=1;j<btn.length-1;j++){
            btn[j].style.display="block";
        }
        b0=true;
    }
    
},false)

btn[1].addEventListener("click",function () {
    
    if(b1==true){
        for(var i=2;i<btn.length-7-stepM;i++){
            btn[i].style.display="none";
        }
        b1=false;
    }else{
        for(var j=2;j<btn.length-7-stepM;j++){
            btn[j].style.display="block";
        }
        b1=true;
    }
    
},false)

btn[6].addEventListener("click",function () {
    
    if(b6==true){
        for(var i=7;i<btn.length-1;i++){
            btn[i].style.display="none";
        }
        b6=false;
    }else{
        for(var j=7;j<btn.length-1;j++){
            btn[j].style.display="block";
        }
        b6=true;
    }
    
},false)

btn[2].addEventListener("click",function () {
    
    if(step==0){
        step++;
        st.setItem("step",step);
        location.href="wolf.html";
    }
    
},false)

btn[3].addEventListener("click",function () {
    
    if(step==1){
        step++;
        st.setItem("step",step);
        location.href="prophet.html";
    }
    
},false)
btn[4].addEventListener("click",function () {
    
    if(step==2){
        step++;
        st.setItem("step",step);
        location.href="sorceress.html";
    }
    
},false)
btn[5].addEventListener("click",function () {
    
    if(step==3){
        step++;
        st.setItem("step",step);
        location.href="guard.html";
    }
    
},false)
btn[7].addEventListener("click",function () {
    
    if(step==4){
        step++;
        st.setItem("step",step);
        alert("开始发言");
    }
    
},false)
btn[8].addEventListener("click",function () {
    
    if(step==5+stepM){
        step++;
        st.setItem("step",step);
        location.href="police.html";
    }
    
},false)
btn[9].addEventListener("click",function () {
    
    if(step==6+stepM){
        step++;
        st.setItem("step",step);
        alert("警长发言");
    }
    
},false)
btn[10].addEventListener("click",function () {
    
    if(step==7+stepM){
        step++;
        st.setItem("step",step);
        alert("所有人发言");
    }
    
},false)
btn[11].addEventListener("click",function () {
    
    if(step==8+stepM){
        step=0;
        st.setItem("step",step);
        location.href="vote.html";
    }
    
},false)
btn[12].addEventListener("click",function () {
    
        location.href="god.html";
    
},false)

if(day>1){
    btn[7].parentNode.removeChild(btn[7]);
    stepM--;
}
(function() {
    
    var fg=0;
    for(var i=0;i<str.length;i++){
        if(str[i].po==false){
            fg++;
        }
    }
    if(fg<str.length){
        btn[8].parentNode.removeChild(btn[7]);
        stepM--;
    }
}())
btn[0].innerHTML="第"+day+"天";

// if(step>0){
//     btn[2].style.backgroundColor="yellow";
// }

switch(step){
    case "9":btn[11].style.backgroundColor="yellow";
    case "8":btn[10].style.backgroundColor="yellow";
    case "7":btn[9].style.backgroundColor="yellow";
    case "6":btn[8].style.backgroundColor="yellow";
    case "5":btn[7].style.backgroundColor="yellow";
    case "4":btn[5].style.backgroundColor="yellow";
    case "3":btn[4].style.backgroundColor="yellow";
    case "2":btn[3].style.backgroundColor="yellow";
    case "1":btn[2].style.backgroundColor="yellow";
    default:;
}
console.log(step);