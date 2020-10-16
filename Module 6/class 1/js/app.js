let visible = false, important = false;

function showDetails(){
    console.log("btn clicked")
    if (!visible) {
        UI.secForm.removeClass('invisible');
        UI.btnShow.text('Hide details');
        visible = true;
    }
    else{
        UI.secForm.addClass('invisible');
        UI.btnShow.text('Show details');
        visible = false;
    }
}

function toggleImportant(){
    if (!important) {
        UI.btnImportan.removeClass('btn-ligth');
        UI.btnImportan.addClass('btn-danger');
        important = true;
    }
    else{
        UI.btnImportan.removeClass('btn-danger');
        UI.btnImportan.addClass('btn-ligth');
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