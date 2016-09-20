$(document).ready(function () {
    var px_list = [1330, 2200, 5650, 9950, 16250, 21350, 25300, 30050, 33250, 37750, 45650, 52150];
    $(window).on("scroll", function () {
        onScroll();
    });
    onScroll();
    function onScroll() {
        var scroll_px = $(window).scrollTop();
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
        for (var i = 0; i < px_list.length; i++) {
            if (scroll_px > px_list[i]) {
                if (i === px_list.length - 1) {
                    $(".floating_nav .active").removeClass("active");
                    $(".floating_nav a[href='#article_12']").addClass("active");
                }
                continue;
            }
            if (scroll_px < px_list[i]) {
                $(".floating_nav .active").removeClass("active");
                if (i === 0) {
                    break;
                }
                $(".floating_nav a[href='#article_" + (i - 1) + "']").addClass("active");
                break;
            }
        }
    }
});
