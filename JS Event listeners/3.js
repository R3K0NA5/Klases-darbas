
document.getElementById("prideti").onclick = function ()
{
    let input1 = document.getElementById("imput1").value;
    let input2 = document.getElementById("imput2").value;
    let input3 = document.getElementById("imput3").value;

    let table = document.getElementById("lentele");
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");

    cell1.innerHTML = input1;
    cell2.innerHTML = input2;
    cell3.innerHTML = input3;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    table.appendChild(row)

}










/*
let lentele = document.querySelector("table > tbody > tr");
function generuotielementa(tekstas){
    let lentelesItem = document.createElement('td');
    lentelesItem.innerHTML = tekstas;
    return lentelesItem;
}
*/





/*
let lenteletest = "vardas";

for(let i = 0; i < lenteletest.length; i++){
    let obj = lenteletest[i];
    let node = generuotielementa(obj +' obj');
    lentele.appendChild(node)
}
*/
