let visible = false, important = false;
let ShowIcon = '<i class="fas fa-eye"></i>', HideIcon = '<i class="fas fa-eye-slash"></i>';
let FillStar = '<i class="fas fa-star"></i>', UnfillStar = '<i class="far fa-star"></i>';

function showDetails(){
    console.log("btn clicked")
    if (!visible) {
        UI.secForm.removeClass('invisible');
        UI.btnShow.html(HideIcon + " Hide details");
        visible = true;
    }
    else{
        UI.secForm.addClass('invisible');
        UI.btnShow.html(ShowIcon + " Show details");
        visible = false;
    }
}

function toggleImportant(){
    if (!important) {
        UI.btnImportan.addClass('active');
        UI.btnImportan.html(FillStar);
        important = true;
    }
    else{
        UI.btnImportan.removeClass('active');
        UI.btnImportan.html(UnfillStar);
        important = false;
    }
}

function init(){

    UI = {
        btnShow: $("#btnShow"),
        btnImportan: $("#btnImportant"),
        secForm: $("#secForm")
    }
    $("#btnShow").click(showDetails);
    $("#btnImportant").click(toggleImportant);
}

window.onload = init;