

$(function () {
    activateCurrentLink();
    toggleFilter();
    changePhonePhoto();
    $(".remove-from-cart").click(removeFromCart);
    filterPhones();

    $("#filter-brand").select2({
        placeholder: "Марка"
    })

   // document.title = "proba"
   // window.history.pushState({"pageTitle":"probaTitle"},"", '/new/page');
});

function filterPhones(){
    if(typeof filterData != "undefined"){
        console.log(filterData);
        filterData.forEach(data => {
            let $fields = $(`.${data[0]}`);
            let type = $fields.eq(0).attr("type");

            if(type=="checkbox" || type=="radio"){
                console.log($fields);
                if(typeof data[1] != "object") data[1] = [data[1]];
                $fields.filter((_, input) => {
                    return typeof data[1].find(f => f == $(input).val()) != "undefined";
                }).prop("checked", true);
            } else if($fields.eq(0).prop("tagName") == "SELECT"){
                if(typeof data[1] != "object") data[1] = [data[1]]
                data[1].forEach(val => {
                    $fields.eq(0).find(`option[value=${val}]`).prop("selected", true);
                })
                $fields.eq(0).change();
            }  
            else {
                $fields.val(data[1]);
            }
        })
    }
}

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