var password =document.getElementById("passwordN");
var userName =document.getElementById("userName");
var passwordR =document.getElementById("passwordR");
var passW =document.getElementById("passW");
var passWW =document.getElementById("passWW");
var change =document.getElementById("change");
var reset =document.getElementById("reset");

var name =parseURL(window.location.href).name;
userName.innerText=name;
var flag=false;
// 获取参数
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

password.onblur=function () {
    var reg=/^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
    if(reg.test(password.value)){
        passW.innerText="密码格式符合要求";
        passW.style.color="green";
        flag=true;
    }else{
        passW.innerText="密码格式不符合要求";
        console.log(password.value);
        passW.style.color="red";
        flag=false;
    }
    if(password.value==passwordR.value){
        passWW.innerHTML="两次密码输入一致";
        passWW.style.color="green";
        flag=true;
    }else{
        passWW.innerHTML="两次密码输入不一致";
        passWW.style.color="red";
        flag=false;
    }
}

passwordR.onblur=function () {
    if(password.value==passwordR.value){
        passWW.innerHTML="两次密码输入一致";
        passWW.style.color="green";
        flag=true;
    }else{
        passWW.innerHTML="两次密码输入不一致";
        passWW.style.color="red";
        flag=false;
    }
}
change.onclick=function () {
    if(flag==true){
        var st=window.localStorage;
        var nname=st.user;
        var user=JSON.parse(nname);
        for(var i=0;i<user.length;i++){
            if(user[i].name==name){
                user[i].password=password.value;
                break;
            }
        }
        var d=JSON.stringify(user);
        st.setItem("user",d);
        alert("密码修改成功");
        location.href="homepage.html";
    }else{
        alert("请输入正确的密码");
    }
}

reset.onclick=function () {
    location.href="forgetN.html"
}

