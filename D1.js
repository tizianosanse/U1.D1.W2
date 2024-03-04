/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 
/* SCRIVI QUI LA TUA RISPOSTA */
// 1 stringhe: quando abbiamo let nome = 'Tiziano'   -  il datatype stringa deve avere degli apici (apice='' o "")
// 2 numero : quando abbiamo let numero = 50          -    non deve avere apici, per evitare di sommare stringhe (let numero = 50+'50'=5050)
//3 boolean: definisce se una variabile è vera o falsa,quindi abbiamo let driveCar = true  - non ha apici.
// 4 null,undefined  : molto simili , null assegna un valore nullo quindi dice che la variabile è comppletamente vuota   e undefined invece assegna un valore non definito.
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//let myName = "Tiziano";
//console.log(myName);      -  qui ho commentato  per l esercizio 5 , che se no mi da error
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 12;
let number2 = 20;
let number3 = number1 + number2;
console.log(number3);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number0 = 12; // qui assegno valore numerico effettivo
let number00 = "12"; //qui assegno solo valore di stringa
console.log(number0, number00);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
const myName = "Sanseverino";
// myName = "Tiziano";
console.log(myName);
/* SCRIVI QUI LA TUA RISlet myName = "Tiziano";POSTA */
//let myName = "Tiziano";  - mi da sempre errore , comunque il concetto è che una const non puo cambiare valore.
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
let y = x - 4;
console.log(y);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "jhon";
let name2 = "Jhon";
console.log(name1 === name2);
console.log(name1.toLowerCase === name2.toLowerCase);
