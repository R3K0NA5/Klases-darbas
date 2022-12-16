

let sheets = document.getElementsByClassName('sheet'); /*sukurimas sheets kintamasis jis naudoja esancias klaeses 'sheets' is html kurias paimam is document.getElementsByClassName */
function changeTab(sheetId)                                     /*sukuriama funcija 'changeTab' naudojam visus id esancius 'sheet' klaseje  su sheetId */
{for (let i = 0; sheets.length > i; i++)                        /* for loopu nustatom */
{sheets[i].style.display = 'none';}                             /*kad  visi  sheed id display stilius taptu 'none' nieko nerodytu*/
    document.getElementById(sheetId).style.display = 'block';   /*statinam kad sheetid tampa block stilium taip rodo teksta visi kiti tampa none */
}







/*
$('.tabai > a') .click(function (e){
    pakeistiTaba($(this).attr('href'));
    e.preventDefault()
})

function pakeistiTaba (id) {
    $('.sheets > div') .hide();
    $(id) .show();
}*/
/*
function pakeistiTaba(id) {
    $(".sheets > div").hide();

    $(id).show();
}

$(".tabai > a").click(function (e) {
    pakeistiTaba($(this).attr("href"));

    e.preventDefault();
});
*/
