let nombre = prompt ("Ingresa tu nombre")
let apellido = prompt ("Ingresa tu apellido")

let nombrecompleto = nombre + " " + apellido

let consulta = prompt ("Desea comprar una prenda? (SI/NO)")

if (consulta == "SI") {
    console.log ("Bienvenido a la tienda", nombrecompleto)
} else {
    console.warn ("Hasta luego", nombrecompleto)
}

let entrada1 = prompt("¿Que producto busca? (remeras/buzos/pantalones) ")

switch (entrada1){
    case "remeras":
        console.log ("Este es el catalogo de remeras")
            let catalogoremeras = [
        {
        nombre: "Remera Azul",
        precio: 15000,
        talles: ["S", "M", "L", "XL"],
        },
        {
        nombre: "Remera Negro",
        precio: 15000,
        talles: ["M", "L", "XL"],
        },
        {
        nombre: "Remera Rojo",
        precio: 15000,
        talles: ["S", "M"],
        }
        
        ]
        for (const producto of catalogoremeras){
         console.log(producto)
        }

        break
    case "buzos":
        console.log ("Este es el catalogo de buzos")
        let catalogobuzos = [
        {
        nombre: "Buzo Azul",
        precio: 30000,
        talles: ["S", "M", "L"],
        },
        {
        nombre: "Buzo Negro",
        precio: 30000,
        talles: ["S", "M", "L"],
        },
        {
        nombre: "Buzo Rojo",
        precio: 30000,
        talles: ["S", "M", "L"],
        }
        ]
        for (const producto of catalogobuzos){
         console.log(producto)
        }
        break
    case "pantalones":
        console.log ("Este es el catalogo de pantalones")
        let catalogopantalones = [
        {
        nombre: "Pantalon Azul",
        precio: 40000,
        talles: ["S", "M", "L"],
        },
        {
        nombre: "Pantalón Negro",
        precio: 40000,
        talles: ["S", "M", "L"],
        },
        {
        nombre: "Pantalon Rojo",
        precio: 40000,
        talles: ["S", "M", "L"],
        }
        ]
        for (const producto of catalogopantalones){
         console.log(producto)
        }
        break
    default:
        alert("No elegió ninguna opción valida")        
}

function agregaritem (item,precioitem){
    console.log ("Su item seleccionado es " +item+ " y su precio es de " +precioitem+" pesos SIN ENVIO")
}

agregaritem ("remera azul", 15000)

let resultado = 0

function sumarprecio(precioA, precioB) {
    resultado= precioA + precioB
}
    
function mostrarprecio(mensaje) {
    console.log("Total del precio "+mensaje)
}

sumarprecio (15000,3000)
mostrarprecio (resultado)
