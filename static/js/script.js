function sanitize(stringa){
    return stringa.toLowerCase().trim();
}

function calcoloPercentuale(punteggio){
    let percen = (punteggio/7)*100;
    return percen;
}

do {
    let firstName = prompt("Qual è il tuo nome?");
} while (firstName === null);

let punteggio;
punteggio === 0;

let ris1 = prompt("PRIMA DOMANDA: Qual è la capitale di Italia? ");
ris1 = sanitaze(ris1);
if(ris1 === "roma"){
    punteggio++;
}
else{
    alert("Hai sbagliato! La capitale di Italia è Roma");
}

let ris2 = prompt("SECONDA DOMANDA: Di che colore era il cavallo bianco di Napoleone? ");
ris2 = sanitaze(ris2);
if(ris2 === "bianco"){
    punteggio++;
}
else{
    alert("Hai sbagliato! Il cavallo bianco di Napoleone era biannco");
}

let ris3 = prompt("TERZA DOMANDA: Quale fiume passa per Roma? ");
ris3 = sanitaze(ris3);
if(ris3 === "tevere"){
    punteggio++;
}
else{
    alert("Hai sbagliato! Il fiume che passa per Roma è il  Tevere");
}

let ris4 = prompt("QUARTA DOMANDA: Dove abito? ");
ris4 = sanitaze(ris4);
if(ris4 === "palo"){
    punteggio++;
}
else{
    alert("Hai sbagliato! Io abito a Palo");
}

let ris5 = prompt("QUINTA DOMANDA: Dove si trova la Torre Eiffel? ");
ris5 = sanitaze(ris5);
if(ris5 === "francia"){
    punteggio++;
}
else{
    alert("Hai sbagliato! La Torre Eiffel si trova in Francia");
}

let ris6 = prompt("SESTA DOMANDA: Di che colore è una noce? ");
ris6 = sanitaze(ris6);
if(ris6 === "marrone"){
    punteggio++;
}
else{
    alert("Hai sbagliato! Una noce è marrone");
}

let ris7 = prompt("SETTIMA DOMANDA: Qual è il capoluogo della Puglia? ");
ris7 = sanitaze(ris7);
if(ris7 === "bari"){
    punteggio++;
}
else{
    alert("Hai sbagliato! Il capoluogo della Puglia è Bari");
}

alert("Complimenti! Il tuo punteggio finale è: " + punteggio);
let percentuale = calcoloPercentuale(punteggio);
console.log("La percentaule di risposte corrette è:  " + percentuale + "%");