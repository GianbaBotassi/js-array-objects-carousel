// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce verso sopra e sotto, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello.
// Ovvero se l’immagine attiva è la prima e l’utente clicca la freccia verso sopra, l’immagine che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sotto.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

// Array dato da esercizio
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Collego da DOM elemento container
const elContainer = document.getElementById("items_container");

// Collego da DOM elemento container Thumbnail
const elThumbnailContainer = document.getElementById("thumbnail_container");


// Ciclo array oggetti con forEach
images.forEach(immagine => {

    // Creo div per immagini
    elContainer.innerHTML +=    `<div class="item">
                                    <img src="${immagine.image}">
                                    <div class="text">
                                        <h2>${immagine.title}</h2>
                                        <p>${immagine.text}</p>
                                    </div>
                                </div>`;

    // Creo div per thumbnail immagini
    elThumbnailContainer.innerHTML +=   `<div class="thumb">
                                            <img src="${immagine.image}">
                                        </div>`;
})

// Creo array con tutti i div creati
const divList = document.getElementsByClassName("item");

// Creo array con tutti i div thumbnail
const thumbnailList = document.getElementsByClassName("thumb");

// Creo posizione nell'array div creati
let index = 0;

// Appongo classe active e brightness a primo div
divList[index].classList.add("active");
thumbnailList[index].classList.add("brightness");


/******************** ZONA BOTTONI  ***************************/

// Dichiaro e assegno costante al bottone in basso nel DOM
const elBotButton = document.getElementById("bottom_button");

// Creo funzione con bottone per traslare immagini dall'alto verso il basso
elBotButton.addEventListener("click",switchBottom);

// Dichiaro e assegno costante al bottone in alto nel DOM
const elTopButton = document.getElementById("top_button");

// Creo funzione con bottone per traslare immagini dal basso verso l'alto
elTopButton.addEventListener("click",switchTop);  


/******************** ZONA BOTTONI PER SET INTERVAL  ***************************/

// Set intervallo di 3 secondi per far cambiare posizione array
let timer = setInterval(switchBottom,3000);

// Assegno bottone per stoppare setinterval e funzione clearinterval
const elStopButton = document.getElementById('stop-time');
elStopButton.addEventListener('click', ()=> clearInterval(timer));

// Assegno bottone per ricominciare seinterval e funzione setinterval
const elPlayButton = document.getElementById('play-time');
elPlayButton.addEventListener('click', ()=> {
    clearInterval(timer);
    timer = setInterval(switchBottom,3000);
});

// Assegno bottone per revertare seinterval e funzione setinterval al contrario
const elRevertButton = document.getElementById('revert-time');
elRevertButton.addEventListener('click', ()=> {
    clearInterval(timer);
    timer = setInterval(switchTop,3000)
});

/***********************************FUNCTIONS ****************************/

// Funzione per switchare in BASSO l'index dell'array
function switchBottom(){
    divList[index].classList.remove("active");
    thumbnailList[index].classList.remove("brightness");

    if(index === divList.length -1){
        index = 0;
    }else{

    index++;
    }

    divList[index].classList.add("active");
    thumbnailList[index].classList.add("brightness");      
}

// Funzione per switchare in ALTO l'index dell'array
function switchTop(){

    divList[index].classList.remove("active");
    thumbnailList[index].classList.remove("brightness");

    if (index === 0) {
        index = divList.length - 1;
    }else{
    index--;
    }

    divList[index].classList.add("active");
    thumbnailList[index].classList.add("brightness");        

    }

