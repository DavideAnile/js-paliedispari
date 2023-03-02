/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma     ____ CONSEGNA ______

*/


/* 
-aggiungi evento al click del bottone
-chiedi all'utente di inserire una parola e memorizzala
-crea una funzione
? SE la parola inserita è palindroma
  °stampa "parola palindroma"
: ALTRIMENTI 
    ° stampa "ok"


*/

const userButtonEl = document.getElementById("user-button");

let userWord;


userButtonEl.addEventListener("click", function(){

    userWord = document.getElementById("user-word").value
    console.log(userWord)
    
     isPalindrome(userWord);
    
   
});




function isPalindrome(userWord){
    
    const arrayValue = userWord.split("");
    
    const reverseArrayValue = arrayValue.reverse();

    const reverseUserWord = reverseArrayValue.join("");
    
    if(userWord == reverseUserWord){
        let check = document.getElementById("check")
        check.innerText = "La parola è palindroma"
    } else {
        let check = document.getElementById("check")
        check.innerText = "La parola non è palindroma"
    }
};
 

    
