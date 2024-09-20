let items = [
    {name:"Remera", price: 20000, stock: 7},
    {name:"Buzo", price: 15000, stock: 12},
    {name:"Pantalon", price: 25000, stock: 4},
]

let itemsJSON = JSON.stringify(items)

localStorage.setItem("items", itemsJSON)

let itemGuardado = localStorage.getItem("items")

let itemArray = JSON.parse(itemGuardado)

console.log(itemArray)

items.sort((a,b)=>{
    if (a.price>b.price)
        return 1
    if (a.price<b.price)
        return -1
    return 0 
})

console.log(items)

let nombres = items.map(item => item.name)
console.log(nombres)

let precioTotal = items.reduce((total,item)=> total + item.price, 0)
console.log ("Sumatoria de productos: ",precioTotal)

document.addEventListener("DOMContentLoaded", function(){
    let boton = document.getElementById ("boton_inicio")
    let texto = document.getElementById ("titulo_inicio")
    let parrafo = document.querySelector("p")

    boton.addEventListener("click", function(){
        texto.textContent = "¡Ingresaste a la Tienda!"
        parrafo.textContent = "Muchas Gracias"
    })
})
