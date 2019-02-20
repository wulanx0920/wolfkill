var st=window.localStorage;
var user=[{name:"xx",password:123},{name:"yy",password:123}];
var d=JSON.stringify(user);
st.setItem("user",d);
setTimeout(function () {
    location.href="homepage.html";
}, 3000);