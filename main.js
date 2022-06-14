// Ask the user to input the number of km they want to travel
const travelKms = parseInt(prompt("Indica quanti km vuoi percorrere (valore intero): "));
const userAge = parseInt(prompt("Inserisci (in numero) la tua età: "));

// Define the variabile to calculate the price of the ticket. It is defined as a global variable to be more accessible from other eventual features
let ticketPrice;

// Check if the inputs are valid numbers 
if (isNaN(travelKms) || isNaN(userAge)) {
    console.log("Impossibile calcolare prezzo poichè i dati non sono stati inseriti correttamente")

} else {

    // The base price of the ticket is equal to 0.21€ for each km
    ticketPrice = travelKms * 0.21;

    // Check if the userAge is < 18 so they will be eligible for the 20% discount or > 65 so they will be eligible for the 40% discount
    if (userAge < 18) {
        ticketPrice = ticketPrice * (1 - 0.2);
    
    } else if (userAge >= 65) {
        ticketPrice = ticketPrice * (1 - 0.4);
    
    }

    // Print the final tiket price to console.
    console.log(`Il prezzo del tuo biglietto è pari a: ${ticketPrice.toFixed(2)}€`)

}


// ! The toFixed(n) method rounds the number to the nth decimal but converts it to a string
// To preserve the number type use the formula Math.round((num + Number.EPSILON) * 100) / 100; where Number.EPSILON is a very small number added to ensure an accurate rounding.
// ticketPrice = Math.round((ticketPrice + Number.EPSILON) * 100) / 100;
// console.log(typeof ticketPrice);
// console.log(Number.EPSILON);

