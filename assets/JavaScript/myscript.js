/* DESCRIZIONE:

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

-   il prezzo del biglietto è definito in base ai km (0.21 € al km)
-   va applicato uno sconto del 20% per i minorenni
-   va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS.

*/

// Chiedere al passeggero quanti km vuole percorrere e scrivili nella console dell'Inspector
let kmDaPercorrere = Number(prompt("Quanti km vuoi percorrere?"));
console.log (kmDaPercorrere);

// Chiedere l'età del passeggero e scrivili nella console dell'Inspector
let userAge = Number(prompt("Quanti anni hai?"));
console.log (userAge);

// Il prezzo da scoprire del biglietto dipende dai km da percorsi * il prezzo standard del biglietto (0.21) senza scontistiche
let ticketPrice = (kmDaPercorrere * 0.21).toFixed(2);
console.log(ticketPrice);

// Scontistica convertita in valore decimale
let Discount20 = ticketPrice / 100 * 20;
let Discount40 = ticketPrice / 100 * 40;

// Prezzo del biglietto con scontistiche 
let totDiscount20 = (ticketPrice - Discount20).toFixed(2);
let totDiscount40 = (ticketPrice - Discount40).toFixed(2);

// Verifico le condizioni in base all'età dei passeggeri
if(userAge < 18) {
    console.log("Il tuo sconto è del 20%." + " " + "Il prezzo del biglietto è di" + " " + totDiscount20);

    document.querySelector("div").innerHTML = "Il tuo sconto è del 20%." + " " + "Il prezzo del biglietto è di €" + " " + totDiscount20;

} else if(userAge > 65) {
    console.log("Il tuo sconto è del 40%." + " " + "Il prezzo del biglietto è di €" + " " + totDiscount40);

    document.querySelector("div").innerHTML = "Il tuo sconto è del 40%." + " " + "Il prezzo del biglietto è di €" + " " + totDiscount40;

} else {
   console.log(ticketPrice);

   document.querySelector("div").innerHTML = "Spiacenti non hai nessuno sconto." + " " + "Il prezzo del biglietto è di €" + " " + ticketPrice;
}



























