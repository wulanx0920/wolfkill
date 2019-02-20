var ret =document.getElementById("returnn");
var next =document.getElementById("next");
var userName =document.getElementById("userName");
var nameW =document.getElementById("nameW");


ret.onclick=function () {
    location.href="homepage.html";
}
next.onclick=function () {
    var st=window.localStorage;
    var nname=st.user;
    var user=JSON.parse(nname);
    for(var i=0;i<user.length;i++){
        if(userName.value==user[i].name){
            location.href="forgetN.html?name="+userName.value;
            break;
        }else if(i==user.length-1){
            console.log(i==user.length-1)
            nameW.innerText="没有该账号或者账号名输入错误";
        }
    }
}