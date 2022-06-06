

function ajaxObj(methods_, url_, data_) {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');

    if (methods_ == 'get') {
        ajax_.open('get', url_ + '?' + data_, true);
        ajax_.send();
        ajax_.onreadystatechange = function () {
            if (ajax_.readyState == 4) {
                if (ajax_.status == 200) {
                    var str = ajax_.responseText;
                    console.log(str);
                    return 'hahah';

                } else {
                    console.log('请求错误');
                }
            }
        }
    } else if (methods_ == 'post') {
        ajax_.open('post', url_);
        ajax_.send(data_);

        ajax_.onreadystatechange = function () {
            if (ajax_.readyState == 4) {
                if (ajax_.status == 200) {
                    var str = ajax_.responseText;
                    console.log(str);
                } else {
                    console.log('请求错误');
                }
            }
        }
    } else {
        console.log('请求方式错误');
    }

}


function getData() {
    var aa = ajaxObj('get', './my.txt');
    console.log(aa);

}