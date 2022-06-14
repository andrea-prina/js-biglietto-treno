// Realizziamo un programma che dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//      il prezzo del biglietto è definito in base ai km (0.21 € al km)
//      va applicato uno sconto del 20% per i minorenni
//      va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale andrà mostrato in forma umana in console (con massimo due decimali, per indicare centesimi sul prezzo).

// Ask the user to input the number of km they want to travel
const travelKms = parseInt(prompt("Indica quanti km vuoi percorrere: "));
const userAge = parseInt(prompt("Inserisci (in numero) la tua età: "));

console.log(travelKms, typeof travelKms, userAge, typeof userAge);