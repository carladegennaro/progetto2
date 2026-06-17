SUPSI 2026  
Corso d’interaction design, CV429.01  
Docenti: A. Gysin, G. Profeta  

Progetto 2: Un piccolo passo per un uomo, un grande balzo per
l’umanità

# Nasa 70
Autore: Carla De Gennaro \
[Nasa 70](https://carladegennaro.github.io/progetto2/index.html)


## Introduzione e tema
L'obiettivo del sito è raccogliere e mostrare in un unico spazio digitale i diversi progetti e siti web nati appositamente per festeggiare i 70 anni della conquista dello spazio. Ciascuna di queste iniziative speciali approfondisce un aspetto o una sfumatura specifica legata alla storia della NASA e alle sue attività, offrendo punti di vista unici su questo importante traguardo.
I contenuti consistono in una lista dettagliata di tali lavori. Per ogni progetto vengono mostrate le informazioni fondamentali: il titolo, chi lo ha realizzato, l'anno di creazione, un breve testo descrittivo e un'immagine di anteprima, così da offrire una panoramica immediata e semplice da consultare.


## Riferimenti progettuali
Il layout e la logica visiva del progetto nascono dall'estetica dei database e dei fogli di calcolo. Lo spunto principale per la visualizzazione dei progetti deriva dall'archivio di Viso Haus, da cui è stata ripresa l'idea di una lista di elementi semplice e rigorosa che ricorda la struttura geometrica di una tabella Excel. A questa impostazione per la visualizzazione dei dati si unisce l'ispirazione tratta dal sito di Studio Herrström per la definizione della struttura superiore della pagina. Da questo secondo riferimento è stata infatti ripresa l'architettura del layout che separa la parte introduttiva del sito dalla sezione dedicata ai filtri di navigazione.


## Design dell’interfaccia e modalità di interazione
L’interfaccia del sito si sviluppa verticalmente attraverso un layout lineare e gerarchizzato, progettato per guidare l'utente in modo naturale dall'introduzione fino al cuore dei contenuti. La parte superiore della pagina si apre con un ampio spazio d'introduzione dominato dal logo NASA 70 e dalla celebre citazione di Neil Armstrong, che funge da titolo per la descrizione del sito stesso. Accanto a questa introduzione si trova l'area degli strumenti, che comprende una barra di ricerca e il sistema di filtraggio con le varie categorie che suddividono i progetti a livello macro.
Subito sotto questa sezione superiore si sviluppa la grande lista d'archivio ispirata al formato Excel, organizzata su 8 colonne che distribuiscono le informazioni in modo geometrico, mostrando dettagli quali il nome del progetto, l'autore, la data di creazione, la descrizione e l'immagine correlata. Le interazioni si rivelano attraverso micro-animazioni puntuali: il passaggio del mousehover sul logo fa apparire delle piccole stelle che richiamano l'atmosfera celebrativa dell'anniversario, mentre il focus sui vari progetti della lista viene evidenziato dall'ispessimento del filetto della riga selezionata. Infine, l'esperienza di navigazione è supportata dallo scorrimento della pagina: effettuando lo scroll verso il basso, compare una freccia per il ritorno rapido all'inizio della lista, la quale si ingrandisce progressivamente per facilitare il clic e migliorare l'usabilità complessiva del sito.


https://github.com/user-attachments/assets/21c0c238-976c-4329-9b67-9aa546798c41

<img width="1512" height="236" alt="0_screen3" src="https://github.com/user-attachments/assets/d984daa3-2bb2-4307-9c80-561e62a14cf1" />
<img width="764" height="214" alt="0_screen2" src="https://github.com/user-attachments/assets/96cfdef9-b144-409d-975a-8db702ccd19a" />
<img width="1512" height="858" alt="0_screen1" src="https://github.com/user-attachments/assets/3e6b42a8-36cc-4d95-963d-4be04024f096" />


## Tecnologia usata
La gestione e il recupero dei dati avvengono in modo dinamico attraverso l'integrazione di un'API locale basata su un file in formato JSON. Questo file contiene tutti i metadati dettagliati dei singoli progetti (nomi, autori, date, descrizioni e percorsi delle immagini correlati).

``` JavaScript
//Interazione stelle
         logoWrapper.onmouseenter = () => {
            starInterval = setInterval(() => {
                for (let i = 0; i < 2; i++) {
                    const star = document.createElement('div');
                    star.className = 'star';
                    
                    const size = Math.random() * 8 + 8; 
                    
                    star.style.width = `${size}px`;
                    star.style.height = `${size}px`;
                    
                    const x = Math.random() * document.body.clientWidth;
                    const y = Math.random() * document.body.clientHeight;
                    
                    star.style.left = `${x}px`;
                    star.style.top = `${y}px`;
                    
                    document.body.appendChild(star);
                    
                    setTimeout(() => star.remove(), 800);
                }
            }, 2);
        };
```


## Target e contesto d’uso
Per questo target, l'esperienza ideale si sviluppa attraverso una consultazione da postazione desktop, in cui muoversi liberamente e con i propri tempi. L’interfaccia trasforma la navigazione in un percorso molto intuitivo: l'utente ha la possibilità di sfogliare l'archivio in modo spontaneo, lasciandosi guidare dalle anteprime visive per scoprire nuovi progetti quasi per caso, senza dover necessariamente cercare qualcosa di specifico
