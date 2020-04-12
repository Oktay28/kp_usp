$(document).ready(()=>{
    pageRedirect();
    filterPhones();
    activateCurrentLink();
    
})

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

function pageRedirect(){
    if(typeof page != "undefined"){
        let content = ""
        let url = window.location.href;
        if(url.indexOf("page=") == -1){
            let separator = url.indexOf("?") == -1 ? "?" : "&";
            url += `${separator}page=1`;
        } 
        for (let p = 1; p <= pageCount; p += 1) {
            content += `<a href="${url.replace(/page=\d+/, `page=${p}`)}" class="${p == page ? "active" : ""}">${p}</a>`;
        }

        $("#page-redirect").html(content);
    }
}

function filterPhones(){
    if(typeof filterData != "undefined"){
        filterData.forEach(data => {
            let $fields = $(`.${data[0]}`);
            let type = $fields.eq(0).attr("type");

            if(type=="checkbox" || type=="radio"){
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
                $fields.eq(0).val(data[1]);
            }
        })
    }
}