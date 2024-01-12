import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//Functia pentru crearea si randarea galeriei

const gallery = document.querySelector("ul.gallery");

function createGallery(){

    galleryItems.forEach((item) => {
        const liItem = document.createElement("li");
        liItem.classList.add("gallery__item");

        const link = document.createElement("a");
        link.classList.add("gallery__link");
        link.href = item.original;

        const image = document.createElement("img");
        image.classList.add("gallery__image");
        image.src = item.preview;
        image.alt = item.description;
        image.setAttribute("data-source", item.original);

        //Adaugam elementele create in DOM

        link.appendChild(image);
        liItem.appendChild(link);
        gallery.appendChild(liItem);
    });
}

createGallery();

import basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/+esm";
const instance = basicLightbox.create(` <img> `),
               modalImage = instance.element().querySelector("img");
               
    gallery.addEventListener("click", (ev) => {
      ev.preventDefault();
      modalImage.src = ev.target.dataset.source; //practic obtinem url ul 
      instance.show();
    });

    gallery.addEventListener("keydown", event => {
        if(event.code === "Escape" && instance.visible()){
            event.preventDefault();
            instance.close();
        }
    });