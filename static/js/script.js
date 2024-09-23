// Qui scriviamo il codice JS

//let è una parola chiave che serve a diciarare delle variabili in JS
do {
    let firstName = prompt("Qual è il tuo nome?");
} while (firstName === null);

let punteggio;
punteggio === 0;

let ris1 = prompt("PRIMA DOMANDA: Qual è la capitale di Italia? ");
ris1 = ris1.toLowerCase().trim();
if(ris1 === "roma"){
    punteggio++;
}
else{
    alert("Hai sbagliato! La capitale di Italia è Roma");
}

let ris2 = prompt("SECONDA DOMANDA: Di che colore era il cavallo bianco di Napoleone? ");
ris2 = ris2.toLowerCase().trim();
if(ris2 === "bianco"){
    punteggio++;
}
else{
    alert("Hai sbagliato! Il cavallo bianco di Napoleone era biannco");
}

let ris3 = prompt("TERZA DOMANDA: Quale fiume passa per Roma? ");
ris3 = ris3.toLowerCase().trim();
if(ris3 === "tevere"){
    punteggio++;
}
else{
    alert("Hai sbagliato! Il fiume che passa per Roma è il  Tevere");
}

let ris4 = prompt("QUARTA DOMANDA: Dove abito? ");
ris4 = ris4.toLowerCase().trim();
if(ris4 === "palo"){
    punteggio++;
}
else{
    alert("Hai sbagliato! Io abito a Palo");
}

let ris5 = prompt("QUINTA DOMANDA: Dove si trova la Torre Eiffel? ");
ris5 = ris5.toLowerCase().trim();
if(ris5 === "francia"){
    punteggio++;
}
else{
    alert("Hai sbagliato! La Torre Eiffel si trova in Francia");
}

let ris6 = prompt("SESTA DOMANDA: Di che colore è una noce? ");
ris6 = ris6.toLowerCase().trim();
if(ris6 === "marrone"){
    punteggio++;
}
else{
    alert("Hai sbagliato! Una noce è marrone");
}

let ris7 = prompt("SETTIMA DOMANDA: Qual è il capoluogo della Puglia? ");
ris7 = ris7.toLowerCase().trim();
if(ris7 === "bari"){
    punteggio++;
}
else{
    alert("Hai sbagliato! Il capoluogo della Puglia è Bari");
}

alert("Complimenti! Il tuo punteggio finale è: " + punteggio);
console.log("La percentaule di risposte corrette è:  " + (punteggio/7)*100 + "%");
