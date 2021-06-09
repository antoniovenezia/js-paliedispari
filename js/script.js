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

var pariDispari = prompt("Pari o Dispari?");

var numberUser = prompt("Scegli un numero da 1 a 5");
console.log(numberUser);

function isPari (num1){
    if (num1 % 2 === 0){
        return "Pari";
    } else {
        return "Dispari";
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





