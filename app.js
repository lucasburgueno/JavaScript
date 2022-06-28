class pelicula{
        constructor(nombre,minutos,genero) {
            this.nombre=nombre
            this.minutos=minutos
            this.gnero=genero
    }
}
class producto{
    constructor(id,nombre,precio,imagen) {
        this.id=id
        this.nombre=nombre
        this.precio=precio
        this.imagen=imagen
        
    }
}
const peliculas=[
    new pelicula("cadaver exiquisito",88,"suspenso"),
    new pelicula("dr strange",126,"accion"),
    new pelicula("gemelo siniestro",109,"terror"),
    new pelicula("jurassic world dominio",147,"aventuras"),
    new pelicula("lightyear",100,"animacion"),
    new pelicula("sonic 2",122,"animacion"),
]

const productosContainer = document.querySelector("#contenedor-de-productos")
const carritoContenedor=document.querySelector("#carrito-contenedor")
const contadorCarrito= document.querySelector("#contadorCarrito")
const precioTotal = document.querySelector("#precio-total")
const btnVaciar = document.querySelector("#vaciar-carrito")
const carrito=[]

listaProductos.forEach((item)=>{
    const div=document.createElement("div")
    div.classList.add("producto")

    div.innerHTML=` 
                    <img src="${item.imagen}" alt="balde de pochoclos">
                    <h3>${item.nombre}</h3>
                    <p class="precio-producto" >Precio: $${item.precio}</p>
                    <button onclick="agregarAlCarrito(${item.id})" class="boton-agregar">agregar</button>
    `
    productosContainer.append(div)
})


const agregarAlCarrito =(id)=>{
    const item = listaProductos.find((prod)=> prod.id===id)
    carrito.push(item)
    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()

}
const removerDelCarrito =(id)=>{
    const item= carrito.find ((producto)=> producto.id===id)
    const indice= carrito.indexOf(item)
    carrito.splice(indice,1)
    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () =>{
    carrito.length= 0

    renderCarrito()
    renderCantidad()
    renderTotal()
}

btnVaciar.addEventListener("click", vaciarCarrito);

const renderCarrito = () =>{
    carritoContenedor.innerHTML=""
    carrito.forEach((item)=>{
        const div= document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML=`                    
                        <p>${item.nombre}</p>
                        <p>precio: $${item.precio}</p>
                        <button onclick="removerDelCarrito(${item.id})" class="boton-eliminar"><i class="fa-solid fa-trash-can"></i></button>
        `
        carritoContenedor.append(div)
    })

}
const renderCantidad =()=>{
    contadorCarrito.innerText=carrito.length
}
const renderTotal=()=>{
    let total=0
    carrito.forEach((producto)=>{
        total+= producto.precio
    })
    precioTotal.innerText =total

}

