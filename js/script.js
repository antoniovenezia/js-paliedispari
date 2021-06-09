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
var numberUser = prompt("Scegli un numero da 1 a 5");

function num(min, max){
    var result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}

var numPc = num(1, 5);
console.log(numPc);

var resultSum = parseInt(numberUser) + parseInt(numPc);
console.log(resultSum);


function isPari(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if (isPari(resultSum)) {
    test.innerHTML += "\nL'utente ha vinto";
} else {
    test.innerHTML += "\nL'utente ha perso";
}



