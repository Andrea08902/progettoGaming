const prompt = require("prompt-sync")();
const d = require("./index")

/**
 * funzione che mostra un menu con le opzioni disponibili e permette all'utente di scegliere quale funzionalità utilizzare. Il menu deve essere visualizzato finché l'utente non decide di uscire dal programma.
 * @return {void}
 */

function main(){
    let scelta 

    do{
            console.log("-----MENU-----")
            console.log("1 - Aggiungi gioco")
            console.log("2 - Mostra giochi")
            console.log("3 - Rimuovi gioco")
            console.log("4 - Filtra giochi")
            console.log("5 - Ordina giochi")
            console.log("0 - Esci")

            scelta = prompt("scelta: ")

            switch(scelta){
                case  "1":
                    d.aggiungiGioco()
                    break;
                case "2":
                    d.mostraGiochi()
                    break;  
                case "3":
                    d.rimuoviGioco()
                    break;
                case "4":
                    d.filtraGiochi()
                    break;  
                case "5":
                    d.ordinGiochi()
                    break;  
            }
    }while(scelta !== "0")
}

main()