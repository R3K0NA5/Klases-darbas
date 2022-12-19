{
    let mygtukas = document.getElementById('button1');
    mygtukas.addEventListener("click", atspausdinti)

    function atspausdinti() {
        document.getElementById("text1").innerHTML = "Labas, pasauli!";
    }
}
