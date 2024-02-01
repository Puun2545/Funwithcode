//smooth scoll down
$(document).ready(function () {
    $("nav a").click(function (event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 500);
    });
});
