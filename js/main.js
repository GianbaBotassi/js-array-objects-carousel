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

// Creo array con immagini richieste
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

// Creo costante per collegare items container
const elContainer = document.getElementById("items_container");

// Creo costante per collegare items thumbnail container
const elThumbnailContainer = document.getElementById("thumbnail_container");


// Ciclo array oggetti con forEach
images.forEach(immagine => {

    // Creo div per immagini
    elContainer.innerHTML += `<div class="item">
    <img src="${immagine.image}">
    <div class="text">
        <h2>${immagine.title}</h2>
        <p>${immagine.text}</p>
    </div>
    </div>`;

    // Creo div per thumbnail immagini
    elThumbnailContainer.innerHTML += `<div class="thumb">
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

// Dichiaro e assegno costante al bottone in basso nel DOM
const botButton = document.getElementById("bottom_button");

// Set intervallo di 3 secondi per far cambiare posizione array
setInterval(() => {
    divList[index].classList.remove("active");
    thumbnailList[index].classList.remove("brightness");

        if(index === divList.length -1){
            index = 0;
        }else{

        index++;
        }

        divList[index].classList.add("active");
        thumbnailList[index].classList.add("brightness");  

},3000)

// Creo funzione con bottone per traslare immagini dall'alto verso il basso
botButton.addEventListener("click",
    function(){

    // Rimuovo la classe active e brightness alla prima posizione dell'array
    divList[index].classList.remove("active");
    thumbnailList[index].classList.remove("brightness");

        // Se index è uguale a 4 riparte da 0
        if(index === divList.length -1){
            index = 0;
        }else{

        // Sposto di 1 la posizione array
        index++;

        }
        // Aggiungo la classe active e brightness al successivo elemento
        divList[index].classList.add("active");
        thumbnailList[index].classList.add("brightness");                   
    }
)

// Dichiaro e assegno costante al bottone in alto nel DOM
const topButton = document.getElementById("top_button");

// Creo funzione con bottone per traslare immagini dal basso verso l'alto
topButton.addEventListener("click",
    function(){

            // Rimuovo la classe active e brightness alla prima posizione dell'array
            divList[index].classList.remove("active");
            thumbnailList[index].classList.remove("brightness");

            // Se index è uguale a 0 riparte da 4
            if (index === 0) {
                index = divList.length - 1;
            }else{
            // Sposto di 1 la posizione array
            index--;
            }

            // Aggiungo la classe active e brightness al successivo elemento
            divList[index].classList.add("active");
            thumbnailList[index].classList.add("brightness");

        }
)

