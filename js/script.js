const contenedorCard = document.getElementById("productos-container");

async function obtenerProductos() {
    try {
        const response = await fetch('../stock.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

async function crearCardProductos(categoria = 'remeras'){
    const productos = await obtenerProductos();
    if(productos && productos[categoria]){
        productos[categoria].forEach(producto => {
            const nuevaprenda = document.createElement("div");
            nuevaprenda.classList = "card-producto";
            nuevaprenda.innerHTML = `
                <img src=${producto.img}>
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <button>Agregar al carrito</button>
            `;
            contenedorCard.appendChild(nuevaprenda);
            nuevaprenda.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto));
        });
    }
}

function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("remeras")) || [];
    const productoExistenteIndex = memoria.findIndex(remera => remera.id == producto.id);

    if (productoExistenteIndex === -1) {
        const nuevoProducto = nuevoProductoParaMemoria(producto);
        memoria.push(nuevoProducto);
    } else {
        memoria[productoExistenteIndex].cantidad += 1;
    }

    localStorage.setItem("remeras", JSON.stringify(memoria));
    AvisoDeAgregado();
}

function nuevoProductoParaMemoria(producto) {
    const nuevoProducto = { ...producto };
    nuevoProducto.cantidad = 1; 
    return nuevoProducto;
}

function AvisoDeAgregado(){
    Swal.fire({
        title: "Ítem agregado al carrito",
        icon: "success",
        timer: 1500
    });
}

function crearCardProductosCarrito(){
    const productos = JSON.parse(localStorage.getItem("remeras"));
    const contenedorCarrito = document.getElementById("productos-container");
    
    if(productos && productos.length > 0){
        contenedorCarrito.innerHTML = ''; 
        productos.forEach(producto => {
            const nuevaprenda = document.createElement("div");
            nuevaprenda.classList = "card-carrito";
            nuevaprenda.innerHTML = `
                <img src=${producto.img}>
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <div>
                    <button class="restar">-</button>
                    <span class="cantidad">${producto.cantidad}</span>
                    <button class="sumar">+</button>
                </div>
            `;
            contenedorCarrito.appendChild(nuevaprenda);
            
            nuevaprenda.querySelector(".sumar").addEventListener("click", () => modificarCantidad(producto.id, 1));
            nuevaprenda.querySelector(".restar").addEventListener("click", () => modificarCantidad(producto.id, -1));
        });
        actualizarTotales();
    } else {
        contenedorCarrito.innerHTML = '<p>No hay productos en el carrito</p>';
    }
}

function modificarCantidad(id, cambio) {
    let productos = JSON.parse(localStorage.getItem("remeras"));
    const index = productos.findIndex(p => p.id === id);
    
    if (index !== -1) {
        productos[index].cantidad += cambio;
        if (productos[index].cantidad <= 0) {
            productos = productos.filter(p => p.id !== id);
        }
        localStorage.setItem("remeras", JSON.stringify(productos));
        crearCardProductosCarrito();
    }
}

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("remeras")) || [];
    const totalUnidades = productos.reduce((total, producto) => total + producto.cantidad, 0);
    const totalPrecio = productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    
    document.getElementById("unidades").textContent = totalUnidades;
    document.getElementById("precio").textContent = totalPrecio.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (path.includes('productos.html')) {
        crearCardProductos('remeras');  
    } else if (path.includes('carrito.html')) {
        crearCardProductosCarrito();
    }
});