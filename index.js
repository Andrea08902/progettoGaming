"use strict"
const prompt = require("prompt-sync")();

let giochi = []

/**
 * Creare un programma in JavaScript che gestisce una collezione di giochi. Il programma deve permettere all'utente di aggiungere nuovi giochi, visualizzare la lista dei giochi, rimuovere giochi dalla collezione, filtrare i giochi per piattaforma o genere e ordinare i giochi per anno di uscita o titolo. Utilizzare un array per memorizzare i giochi e implementare le funzionalità richieste attraverso funzioni separate.  
 */ 

/**
 * 
 * funzione che permette di aggiungere un gioco alla collezione con input da parte dell'utente
 * @param {string} titolo - titolo del gioco
 * @param {string} genere - genere del gioco
 * @param {string} piattaforma - piattaforma del gioco
 * @param {number} anno - anno di uscita del gioco
 * @return {void}
 */

function aggiungiGioco(){
    let titolo = prompt("Inserisci il titolo del gioco: ");
    let genere = prompt("Inserisci il genere del gioco: ");
    let piattaforma = prompt("Inserisci la piattaforma del gioco: ");
    let anno = prompt("Inserisci l'anno di uscita del gioco: ");
    let gioco = {titolo,genere,piattaforma,anno};
    giochi.push(gioco)

    console.log("Gioco aggiunto con successo!!!!")
}

/**
 * funzione che permette di mostrare la lista dei giochi presenti nella collezione
 * @return {void}
 */

function mostraGiochi(){
    if(giochi.length === 0){
        console.log("Nessun gioco presente nella collezione")
        return
    }

    giochi.forEach((g,i) =>{
        console.log(`${i} - ${g.titolo} - (${g.piattaforma})`)
    })
}

/**
 * funzione che permette di rimuovere un gioco dalla collezione tramite l'indice del gioco da rimuovere
 * @param {number} indice - indice del gioco da rimuovere
 * @return {void}
 */ 

function rimuoviGioco(){
    mostraGiochi()

    const indice = prompt("Inserisci gioco da rimuovere: ")

    if(indice>=0 && indice < giochi.length){
        giochi.splice(indice,1)
        console.log("Gioco rimosso con successo!!!")
    }else{
        console.log("Indice non valido!!!")
    }
}

/**
 * funzione che permette di filtrare i giochi per piattaforma o genere
 * @param {string} tipo - tipo di filtro (piattaforma o genere)
 * @param {string} valore - valore del filtro
 * @return {void}
 */

function filtraGiochi(){
    const tipo = prompt("Filtra per (piattaforma/genere): ")
    const valore = prompt("Valore: ").toLowerCase()

    const risultati = giochi.filter(g=> g[tipo].toLowerCase() === valore)

    console.log(risultati)
}

/**
 *  funzione che permette di ordinare i giochi per anno di uscita o titolo
 * @param {string} criterio - criterio di ordinamento (anno o titolo)
 * @return {void}
 */

function ordinGiochi(){
    const criterio = prompt("Ordina per (anno/titolo): ")

    if(criterio === "titolo"){
        giochi.sort((a,b) => a.titolo.localeCompare(b.titolo))
    }else if(criterio === "anno"){
        giochi.sort((a,b)=>a.anno - b.anno)
    }

    mostraGiochi()
}