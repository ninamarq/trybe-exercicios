//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.
//         */

// function textP() {
//         return document.getElementById("parag").innerText = "Brincando com o getElementById";
// }
// function fontColor() {
//         return document.getElementById("parag").color = rgb(76,164,109);
// }
// function squareColor() {
//         return document.getElementsByClassName("main-content center-content").backgroundcolor = white; 
// }
// function textCorrection() {
//         return document.getElementsByTagName("h1").innerText = "Exercício 5.1 - JavaScript";
// }
// function pMajorText() {
//         let pUpperCase = document.getElementsByTagName("p");
//         return pUpperCase.toUpperCase();
// }
// function allPTag() {
//         document.querySelectorAll("p");
// }

document.getElementById('parag').innerText = "Brincando com o getElementById";
document.getElementById('parag').style.color = 'rgb(76,164,109)';
document.getElementsByClassName('title')[0].innerText = "Exercício 5.1 - JavaScript";
document.getElementsByTagName('p');
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';