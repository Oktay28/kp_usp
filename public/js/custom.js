

$(function () {
    activateCurrentLink();
    toggleFilter();
    changePhonePhoto();

   // document.title = "proba"
   // window.history.pushState({"pageTitle":"probaTitle"},"", '/new/page');
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

function toggleFilter(){
    $("#filter-toggler").click(()=>{
        $("#filter").toggleClass("open");
    })
}

function changePhonePhoto(){
    $(".side-gallery").click(function(){
        $(".phone-left-side:eq(0) img").attr("src", $(this).find("img").attr("src"));
    })
}