class pelicula{
    constructor(nombre,minutos,genero) {
        this.nombre=nombre
        this.minutos=minutos
        this.gnero=genero
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
let carrito
const carritoEnLS = JSON.parse(localStorage.getItem("carrito"))
let stock=[]

fetch("../stock.json")
    .then((resp)=>resp.json())
    .then((data)=> {
        stock=data
        stock.forEach((item)=>{
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
        
    })





const agregarAlCarrito =(id)=>{
    const item = stock.find((prod)=> prod.id===id)
    carrito.push(item)
    Toastify({
        text: `se agrego ${item.nombre} al carrito`,
        duration: 1000,
        gravity:"bottom",
        position:"left",
        style:{
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast()
    
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()

}
const removerDelCarrito =(id)=>{
    const item= carrito.find ((producto)=> producto.id===id)
    const indice= carrito.indexOf(item)
    carrito.splice(indice,1)
    Toastify({
        text: `se elimino ${item.nombre} del carrito`,
        duration: 1000,
        gravity:"bottom",
        position:"left",
        style:{
            background: "red",
        }
    }).showToast()
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () =>{
    carrito.length= 0
    Toastify({
        text: `El carrito se ha vaciad correctamente`,
        duration: 2000,
        gravity:"bottom",
        position:"left",
        style:{
            background: "red",
        }
    }).showToast()
    localStorage.setItem("carrito", JSON.stringify(carrito))
    

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
                        <p><strong>${item.nombre}</strong></p>
                        <p><strong>precio: $${item.precio}</strong></p>
                        <button onclick="removerDelCarrito(${item.id})" class="boton-eliminar"><i class="fa-solid fa-trash-can"></i></button>
                        <hr>
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
if (carritoEnLS){
    carrito=carritoEnLS

    renderCarrito()
    renderCantidad()
    renderTotal()

}else{
    carrito = []
}
const btnBuscar = document.querySelector("#btn-busqueda")
const inputBusqueda = document.querySelector("#busqueda")
const containerResultado = document.querySelector("#container-resultado")
const consultarCandy=(candy)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const match = stock.find((el)=>el.nombre===candy)

            match? resolve(match): reject ("No se encontraron resultados")
        },3000)
    })
}

btnBuscar.addEventListener("click",()=>{
    const value= busqueda.value
    containerResultado.innerHTML=`<h3> buscando....</h3>`
    consultarCandy(value)
        .then((resp)=>{
            console.log(resp)
            containerResultado.innerHTML=`
                
                <h3> Esto estabas buscando: ${resp.nombre}</h3>
                <img src="${resp.imagen}" alt="balde de pochoclos">
                <h3>${resp.nombre}</h3>
                <p class="precio-producto" >Precio: $${resp.precio}</p>
                <button onclick="agregarAlCarrito(${resp.id})" class="boton-agregar">agregar</button>
            `
    })
    .catch((err)=>{
        console.log(err)
        containerResultado.innerHTML=`
        <h3> "Lo siento no encontramos ninguna coincidencia. "</h3>
        `
    })
})


