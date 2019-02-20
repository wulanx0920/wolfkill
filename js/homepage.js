var voide = document.getElementById("voide");
var audio = document.getElementById("music");
var loading =document.getElementById("loading");
var register =document.getElementById("register");
var forget =document.getElementById("forget");
var userName =document.getElementById("userName");
var password =document.getElementById("password");
var nameW =document.getElementById("nameW");
var passW =document.getElementById("passW");
voide.onclick=function () {
    if(voide.className=="fas fa-volume-up"){
        voide.className="fas fa-volume-down";
    }else{
        voide.className="fas fa-volume-up";
    }
    if(audio!==null){             
        //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
      if(audio.paused)                     {                 
          audio.play();//audio.play();// 这个就是播放  
      }else{
       audio.pause();// 这个就是暂停
      }
     } 
}


// 账号密码格式判断
userName.onblur=function () {
    var reg=/^[a-zA-Z0-9_-]{4,16}$/;
    if(reg.test(userName.value)){
        nameW.innerText="";
    }else{
        nameW.innerText="请输入正确的账号";
        console.log(userName.value);
    }
}
password.onblur=function () {
    var reg=/^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
    if(reg.test(password.value)){
        passW.innerText="";
    }else{
        passW.innerText="请输入正确的密码";
        console.log(password.value);
    }
}
// 登录注册忘记密码
loading.onclick=function(){
    var st=window.localStorage;
    var nname=st.user;
    var user=JSON.parse(nname);
    for(var i=0;i<user.length;i++){
        if(userName.value==user[i].name&&password.value==user[i].password){
            location.href="gameBegin.html"
            return 0;
        }
    }
    alert("账号或者密码有错误");
}
register.onclick=function () {
    location.href="register.html"
}
forget.onclick=function () {
    location.href="forget.html";
}
