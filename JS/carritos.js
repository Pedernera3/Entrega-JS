const contenedorCard = document.getElementById("productos-container")

function crearCardProductos(){
    const productos = JSON.parse(localStorage.getItem("remeras"))
    if(productos && productos.length > 0){
        productos.forEach(producto => {
            const nuevaprenda = document.createElement("div")
            nuevaprenda.classList = "card-carrito"
            nuevaprenda.innerHTML = `
                <img src=${producto.img}>
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <div>
                    <button>-</button>
                    <span class="cantidad">0</span>
                    <button>+</button>
                </div>
            `
            contenedorCard.appendChild(nuevaprenda)
            nuevaprenda.getElementsByTagName("button")[1].addEventListener("click",()=> agregarAlCarrito(producto))
        });
    }
}
crearCardProductos()
