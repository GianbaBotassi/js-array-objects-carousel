// Creo array con immagini richieste
const imgList = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]

// Creo costante per collegare items container
const elContainer = document.getElementById("items_container");

// Creo costante per collegare items thumbnail container
const elThumbnailContainer = document.getElementById("thumbnail_container");

// Creo ciclo per caricare tutte le immagini dell'array e thumbnail
for(let i = 0; i < 5; i++){

    // Innesto nel container una stringa backtick che si ripeta per le immagini
    elContainer.innerHTML += `<div class="item">
                                <img src="${imgList[i]}">
                            </div>`;

     // Innesto nel container una stringa backtick che si ripeta per le THUMBNAIL
    elThumbnailContainer.innerHTML += `<div class="thumb">
                                    <img src="${imgList[i]}">
                                    </div>`;

}

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
        // Se la posizione dell'array imgList è inferiore alla sua lunghezza(5)
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

