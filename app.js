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
function ofrecerProducto() {
    alert("desea agregar " )
}

const peliculas=[
    new pelicula("cadaver exiquisito",88,"suspenso"),
    new pelicula("dr strange",126,"accion"),
    new pelicula("gemelo siniestro",109,"terror"),
    new pelicula("jurassic world dominio",147,"aventuras"),
    new pelicula("lightyear",100,"animacion"),
    new pelicula("sonic 2",122,"animacion"),
]

const productosContainer= document.querySelector("#contenedor-de-productos")
const item= listaProductos [0]
const div= document.createElement("div")
div.classList.add("producto")
div.innerHTML=`         
                <img src=${item.img} alt="balde de pochoclos">
                <h3>${item.nombre}</h3>
                <p class="precio-producto" >Precio:$${item.precio} </p>
                <button class="boton-agregar">agregar</button>
                `
console.log(div)    
productosContainer.append(div)

