$(document).ready(() => {
    let topBtn = $("#back-top");
    let setLeft = $("#header-row").offset().left + 1050;

    function showBackTop () {
        let scrollTop = document.body.scrollTop;

        if (scrollTop > 300) {
            topBtn.addClass('back-top-show');
        } else {
            topBtn.removeClass('back-top-show');
        }
        topBtn.css('left', setLeft + 'px');
    }
    $(window).on('scroll', () => {
        showBackTop();
    });
    topBtn.on('click', () => {
        $('html, body').animate({scrollTop: '0px'}, 600);
    });
    //  回到顶部

    topBtn.css('left', setLeft + 'px');

    /* 测试代码（样式用） */
    let url = `http://localhost:8360/backend/index/getsingleactivity`;
    $.ajax({
        method: 'POST',
        url: url,
        dataType: 'json',
        data: {
            hd_id: 2
        },
        success: (req) => {
            console.log(req.data.hd_detail);
            //$("#intro-content").text(req.data.hd_detail);
            document.querySelector("#intro-content").innerHTML = req.data.hd_detail;
            /* 直接使用 innerHTML 就能够渲染上去 */
        }
    });
    /* 测试代码（样式用） */
});