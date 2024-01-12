import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

function createGallery(){
    galleryItems.forEach((item) =>{
        const liItem = document.createElement("li");
        liItem.classList.add("gallery__item");

        const link = document.createElement("a");
        link.classList.add("gallery__link");
        link.href = item.original;

        const image = document.createElement("img");
        image.classList.add("gallery__image");
        image.src = item.preview;
        image.alt = item.description;

        link.appendChild(image);
        liItem.appendChild(link);
        gallery.appendChild(liItem);
    });
}

createGallery();

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData : "alt",
    captionDelay : 250,
    captionPosition : "bottom",

 });



