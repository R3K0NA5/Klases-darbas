let sarasas = document.getElementsByTagName("img");
console.log(sarasas)

for (let i = 0; i < sarasas.length; i++) {
    sarasas[i];}

document.getElementById("uuid").innerHTML = 'Siame puslapyje yra ' +sarasas.length + ' paveiksleliai';


let alert = document.getElementsByTagName('button');


element.addEventListener("click",aliarmas);
function aliarmas(){
    document.getElementsByTagName("button").innerHTML = window.alert(sarasas.length)
}




/*document.getElementsByName("Skaiciuoti paveikslelius").addEventListener("click",window.alert(sarasas.length));*/



/*


img.onclick = function() {
    img.setAttribute("alt", "test");
};


/!*document.getElementById('galerijos_foto').alt = 'test'*!/

/!*!/!*function isvedimas(f){
    let isvestas_sarasas = '';
    for(i = 0; i <f.length; i++){
        isvestas_sarasas.push(f[i])
    } return isvestas_sarasas ;
}*!/
console.log(isvedimas(sarasas))*!/
*/
