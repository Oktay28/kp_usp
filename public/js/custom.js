

$(function () {
    activateCurrentLink();
});

function activateCurrentLink() {
    var path = window.location.pathname;
    path = decodeURIComponent(path);


    $(".navbar-nav a").each(function () {
        var href = $(this).attr('href');
        if (path === href) {
            $(this).closest('li').addClass('active');
        }
    });
}