

$(function () {
    activateCurrentLink();

    $("#brand").select2({
        placeholder: "Марка"
    })

    if(typeof brandId != "undefined"){
        $("#brand").val(brandId).change();
    }

    uploadPhotoEvent("#images", function(response){
        let $template = $($("#img-holder-template").clone(true, true).prop("content")).find(".img-holder:eq(0)");
        $template.find(".img-url:eq(0)").val(response);
        $template.find("img:eq(0)").attr("src", response);
        addEventToImgHolder($template);
        $("#images-gallery").prepend($template);
    })

    uploadPhotoEvent("#front-photo-change", function(response){
        $("#front-photo-holder").val(response);
        $("#front-photo").attr("src", response);
    })

    $(".img-holder").each((_, holder) => {
        addEventToImgHolder(holder);
    })

    $(".delete-phone").click(deletePhone);

    

});

function deletePhone(){
        let $tr = $(this).parents("tr");
        let id = $tr.find("th:eq(0)").text();

        Swal.fire({
            title: 'Изтриване!',
            text: "Сигурни ли сте?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: "Отказ",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Да!'
          }).then((result) => {
            if (result.value) {
                $.ajax({
                    url : "/admin/phones/delete",
                    type: "DELETE",
                    data : {
                        id
                    },
                    success: function(result){
                        if(result == 1){
                            $tr.fadeOut().promise().then(function(){
                                $tr.remove();
                            })
                        }
                    }
                });
            }
          })

    

}

function uploadPhotoEvent(el, callback){
    $(el).change(function(){

        var file = this.files[0];
        var form = new FormData();
        form.append('media', file);
        $.ajax({
            url : "/upload",
            type: "POST",
            cache: false,
            contentType: false,
            processData: false,
            data : form,
            success: callback
        });
        })
}

function addEventToImgHolder(el){
    $(el).click(function(){
        $(this).fadeOut("slow").promise().then(function(){
            $(this).remove();
        })
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
