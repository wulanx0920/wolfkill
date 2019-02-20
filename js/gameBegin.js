var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var next = document.getElementById("next");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");

var flag=0;
btn1.onclick=function () {
    p1.innerText="3人";
    p2.innerText="3人";
    p3.innerText="1人";
    p4.innerText="1人";
    p5.innerText="1人";
    next.style.backgroundColor="#fff";
    flag=9;
}
btn2.onclick=function () {
    p1.innerText="4人";
    p2.innerText="3人";
    p3.innerText="1人";
    p4.innerText="1人";
    p5.innerText="1人";
    next.style.backgroundColor="#fff";
    flag=10;
}
btn3.onclick=function () {
    p1.innerText="4人";
    p2.innerText="4人";
    p3.innerText="1人";
    p4.innerText="1人";
    p5.innerText="1人";
    next.style.backgroundColor="#fff";
    flag=11;
}
btn4.onclick=function () {
    p1.innerText="5人";
    p2.innerText="4人";
    p3.innerText="1人";
    p4.innerText="1人";
    p5.innerText="1人";
    next.style.backgroundColor="#fff";
    flag=12;
}


next.onclick=function () {
    if(flag!=0){
       location.href="begin1.html?flag="+flag; 
    }
    
}
