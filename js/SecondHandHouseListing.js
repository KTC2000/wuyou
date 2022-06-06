var $listLi = $('.list li');
var $someListLi = $('.someList > li')
$listLi.click(function () {
    //        把导航条置于页面最顶端
    $('.list').css({
        'position': 'fixed',
        'top': '0',
        'left': '0'
    });
    //        出现透明层蒙板
    $('.hide').show();
    //        定义当前元素的下标
    var index = $(this).index();
    //        给导航上的a元素切换上下箭头及字体颜色
    $listLi.children('h2').children('a').removeClass('active');
    $(this).children('h2').children('a').addClass('active');
    $someListLi.hide();
    //        因为区域下面使用了flex布局，不能直接用display：none隐藏，所以需要判断
    if (index === 0) {
        $someListLi.eq(index).css('display', 'flex');
    } else {
        $someListLi.eq(index).show();
    }
    //        阻止冒泡
    return false;
});
//下面的代码是点击空白区域的时候模板层消失，弹出层消失
$someListLi.on('click', function () { return false; });
$('body').on('click', function () {
    $('.list').css({
        'position': ''
    });
    $('.hide').hide();
    $listLi.children('h2').children('a').removeClass('active');
    $someListLi.hide();
})