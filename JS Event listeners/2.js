let mygtukas = document.getElementById('button1');
mygtukas.addEventListener("click" , prideti  );
function prideti(){
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
vieta.appendChild(forma1);}
