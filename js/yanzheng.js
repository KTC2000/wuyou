
/*获取会员名的文本框、密码输入框以及确认密码的输入框*/
/*获取span标签*/
var user = document.getElementById("username"),
    ver = document.getElementById('verific'),
    psd = document.getElementById("psd"),
    psd2 = document.getElementById("psd2"),
    myspan = document.getElementsByTagName("span"),
    user_s = myspan[0],
    ver_s = myspan[1],
    psd_s = myspan[2],
    psd2_s = myspan[3],
    submitBtn = document.getElementById("submitBtn");
//当光标聚集到文本框时，span标签里的文字显示
user.onfocus = function () {
    user_s.style.display = "block";
    //光标再次聚集文本框时，改变文字显示
    user_s.innerHTML = '<i class="ati"></i>输入11位的手机号码'
}
user.onblur = function () {
    //正则判断
    reg = /^[\w\u4e00-\u9fa5]{6,12}$/;
    //如果值为空，则span标签的内容改为“不能为空”
    if (user.value == '') {
        user_s.innerHTML = '<i class="err"></i>不能为空';
        return false;
    }
    //如果长度不在6-12之间并且存在非法字符
    else if (!reg.test(user.value)) {
        user_s.innerHTML = '<i class="err"></i>长度不在范围内或者存在非法字符'
        return false;
    }
    //用户名输入与要求一致
    else {
        user_s.innerHTML = '<i class="ok"></i>正确'
        return true
    }
}

// 跳转页面
submitBtn.onclick = function () {
    if (user.onblur() && psd.onblur()) {
        document.getElementsByTagName("form")[0].button(location.href = "login.html");
    }
}

// 验证码
ver.onfocus = function () {
    ver_s.style.display = "block";
    //光标再次聚集文本框时，改变文字显示
    ver_s.innerHTML = '<i class="ati"></i>6个字符的正确验证码'
}
ver.onblur = function () {
    //正则判断
    reg = /^[\w\u4e00-\u9fa5]{6,6}$/;
    //如果值为空，则span标签的内容改为“不能为空”
    if (ver.value == '') {
        ver_s.innerHTML = '<i class="err"></i>不能为空';
        return false;
    }
    //如果长度不在6-12之间并且存在非法字符
    else if (!reg.test(ver.value)) {
        ver_s.innerHTML = '<i class="err"></i>长度不在范围内或者存在非法字符'
        return false;
    }
    //用户名输入与要求一致
    else {
        ver_s.innerHTML = '<i class="ok"></i>正确'
        return true
    }
}
//当光标聚集到密码框时，span标签里的文字显示
psd.onfocus = function () {
    psd_s.style.display = 'block';
    //光标再次聚集密码框时，改变文字显示
    psd_s.innerHTML = '<i class="ati"></i>长度在6-12个字符'
}
psd.onblur = function () {
    //不能为空
    //长度在6-12之间 字母数字下划线       
    //不能全是数字
    //不能全是字母
    var reg = /^\w{6,12}$/;
    var reg1 = /[^0-9]/;
    var reg2 = /[^a-zA-Z]/;
    //不能为空
    if (psd.value == '') {
        psd_s.innerHTML = '<i class="err"></i>不能为空';
        return false;
    }
    //长度在6-12之间 字母数字下划线
    else if (!reg.test(psd.value)) {
        psd_s.innerHTML = '<i class="err"></i>长度不在范围内或者存在非法字符'
        return false;
    }
    //不能全是数字  
    else if (!reg1.test(psd.value)) {
        psd_s.innerHTML = '<i class="err"></i>不能全是数字'
        return false;
    }
    //不能全是字母
    else if (!reg2.test(psd.value)) {
        psd_s.innerHTML = '<i class="err"></i>不能全是字母'
        return false;
    }
    //密码输入与要求一致
    else {
        psd_s.innerHTML = '<i class="ok"></i>正确'
        return true;
    }
}
//当光标聚集到确认密码框时，span标签里的文字显示
psd2.onfocus = function () {
    psd2_s.style.display = 'block';
    //光标再次聚集确认密码框时，改变文字显示
    psd2_s.innerHTML = '<i class="ati"></i>请输入相同密码';
}
psd2.onblur = function () {
    //不能为空
    if (psd2.value == "") {
        psd2_s.innerHTML = '<i class="err"></i>不能为空';
        return false;
    }
    //两次密码输入不一致
    else if (psd.value != psd2.value) {
        psd2_s.innerHTML = '<i class="err"></i>两次密码不一致';
        return false;
    }
    //密码输入与要求一致
    else {
        psd2_s.innerHTML = '<i class="ok"></i>正确'
        return true;
    }
}

// 跳转页面
// submitBtn.onclick = function () {
//     if (user.onblur() && psd.onblur() && psd2.onblur()) {
//         document.getElementsByTagName("form")[0].button(location.href = "login.html");

//     }
// }

// //点击验证码，60秒倒计时
// var min = 60;
// var time;
// $('.yanzheng').click(function () {
//     clearInterval(time);
//     time = setInterval(fn, 1000);
// });

// function fn() {
//     min = --min;

//     if (min > 55) {
//         $('.yanzheng').html('（' + min + '秒）重发');

//     }
//     else if (min = 55) {
//         $('.yanzheng').html('发送验证码')

//     }

// }
// $(function () {
//     $('.yanzheng').click(function () {
//         min = 60;
//         setTimeout(function () { alert("456789"); }, 5000);
//         return fn();


//     });

// });