/* 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma     ____ CONSEGNA ______

*/


/* 
-aggiungi evento al click del bottone
-inizializzo una variabile "userWord"
-la variabile assume il valore dell'input
-crea una funzione
? SE la parola inserita è palindroma
  °stampa "parola palindroma"
: ALTRIMENTI 
    ° stampa "ok"


*/

const userButtonEl = document.getElementById("user-button");


// -inizializzo una variabile "userWord"
let userWord;

//-aggiungi evento al click del bottone
userButtonEl.addEventListener("click", function(){

    // -la variabile assume il valore dell'input
    userWord = document.getElementById("user-word").value
    console.log(userWord)
    

    //callback funzione
     isPalindrome(userWord);
    
   
});










/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


/* 
-creo le variabili che mi servono per manipolazione DOM
-aggiungo evento al click bottone "invia"
-l'utente inserisce un numero da 1 a 5
?SE il numero inserito è "" oppure è maggiore di 5
 °"inserisci un numero valido
 :ALTRIMENTI
-l'utente sceglie pari o dispari
-genera numero random per pc tramite funzione
-somma i due numeri
-stabilisci se la somma è pari o dispari Ed indica chi ha vinto tramite funzione



*/

// -creo le variabili che mi servono per manipolazione DOM
const UserButton2 = document.getElementById("user-button-2")
let resultEl = document.getElementById("result")


// -aggiungo evento al click bottone "invia"
UserButton2.addEventListener("click", function(){

    
 // -l'utente inserisce un numero da 1 a 5   
 let userNumber = Number(document.getElementById("number").value)


 //SE il numero inserito è "" oppure è maggiore di 5
 if(userNumber == "" || userNumber > 5){

 //°"inserisci un numero valido   
    alert("Inserisci un numero valido!")

//:ALTRIMENTI
 } else {

//-l'utente sceglie pari o dispari
     let userChoice = document.getElementById("choose").value

//-genera numero random per pc tramite funzione
     let pcNumber = randomPcNumber(1,5)
      
//-somma i due numeri     
     let somma = userNumber + pcNumber

//-stabilisci se la somma è pari o dispari Ed indica chi ha vinto tramite funzione     
     resultEl.innerText = `
     - Hai scelto : ${userChoice} 
     - Il Pc ha scelto il numero : ${pcNumber}
     - Il risultato della somma è : ${somma}
     - ${isEvenorOdd(somma, userChoice)}
     
      `;
 
  }
     
});
     
    
    
 
    
 /* ____________________FUNZIONI_____________________ */
    

    
   
function isPalindrome(userWord){

    
    // trasformo la variabile in un array    
        const arrayValue = userWord.split("");
     
    // inverto l'ordine degli indici dell'array    
        const reverseArrayValue = arrayValue.reverse();
    
    //memorizzo l'array invertito in una costante    
        const reverseUserWord = reverseArrayValue.join("");
        
    // SE l'array è uguale l'array invertito    
        if(userWord == reverseUserWord){
    
    // stampa " la parola è palindroma"        
            let check = document.getElementById("check")
            check.innerText = "La parola è palindroma !"
    
    // SE l'array non è uguale all'array invertito        
        } else {
         
    // stampa "la parola non è palindroma"        
            let check = document.getElementById("check")
            check.innerText = "La parola non è palindroma !"
        }
    };
    

 
 

 



function isEvenorOdd (number, choice){

    if(number % 2 == 0 && choice == "pari"){
        return "Il risultato è pari hai vinto !"
        
    } else if(number % 2 == 0 && choice == "dispari"){
        return "Il risultato è pari hai perso"
        
    } else if(number % 2 != 0 && choice == "pari"){
        return "Il risultato è dispari hai perso"
        
    } else {
        return "Il risultato è dispari hai vinto"
        
    }
}










function randomPcNumber (min, max){

    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random
    
}
    
    
