const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Laptop", desc: "16GB RAM", price: 400000, img: "img/laptop.jpg" },
    { titulo: "Mouse", desc: "Inalámbrico", price: 120000, img: "img/mouse.jpg" },
    { titulo: "Teclado", desc: "Inalámbrico RGB", price: 180000, img: "img/teclado.jpg" },
    { titulo: "Monitor", desc: "Procesador: Intel Core i9-14S444", price: 3000000, img: "img/monitor.jpg" },
    { titulo: "Audifonos", desc: "Inalámbrico", price: 550000, img: "img/audifonos.jpg" },
];

productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".price").textContent = p.price;
    clon.querySelector("img").src = p.img;
    clon.querySelector("img").alt = p.titulo;
    clon.querySelector(".price").textContent = p.price.toLocaleString("Es-Co")
    contenedor.appendChild(clon);
});
