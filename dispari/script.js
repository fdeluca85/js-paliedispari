// alert('ciao')


// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

//scelta giocatore
const choose = prompt("Pari o dispari?"); 
console.log("Hai scelto " + choose);

// numero del giocatore
const userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5: "));
if (userNumber > 5){
    alert ("non hai inserito un numero tra 1 e 5")
    
}
console.log("Il tuo numero è " + userNumber);

