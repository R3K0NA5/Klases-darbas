let stringas = document.getElementById('ats').innerText; /*kam priskiriam*/
/*console.log(stringas)*/
/*let expression = '/[0-9]/g';*/
let regex = /[0-9]/g; /*nurodom ko ieskom*/
let tikskaiciai = stringas.match(/[0-9]/g); /*atlieka paieska*/
console.log(tikskaiciai)
/*
gaunamas simboliu masyvas is skaiciu*/
for (let i = 0; i < tikskaiciai.length; i++) {  /*ima tik tikSkaiciai*/
    tikskaiciai[i] = parseInt(tikskaiciai[i]);  /*pakeicia i skaicius tiksliau number*/
    console.log(tikskaiciai[i] + ' ' + typeof tikskaiciai[i]); /*patikrina ar sugeneruoti tikSkaiciai[i] yra numerio tipo*/
    console.log(tikskaiciai[i] + 10);
}
/*https://regex101.com/  regexr.com gali surasti info kaip rinktis  filtra ka ir nuo ko*/
