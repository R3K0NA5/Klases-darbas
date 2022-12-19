{
    let mygtukas = document.getElementById('button1');
    mygtukas.addEventListener("click", atspausdinti)

    function atspausdinti() {
        document.getElementById("text1").innerHTML = "Labas, pasauli!";
    }
}
/////////////////
{
    let mygtukas = document.getElementById('button2');
    mygtukas.addEventListener("click", prideti);

    function prideti() {
        let forma1 = document.createElement("div");
        forma1.innerHTML =
            '<form >\n' +
            '  <label for="fname">Vardas</label><br>\n' +
            '  <input type="text" id="fname" name="fname" value=""><br>\n' +
            '  <label for="lname">pavarde</label><br>\n' +
            '  <input type="text" id="lname" name="lname" value=""><br><br>\n' +
            '  <input type="submit" value="Submit">\n' +
            '</form> '
        let vieta = document.querySelector('div');
        vieta.appendChild(forma1);
    }
}
/////////////////

{
    document.getElementById("prideti").onclick = function () {
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
}