// document.getElementById("page-title").innerText = "Spider-man";
// document.getElementById("second-paragraph").innerText = "Usando criatividade, hoje ta difícil criar haha";
// document.getElementById("subtitle").innerText = "Amo todos do homem aranha"

let p = document.getElementsByClassName("paragraph");

for (let i = 0; i < p.length; i += 1) {
    p[i] = p[i].innerText = "oi";
}