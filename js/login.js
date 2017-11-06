//登录
function testString() {
    var phone = loginForm.phone.value;
    var phoneExp = /^\d{11}$/;
    var flag1 = phoneExp.test(phone);
    console.log(flag1);
    if(flag1!=true){
        alert("您输入/手机号有误！");
    }
    var password = loginForm.password.value;
    var passwordExp = /^[a-zA-Z]\w{5,17}$/;   //以字母开头，长度在6-18之间，只能包含字符、数字和下划线
    var flag2 = passwordExp.test(password);
    if(flag2!=true){
        alert("您输入的密码格式有误！")
    }
}



