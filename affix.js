$(document).ready(function () {
    var px_list = [1330, 2200, 5650, 9950, 14000, 20300, 25400, 29350, 34100, 37300, 41800, 49700, 56200];
    $(window).on("scroll", function () {
        onScroll();
    });
    onScroll();
    function onScroll() {
        var col3_width = $(".floating_nav").width();
        if ($(window).scrollTop() > 1330) {
            $(".floating_nav").css({
                display: "block"
            });
            $(".floating_nav > ul").css({
                width: col3_width
            });
        }
        else {
            $(".floating_nav").css({
                display: "none"
            });
        }
        $("div[id^='article_']").each(function () {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var top_of_viewport = $(window).scrollTop();
            var bottom_of_viewport = $(window).scrollTop() + $(window).height();
            if ((top_of_viewport + 50 > top_of_element) && (bottom_of_element < bottom_of_viewport + 50)) {
                // The element is visible, do something
                var id = $(this).attr("id");
                $(".floating_nav a.active").removeClass("active");
                $(".floating_nav a[href='#" + id + "']").addClass("active");
            }
        });
    }

});
    // function onScroll() {
    //     var scroll_px = $(window).scrollTop();
    //     var col3_width = $(".floating_nav").width();
    //     if ($(window).scrollTop() > 1330) {
    //         $(".floating_nav").css({
    //             display: "block"
    //         });
    //         $(".floating_nav > ul").css({
    //             width: col3_width
    //         });
    //     }
    //     else {
    //         $(".floating_nav").css({
    //             display: "none"
    //         });
    //     }
    //     for (var i = 0; i < px_list.length; i++) {
    //         if (scroll_px > px_list[i]) {
    //             if (i === px_list.length - 1) {
    //                 $(".floating_nav .active").removeClass("active");
    //                 $(".floating_nav a[href='#article_12']").addClass("active");
    //             }
    //             continue;
    //         }
    //         if (scroll_px < px_list[i]) {
    //             $(".floating_nav .active").removeClass("active");
    //             if (i === 0) {
    //                 break;
    //             }
    //             $(".floating_nav a[href='#article_" + (i - 1) + "']").addClass("active");
    //             break;
    //         }
    //     }
    // }
// });