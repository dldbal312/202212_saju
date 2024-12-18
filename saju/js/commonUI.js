var commUi = {};

(function(commUi) {
    this.commUi = commUi;
})((function($) {
    //디바이스 전체메뉴
    commUi.allMenuBtn = function(){
        $('.header .btn_allmenu').on('click', function(){
            $('.header').addClass('active');
        });
        $('.header .menu_close').on('click', function(){
            $('.header').removeClass('active');
            $('.search_area').removeClass('show');
        });
        $('.header .btn_search').on('click', function(){
            $('.search_area').addClass('show');
        });
    };

    return commUi;
}(jQuery)));

$(document).ready(function(){
    //디바이스 전체메뉴
    commUi.allMenuBtn();

});

