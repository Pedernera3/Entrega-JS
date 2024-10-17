const contenedorCard = document.getElementById("productos-container")

function crearCardProductos(productos){
    productos.forEach(producto => {
        const nuevaprenda = document.createElement("div")
        nuevaprenda.classList = "card-producto"
        nuevaprenda.innerHTML = `
            <img src=${producto.img}>
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito</button>
        `
        contenedorCard.appendChild(nuevaprenda)
        nuevaprenda.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))
    });
}
crearCardProductos(remeras)
