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

    AvisoDeAgregado()
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