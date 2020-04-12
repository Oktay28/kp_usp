

$(function () {
    toggleFilter();
    changePhonePhoto();
    $(".remove-from-cart").click(removeFromCart);

    $("#filter-brand").select2({
        placeholder: "Марка"
    })

   // document.title = "proba"
   // window.history.pushState({"pageTitle":"probaTitle"},"", '/new/page');
});



function removeFromCart(){
    let id = +$(this).siblings(".id-holder:eq(0)").text();
    let $row = $(this).parents(".phone-cart-row:eq(0)");
    $.ajax({
        type: "POST",
        url: "/remove-from-cart",
        data: {
            id
        },
        success: (result) => {
            if(result == 1){
                $row.fadeOut().promise().then(()=>{
                    $row.remove();
                    if(!$(".phone-cart-row:eq(0)").length){
                        $("#cart-empty").show();
                    }
                })
            }
        }
    })
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

