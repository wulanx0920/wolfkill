var pn =document.getElementById("pn");
var card =document.getElementById("card");
var peo =document.getElementById("peo");
var next =document.getElementById("next");

// 解析url
function parseURL(url){
    var url = url.split("?")[1];
    var len = url.length;
    var res = {};
    var arr = [];
    for(var i=0;i<len;i++){
        arr = url.split("=");
        res[arr[0]] = arr[1];
    }
    return res;
}
var ppn=parseURL(window.location.href).flag;
var str=[];

// 狼1村2预3女4守5
var lang={
    pid:1,
    src:"../images/wolf.png",
    src_1:"../images/wolf_die.png",
    died:false,
    po:false,
    died_t:false,
    result:""
}
var cun={
    pid:2,
    src:"../images/villige.png",
    src_1:"../images/villige_die.png",
    died:false,
    po:false,
    died_t:false,
    result:""
}
var yu={
    pid:3,
    src:"../images/prophet.png",
    src_1:"../images/prophet_die.png",
    died:false,
    po:false,
    died_t:false,
    result:""
}
var nv={
    pid:4,
    src:"../images/sorceress.png",
    src_1:"../images/sorceress_die.png",
    died:false,
    po:false,
    died_t:false,
    bottle_r:1,
    bottle_g:1,
    result:""
}
var shou={
    pid:5,
    src:"../images/huntsman.png",
    src_1:"../images/huntsman_die.png",
    died:false,
    po:false,
    died_t:false,
    p_y:-1,
    result:""
}
console.log(ppn);
if(ppn==9){
    str.push(lang);
    str.push(lang);
    str.push(lang);
    str.push(cun);
    str.push(cun);
    str.push(cun);
    str.push(yu);
    str.push(nv);
    str.push(shou);
}else if(ppn==10){
    str.push(lang);
    str.push(lang);
    str.push(lang);
    str.push(cun);
    str.push(cun);
    str.push(cun);
    str.push(cun);
    str.push(yu);
    str.push(nv);
    str.push(shou);
}else if(ppn==11){
    str.push(lang);
    str.push(lang);
    str.push(lang);
    str.push(lang);
    str.push(cun);
    str.push(cun);
    str.push(cun);
    str.push(cun);
    str.push(yu);
    str.push(nv);
    str.push(shou);
}
else{
    str.push(lang);
    str.push(lang);
    str.push(lang);
    str.push(lang);
    str.push(cun);
    str.push(cun);
    str.push(cun);
    str.push(cun);
    str.push(cun);
    str.push(yu);
    str.push(nv);
    str.push(shou);
}
function shuffle(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i));
        var temp = arr[index];
        arr[index] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    }
    return arr;
}
str=shuffle(str);

// 存入数据
var st=window.localStorage;
var d=JSON.stringify(str);
st.setItem("pp",d);
st.setItem("step",0);
st.setItem("day",1);


// 翻卡及下一个
var tt=1;
var ss=card.src;
var ff=0;
peo.addEventListener("click",function () {
    if(card.src==ss&&tt<=ppn){
        card.src=str[tt-1].src;
        ff=1;
        peo.innerHTML="隐藏身份"
    }else{
        card.src=ss;
        ff=2;
        peo.innerHTML="显示身份"
    }
    

},false)
next.addEventListener("click",function () {
    if(tt<ppn&&ff==2){
        tt++;
        pn.innerHTML=tt;
        ff=0;
        console.log(ff);
    }
    if(next.innerHTML=="游戏开始"&&ff==2){
        location.href="game1.html";
    }
    if(tt==ppn){
        next.innerHTML="游戏开始";
    }
    

},false);