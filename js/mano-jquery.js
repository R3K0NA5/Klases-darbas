$(function () {
    let elementas = $('#demo');
    elementas.hide();
    let m1 = $('body > button:first-of-type');
    let m2 = $('body > button:last-of-type');

m1.click(function (){
    elementas.hide();
});

    m2.click(function (){
        elementas.show(); /*toggle vieotoj show galima*/
    });

})
/*function rodyti(){
    document.getElementById('demo').style.display ='block'};*/

element = document.querySelector('body > button:first-of-type');
element.addEventListener("click")