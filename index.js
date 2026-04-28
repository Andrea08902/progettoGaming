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