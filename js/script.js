// PALINDROME TEST
var wordUser = prompt("Inserisci una parola PALINDROMA!");
var test = document.getElementById("test");

function palindrome(str) {
    var reversed = str.split("").reverse().join("");
    if (reversed === str) return true;
    return false;
}

test.innerHTML = "La parola inserita è Palindroma? " + palindrome(wordUser);



// PARI E DISPARI

// Funzioni
function num(min, max) {
    var result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}

function isPari(num) {
    if (num % 2 === 0) {
        return "pari";
        
    } else {
        return "dispari";
    }
}



// Variabili
var wordUser = prompt("Pari o Dispari?");
console.log(wordUser);


var numberUser = prompt("Scegli un numero da 1 a 5");
console.log(numberUser);


var numPc = num(1, 5);
console.log(numPc);


var resultSum = parseInt(numberUser) + parseInt(numPc);
console.log(resultSum);




// IF
if (isPari(resultSum) && wordUser === "Pari") {
    test.innerHTML += "\nNell'esercizio del Pari o Dispari l'utente ha vinto";
} else {
    test.innerHTML += "\nNell'esercizio del Pari o Dispari l'utente ha perso";
}



