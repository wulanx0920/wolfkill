var userName =document.getElementById("name");
var password =document.getElementById("password");
var passwordR =document.getElementById("passwordR");
var email =document.getElementById("email");
var phone =document.getElementById("phone");
var yzm =document.getElementById("yzm");
var nameW =document.getElementById("nameW");
var passW =document.getElementById("passW");
var getY =document.getElementById("getY");
var time =document.getElementById("time");

var flag =false;
var yyz;

function ret() {
    location.href="homepage.html";
}
// 账号密码格式判断
userName.onblur=function () {
    var reg=/^[a-zA-Z_-][a-zA-Z0-9_-]{7,15}$/;
    if(reg.test(userName.value)){
        nameW.innerText="账号符合要求";
        passWW.style.color="green";
        flag=true;
    }else{
        nameW.innerText="请输入正确的账号";
        console.log(reg.test(userName.value));
        passWW.style.color="red";
        flag=false;
    }
    return flag;
}


password.onblur=function () {
    var reg=/^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
    if(reg.test(password.value)){
        passW.innerText="账号符合要求";
        flag=true;
        if(password.value==passwordR.value){
            passWW.innerHTML="两次密码输入一致";
            passWW.style.color="green";
            flag=true;
        }else{
            passWW.innerHTML="两次密码输入不一致";
            passWW.style.color="red";
            flag=false;
        }
    }else{
        passW.innerText="请输入正确的密码";
        console.log(password.value);
        flag=false;
    }
    return flag;
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
    return flag;
}
email.onblur=function () {
    var reg=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    if(reg.test(email.value)){
        emailW.innerText="";
        flag=true;
    }else{
        emailW.innerText="请输入正确的邮箱";
        console.log(email.value);
        flag=false;
    }
    return flag;
}
phone.onblur=function () {
    var reg=/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    if(reg.test(phone.value)){
        phoneW.innerText="";
        flag=true;
    }else{
        phoneW.innerText="请输入正确的手机号";
        console.log(phone.value);
        flag=false;
    }
    return flag;
}
yzm.onblur=function () {
    if(parseInt(yyz)==yzm.value){
        yzmW.innerHTML="验证码正确";
        yzmW.style.color="green";
        flag=true; 
    }else{
        yzmW.innerHTML="验证码错误";
        yzmW.style.color="red";
        flag=false;
    }
    
    return flag;
}

getY.onclick= function getYZM() {
    
    var xhr =new XMLHttpRequest();
    xhr.open("get","qcloudsms_php-master/aaa/index.php?phone="+phone.value,true);
    xhr.send();
    xhr.onreadystatechange=function () {
        if(this.status==200&&this.readyState==4){
            yyz=this.responseText;
        }
    }
    getY.style.display="none";
    show();
    time.style.display="inline-block";
    
} 
function show(){
    var i=15;
    time.innerHTML=(i--)+"s";
    var yy=setInterval(function () {
        time.innerHTML=(i--)+"s";
        console.log(i);
    },1000);
    setTimeout(function () {
        clearInterval(yy);
        getY.innerText="再次获取"
        getY.style.display="inline-block";
        time.style.display="none";
    },15000);

}
// 注册重置
function change() {
    alert(111);
    if(userName.onblur()==true&&password.onblur()==true&&email.onblur()==true&&phone.onblur()==true&&yzm.onblur()==true){
        var st=window.localStorage;
        var nname=st.user;
        var user=JSON.parse(nname);
        for(var i=0;i<user.length;i++){
            if(user[i].name==userName.value){
                alert("账号名重复");
                return 0;
            }
        }
        var ss={
            name:userName.value,
            password:password.value
        }
        user.push(ss);
        var d=JSON.stringify(user);
        st.setItem("user",d);
        alert("注册成功");
        location.href="homepage.html";
    }
}
function reset() {
    location.href="register.html"
}
