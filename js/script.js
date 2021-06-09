// PALINDROME TEST
var wordUser = prompt("Inserisci una parola!");
var palindromTest = document.getElementById("test");

function palindrome(str) {
    var reversed = str.split("").reverse().join("");
    if (reversed === str) return true;
    return false;
}

palindromTest.innerHTML = "La parola inserita è Palindroma? " + palindrome(wordUser);

