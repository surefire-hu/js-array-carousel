// Array di percorsi delle immagini
const images = [
    '../img/01.webp',
    '../img/02.webp',
    '../img/03.webp',
    '../img/04.webp',
    '../img/05.webp'
];

const carouselContainer = document.getElementById('carousel-container');
let currentIndex = 0;

// Funzione per creare il carosello
function createCarousel() {
    for (let i = 0; i < images.length; i++) {//ciclo
        const img = document.createElement('img');//creare tag img 
        img.src = images[i];//percorso img in base all array
        img.alt = `Immagine ${i + 1}`; //alt dell'img
        img.className = `carousel-image ${i == 0 ? 'active' : ''}`; //o attiva o vuoto
        carouselContainer.appendChild(img);//img dentro in contenitore
    }

    const prevButton = document.createElement('button');//tag bottone 
    prevButton.className = 'carousel-button prev';//classe al bottone
    prevButton.textContent = '<';//testo del bottone
    prevButton.onclick = showPreviousImage;//funzione click
    carouselContainer.appendChild(prevButton);//prevButton dentro il contenitore

    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-button next';
    nextButton.textContent = '>';
    nextButton.onclick = showNextImage;
    carouselContainer.appendChild(nextButton);
}

// Funzione per mostrare l'immagine precedente
function showPreviousImage() {
    const carouselImages = document.querySelectorAll('.carousel-image');//seleziona tutti gli elementi del carousel e lo fa diventare un array
    carouselImages[currentIndex].classList.remove('active');//rimuove classe active dell'elemento attuale
    currentIndex = (currentIndex - 1 + images.length) % images.length;//seleziona elemento precedente
    carouselImages[currentIndex].classList.add('active');//abbina classe active
}

// Funzione per mostrare l'immagine successiva
function showNextImage() {
    const carouselImages = document.querySelectorAll('.carousel-image');
    carouselImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    carouselImages[currentIndex].classList.add('active');
}

createCarousel();