/*
function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("remeras"))||[]
    if(memoria){
        const nuevoProducto = nuevoProductoParaMemoria(producto);
        localStorage.setItem("remeras",JSON.stringify([nuevoProducto]))
    } else{
        const productoExistente = memoria.findIndex(remera => remera.id == producto.id);
        const nuevaMemoria = memoria
        if(productoExistente === -1){
            nuevaMemoria.push(nuevoProductoParaMemoria(producto))    
        } else {
            nuevaMemoria[productoExistente].cantidad ++
        }
        localStorage.setItem("remeras",JSON.stringify(nuevaMemoria))
    }
}

function nuevoProductoParaMemoria(producto){
    const nuevoProducto = producto
    nuevoProducto.cantidad = 1
    return nuevoProducto
}


const contenedorCard = document.getElementById("container-productos");

// Crear las tarjetas de productos
function crearCardProductos(productos) {
    productos.forEach(producto => {
        const nuevaprenda = document.createElement("div");
        nuevaprenda.classList = "card-producto";
        nuevaprenda.innerHTML = `
            <img src=${producto.img}>
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito</button>
        `;
        contenedorCard.appendChild(nuevaprenda);

        // Agregar evento para agregar al carrito
        nuevaprenda.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto));
    });
}
*/
// Función para agregar productos al carrito y guardarlos en localStorage
function agregarAlCarrito(producto) {
    // Obtener los productos del localStorage (si no hay, se inicializa con un array vacío)
    const memoria = JSON.parse(localStorage.getItem("remeras")) || [];

    // Verificar si el producto ya está en el carrito
    const productoExistenteIndex = memoria.findIndex(remera => remera.id == producto.id);

    if (productoExistenteIndex === -1) {
        // Si el producto no está en el carrito, se agrega con cantidad 1
        const nuevoProducto = nuevoProductoParaMemoria(producto);
        memoria.push(nuevoProducto);
    } else {
        // Si el producto ya existe, incrementar su cantidad
        memoria[productoExistenteIndex].cantidad += 1;
    }

    // Actualizar el localStorage con el nuevo array
    localStorage.setItem("remeras", JSON.stringify(memoria));

    AvisoDeAgregado()
}

// Crear un nuevo objeto producto con cantidad inicial
function nuevoProductoParaMemoria(producto) {
    // Crear una copia del objeto producto para evitar modificar el original
    const nuevoProducto = { ...producto };
    nuevoProducto.cantidad = 1; // Establecer cantidad inicial en 1
    return nuevoProducto;
}

function AvisoDeAgregado(){
    Swal.fire({
        title: "Ítem agregado al carrito",
        icon: "success",
        timer: 1500
      });
}