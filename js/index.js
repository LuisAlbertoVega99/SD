import hamburgerMenu from "./hamburger.js";

document.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".botonhamburger",".header",".header a");
})

const card1 = document.querySelector('.cardview1');
const card2 = document.querySelector('.cardview2');
const card3 = document.querySelector('.cardview3');

const cargarImagen = (entradas,observador) =>{
    entradas.forEach(element => {
        if(element.isIntersecting){
            element.target.classList.add('visible');
        }
        else{
            element.target.classList.remove('visible');
        }

    });
}

const observador = new IntersectionObserver(cargarImagen,{
    root:null,
    rootMargin: '500px 0px 0px 0px',
    threshold: 1,

});

observador.observe(card1);
observador.observe(card2);
observador.observe(card3);