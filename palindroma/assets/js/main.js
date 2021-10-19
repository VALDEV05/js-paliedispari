/* Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */


//chiedere all'utente se la parola è palindroma 

//crea una funzione che verifica se è davvero palindroma
//posso vedere se leggendo la parola da sx a dx è uguale a se la leggo da dx a sx
//.split('') se l'aggiungiamo ad una stringa divide ogni lettera in un elemento dell'array
//.reverse() semplicemente inverte l'ordine degli elementi dell'array
//.join('') assembla tutti gli elementi del'array in modo da formare una parola
//stampa la risposta
let result;
//richiesta parola utente
const parolaUser = prompt('inserisci una parola');
//rchiamo la funzione che inverte la funzione che inverte la parola
const parolaInversa = invertiParola(parolaUser);
//controllo se la parola e il suo inverso sono uguali
if (parolaUser == parolaInversa) {
    console.log('la parola è palindroma');
    result = `La parola è palindroma`
} else {
    console.log('la parola non è palindroma');
    result = `La parola non è palindroma`
}
//stampo la risposta a schermo
const placeToPrint = document.querySelector('.result');
placeToPrint.innerHTML = result

//funzione
function invertiParola(str) {
    const strInversa = str.split('').reverse().join('');
    return strInversa;
}
