// alert('ciao')


// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// numero pc
// function getRandomInt(num) {
//     return Math.floor(Math.random() * num) + 1;
// }
// controllo numero pari
function isEven(num) {
    return (num % 2 == 0);
}


//scelta giocatore
const choose = prompt("Pari o dispari?"); 
console.log("Hai scelto " + choose);

// numero del giocatore
let userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5: "));
while (userNumber > 5 || userNumber < 1)
{ //se il giocatore inserisce un numero fuori range
    userNumber = parseInt(prompt("Devi inserire un numero tra 1 e 5. Riprova"))
}
console.log("Il tuo numero è " + userNumber);

// numero del pc
const pcNumber = 2;

// somma dei numeri
const somma = userNumber + pcNumber
console.log('la somma è '+ somma);


// controllo scelta pari e dispari
if(choose == "pari" && isEven(somma))
{
    console.log("è pari hai vinto")
}
else if(choose == "pari" && !isEven(somma))
{
    console.log("è dispari hai perso")
}
else if(choose == "dispari" && !isEven(somma))
{
    console.log("è dispari hai vinto")
}
else if (choose == "dispari" && isEven(somma))
{
    console.log("è pari hai perso")
}