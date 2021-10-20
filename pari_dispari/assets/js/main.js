/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */


//richiesta pari o dispari
//chiedigli di inserire un numero da 1 a 5 
//genera un numero random da 1 a 5 (usando una funzione)

//Somma i numeri 
//determina se il risultato è pari o dispari
//capisci chi ha vinto 
//comunicalo in pagina

const placeUserToPrint = document.querySelector('.userData');
const placePcToPrint = document.querySelector('.pcData');
const placeSumToPrint = document.querySelector('.result');

let valueUserInput = prompt('Scegli pari o dispari [Pari/Dispari]').toLocaleLowerCase();
let valueUserOutput;

let valuePcInput;
let valuePcOutput;

let numberUserInput = parseInt(prompt('Inserisci un numero [1-5]'));

if (numberUserInput >= 1 && numberUserInput <= 5){
    console.log('numero inserito correttamente');
    if (valueUserInput == 'pari') {
        valueUserInput = 0
        valueUserOutput='pari'
        valuePcOutput = 'dispari'


    } else if( valueUserInput == 'dispari'){
        valueUserInput = 1
        valueUserOutput = 'dispari'
        valuePcOutput = 'pari'
    }
}else{
    console.log('hai inserito male il numero');
    numberUserInput = null;
    valueUserInput = null;

}
console.log(numberUserInput, valueUserInput, valuePcInput)

//creazione funzione che genera numero random da 1 a 5
let num;
function randomNumber() {
    num = Math.floor(Math.random()*5)+1;
    return num
}

let pcNumber = randomNumber();
console.log(pcNumber);

//Somma i numeri 
//determina se il risultato è pari o dispari
let sum;
let winner;
function sumAndEvenOrOdd(firstNumber, secondNumber){
    sum = firstNumber + secondNumber;
    let evenOrOdd = sum % 2;
    console.log(sum, evenOrOdd);
    if (evenOrOdd == 0){
        console.log('vince il pari');
        
        if (valueUserOutput == 'pari'){
            winner = `La somma' è un numero pari, <span>vince l'utente</span>`
        }else{
            winner = `La somma' è un numero pari, <span>vince il pc</span>`
        }
    }else{
        console.log('vince il dispari');
        winner = `La somma è un numero dispari, vince la scelta "dispari"`
        if (valueUserOutput == 'dispari'){
            winner = `La somma' è un numero dispari, <span>vince l'utente</span>`
        }else{
            winner = `La somma' è un numero dispari, <span>vince il pc</span>`
        }
    }
}

let resultEvenOdd = sumAndEvenOrOdd(numberUserInput, pcNumber)
//stampa risultati
//creazione messaggi
const userData = `L'utente ha scelto ${valueUserOutput}, ed il numero è ${numberUserInput} `
const pcData  = `Il pc ha scelto ${valuePcOutput}, ed il numero è ${pcNumber} `
const resultSum = `La somma dei numeri è: ${sum} <br>${winner}`

//stampa a schermo
placeUserToPrint.innerHTML = userData
placePcToPrint.innerHTML = pcData
placeSumToPrint.innerHTML = resultSum