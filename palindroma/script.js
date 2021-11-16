// alert('ciao')

// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma



//   funzione per invertire la parola
function invertiParola(str){
    let strInversa = str.split('').reverse().join('');  
    console.log(strInversa);
  
    return strInversa;
  
  } 

// chiedi di inserire una parola
const parola = prompt("Inserisci una parola: ");
console.log(parola);

let parolaInversa = invertiParola(parola);
console.log(parolaInversa);


// controllo tra parola e parola inversa
if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  

