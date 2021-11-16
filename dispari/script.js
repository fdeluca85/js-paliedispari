// alert('ciao')


// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// funzione per il numero random
function getRandomInt(num) {
    return Math.floor(Math.random() * num) + 1;
}
// funzione per pari o dispari
function isEven(num) {
    return (num % 2 == 0);
}


//scelta giocatore
const choose = prompt("Pari o dispari?"); 
console.log("Hai scelto " + choose);

// numero del giocatore
let userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5: "));
while (userNumber > 5 || userNumber < 1)
{
    userNumber = parseInt(prompt("Devi inserire un numero tra 1 e 5. Riprova"))
}
console.log("Il tuo numero è " + userNumber);

// numero del pc
const pcNumber = getRandomInt(5);
console.log("il numero del PC è " + pcNumber);

// somma dei numeri
const somma = userNumber + pcNumber
console.log('la somma e '+ somma);

if(choose == "pari" isEven(somma))
{
    console.log(pari);
}