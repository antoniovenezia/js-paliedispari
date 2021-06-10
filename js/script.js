var test = document.getElementById("test");

// PALINDROME TEST
var wordUser = prompt("Inserisci una parola PALINDROMA!");

function palindrome(str) {
    var reversed = str.split("").reverse().join("");
    if (reversed === str) return true;
    return false;
}

test.innerHTML = "La parola inserita è Palindroma? " + palindrome(wordUser);



// PARI E DISPARI

var pariDispari = prompt("Pari o Dispari?").toLowerCase();
console.log(pariDispari);

while (pariDispari !== "pari" && pariDispari !== "dispari"){
    alert("Attenzione! Devi scegliere o pari o dispari!");
    pariDispari = prompt("Pari o Dispari?").toLowerCase();
}


var numberUser = prompt("Scegli un numero da 1 a 5");
console.log(numberUser);
while (isNaN(numberUser) || numberUser < 1 || numberUser > 5){
    alert("Attenzione! Devi inserire un numero compreso tra 1 e 5!");
    numberUser = prompt("Scegli un numero da 1 a 5");
}

function isPari (num1){
    if (num1 % 2 === 0){
        return "pari";
    } else {
        return "dispari";
    }
}
var pariDispariUser = isPari(numberUser);



function num1(min, max) {
    var result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}

var numPc = num1(1, 5);
console.log(numPc);

var somma = parseInt(numberUser) + parseInt(numPc);
console.log(somma);



if (isPari(somma) === pariDispari) {
    test.innerHTML += "\nNel gioco del P o D: Hai vinto!"
} else {
    test.innerHTML += "\nNel gioco del P o D: Hai perso!"
}





