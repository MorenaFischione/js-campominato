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
    let possibilita = 10;
    let trovato = true;
    let punteggio= 0;

    //Creo funzione che genera un numero randomico
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Creo un ciclo While per inserire 16 numeri randomici nell'array listaBombe se il numero generato
    // non è già presente.

    while (listaBombe.length < 16 ) {
        let num = getRandomNumber(1, 100);     
        if ( !listaBombe.includes(num) ) {
            listaBombe.push(num);
        }
    }
    console.log(listaBombe);  
    
    
    let i = 0;
    while (( i < possibilita) && (trovato == true)) {
        let numeroScelto = parseInt(prompt("Inserisci un numero tra 1 e 100"));
        console.log(numeroScelto);
        for ( let x = 0; x < listaBombe.length; x++) {
            if (numeroScelto == listaBombe[x]) {
                numeriScelti.push(numeroScelto);
                console.log(numeriScelti);
                
            } 
            // if (trovato == true) {
            //     console.log("partita finita");
            //   }
        }
        i++;
    }

    




    



    

    

    // 4 chiedo all'utente con prompt di inserire un numero 
    // 5 Controllare che il numeroScelto non sia presente nell'array di bombe !!! ALTRIMENTI KABOOM
    // 6 Controllo se per caso lo aveva già scelto (è già presente nell'array dei numeri scelti dall'utente)

    
    
    
    


   