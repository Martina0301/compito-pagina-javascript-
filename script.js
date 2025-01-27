
function creaCard(linea, orario) {
    let riga = document.getElementById("riga");
    let div = document.createElement("div");
    div.classList.add("card", "mb-3");

    let divBody = document.createElement("div");
    divBody.classList.add("card-body");

    let p1 = document.createElement("p");
    p1.innerHTML = "Linea: " + linea;
    p1.classList.add("card-title", "text-bg-primary");

    let p2 = document.createElement("p");
    p2.innerHTML = "Orario: " + orario;
    p2.classList.add("card-text");

    divBody.appendChild(p1);
    divBody.appendChild(p2);
    div.appendChild(divBody);
    riga.appendChild(div);
}

function cerca() {
    let numeroFermata = document.getElementById("input").value;

    let URL = "https://gpa.madbob.org/query.php?stop=" + numeroFermata;

    fetch(URL)
        .then(x => x.json())
        .then(y => {
            document.getElementById("riga").innerHTML = "";

            y.forEach(item => {
                creaCard(item.line, item.hour);
            });
        })
        .catch(error => {

            alert("Errore nei dati, Riprova.");
        });
}