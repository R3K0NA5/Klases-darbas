
/*
function pakeistiTaba(id)
{
    $(".sheets > div").hide();
    $(id).show();
}

$(".tabai > a").click(function (e) {
    pakeistiTaba($(this).attr("href"));
    e.preventDefault();
});
*/

$('.tabai > a').click(function()               /*visiems klases tabai priskirtiems a tipo elementams duodamas .click funcija */
{   pakeistiTaba(
    $(this).attr('href'));                     /* */
    priskirtiKlase('active', this);

}
);

function pakeistiTaba (id) {                     /* sukuriama funkcija 'pakeistiTaba' kuri naudoja id kuri yra priskirta sheets lapuose */
    $('.sheets > div').hide();                   /*pirma pazymima kad sheets klaseje visiems div nurodoma pasleptis su '.hide' */
    $(id).show();                                /*nurodoma kad id rodyti, taip kai bus pasirinktas id tada rodys tik ta id*/
}

function priskirtiKlase(klasesvardas, el){      /* sukuriama funcija 'priskirtiKlase', kuri naudoja klasesvardas */
    $('.tabai > a').removeClass(klasesvardas);
    $(el).addClass(klasesvardas);
}

