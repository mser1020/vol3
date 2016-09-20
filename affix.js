$(document).ready(function () {
    var px_list = [1330, 2200, 5650, 9950, 16250, 21350, 25300, 30050, 33250, 37750, 45650, 52150];
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
