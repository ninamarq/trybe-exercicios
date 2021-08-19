let selectTag = document.querySelector('select');
let estados = ["Selecione estado","AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

for (let i = 0; i < estados.length; i++) {
    let optionTag = document.createElement('option');
    optionTag.innerText = estados[i];
    selectTag.appendChild(optionTag);
}

let buttonTag = document.querySelector('#submit-button');

function submitButton() {
    
}