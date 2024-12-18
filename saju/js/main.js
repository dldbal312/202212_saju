var mainUi = {};

(function (mainUi) {
    this.mainUi = mainUi;
})((function ($) {
    mainUi.pgSlider = function (obj, pgType, num) {
        if(num == 1){
            var mainSlider = new Swiper(obj, {
                slidesPerView:1,
                centeredSlides:true,
                loop:true,
                pagination: {
                  el: obj + " .swiper-pagination",
                  type: pgType,
                  clickable:true
                }
            });
        }else if(num == 2){
            var mainSlider = new Swiper(obj, {
                slidesPerView:'auto',
                spaceBetween:16,
                loop:true,
                pagination: {
                  el: obj + " .swiper-pagination",
                  clickable:true
                }
            });
        }else{

        }
        
    };
    
    return mainUi;
}(jQuery)));
$(document).ready(function () {
    //메인슬라디더
    mainUi.pgSlider('.main_slider', 'fraction', 1);
    mainUi.pgSlider('.event_day_slider', 'bullets', 1);
    mainUi.pgSlider('.today_luck_slider', '', 2);
});