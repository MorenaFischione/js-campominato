/**
     *  Il computer deve generare 16 numeri casuali tra 1 e 100.
        I numeri non possono essere duplicati.
        In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
        sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
        Se il numero è presente nella lista dei numeri generati, la partita termina, 
        altrimenti si continua chiedendo all’utente un altro numero.  La partita termina quando il giocatore 
        inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
        Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
        l’utente ha inserito un numero consentito.
    * 
    */

    //  # PREPARATION
    //  1 - Creiamo un bell'array all'interno del quale inserire (poi) le bombe
    //  2 - Genero un numero randomico e lo inserisco all'interno dell'array di cui sopra ^, FINCHE' non arrivo a 16
    //  3 - Crea un array per ricordare i numeri (scelti) dall'utente
    // **** Creo una variable di appoggio per il punteggio

    // # GAMEPLAY
    // 1) Chiedere un numero all'utente
    // 2) Controllare che il numero non sia presente nell'array di bombe !!! ALTRIMENTI KABOOM
    // 3) Controllo se per caso lo aveva già scelto (è già presente nell'array dei numeri scelti dall'utente)
    // 4) Se il numero non è esplosivo e non è stato scelto, lo aggiungo nell'array dei numeri scelti
    //  

    // # ENDGAME
    // a. Stampiamo il messaggio di alert del gioco (se hai vinto o perso)
    // b. Stampiamo il punteggio del giocatore


    let listaBombe = [];
    let numeriScelti = [];
    let possibilita; 
    let bombe;
    let listaLivello = ["facile", "medio", "difficile"];


    let sceltaLivello = prompt("Scegli un livello tra quelli possibili: facile , medio , difficile");

    // finche il livello scelto è una stringa vuota oppure non è tra i livelli scelti
    while ( sceltaLivello.length == 0 || !listaLivello.includes(sceltaLivello.trim().toLowerCase()) ) {
        sceltaLivello = prompt("Hai inserito una difficoltà inesistente. Scegli un livello tra quelli possibili: facile, medio, difficile");
    }

    let listaTemporanea = controlloLivello(sceltaLivello);
    possibilita = listaTemporanea[0];
    bombe = listaTemporanea[1];

      
    switch (sceltaLivello) {
        case "facile":
        possibilita = 10; 
        bombe = 2;
        break;

        case "medio":
        possibilita = 10; 
        bombe = 4;
        break;

        case "difficile":
        possibilita = 10; 
        bombe = 6;
        break;

        default:
        possibilita = 10; 
        bombe = 2;
    }

    let livello = possibilita - bombe;
    



    // Creo un ciclo While per inserire 16 numeri randomici nell'array listaBombe se il numero generato
    // non è già presente.

    while (listaBombe.length < bombe ) {
        let num = getRandomNumber(1, possibilita);     
        if ( !listaBombe.includes(num) ) {
            listaBombe.push(num);
        }
    }
    console.log(listaBombe); 



    while ( numeriScelti.length < livello) { // finchè la lista dei numeri scelti contiene meno numeri di quelli richiesti 
        let numeroScelto = parseInt(prompt("Inserisci un numero da 1 a 100"));
        while ( !isNumeroValido(possibilita, 1, numeroScelto) || ( numeriScelti.includes(numeroScelto))) {
            // finchè il numero scelto dall'utente non è un numero, è compreso tra 1 e 100 e è incluso nella lista dei numeri scelti verifico 
            if ( (numeriScelti.includes(numeroScelto) == true) ) {  // se è un numero già presente
                numeroScelto = parseInt(prompt("Il numero inserito è già stato inserito. Inserisci un nuovo numero"));
            } else if ((numeroScelto > possibilita) || (numeroScelto < 1)) { // se è un numero fuori dall'intervallo
                numeroScelto = parseInt(prompt("Il numero inserito non è compreso tra 1 e ." + possibilita + " un numero"));
            } else { // in tutti gli atri casi (cioè non è un numero)
                numeroScelto = parseInt(prompt("Il numero inserito non valido. Inserisci un nuovo numero"));
            } 
        }
        if ( listaBombe.includes(numeroScelto) ) { // se l'utente ha scelto la bomba: ha perso.
            alert("Mi dispiace hai perso. Il tuo punteggio è: " + numeriScelti.length);
            numeriScelti.length = livello;
        } else { // altrimenti 
            numeriScelti.push(numeroScelto); // aggiungo il numero alla lista dei numeri scelti dall'utente e
            console.log(numeriScelti);
            if (numeriScelti.length == livello) { // se la lunghezza della lista dei numeri scelti dall'utente è uguale al livello: ha vinto.
                alert("Bravo. Hai vinto. Il tuo punteggio è: " + numeriScelti.length);
            }
        }
    }

    /* #######  Funzioni  ####### */

    //Creo funzione che genera un numero randomico
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    // Creo una funzione per controllare se il numero è valido (compreso nel rage tra numeroMin e numeroMax 
    // oppure non è un numero). 
    function isNumeroValido(numeroMax, numeroMin, numeroSceltoUtente){
        if ( isNaN(numeroSceltoUtente) || (numeroSceltoUtente > numeroMax) || (numeroSceltoUtente < numeroMin)) {
            return false;
        }
        return true;
    }


    // Creo una funzione che mi controlla il livello.

    function controlloLivello(livelloDeciso){
        switch (livelloDeciso) {
            case "facile":
            possibilita = 10; 
            bombe = 2;
            break;

            case "medio":
            possibilita = 10; 
            bombe = 4;
            break;

            case "difficile":
            possibilita = 10; 
            bombe = 6;
            break;

            default:
            possibilita = 10; 
            bombe = 2;
        }
        return [possibilita, bombe];
    }