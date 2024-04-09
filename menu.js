const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

const btnSwicth = document.querySelector('#switch');

btnSwicth.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwicth.classList.toggle('active');
});