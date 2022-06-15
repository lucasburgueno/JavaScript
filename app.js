// let silla = 1500
// let mesa = 3500
// let sillon = 5000
// let cama = 10000
// let iva = 1.21
// function validaciones(){
//     let booleano=false
//     while(!booleano){
//         switch(select_product){
//             case "silla":
//                 booleano=true
//                 break
//             case "mesa":
//                 booleano=true
//                 break
//             case "sillon":
//                 booleano=true
//                 break
//             case "cama":
//                 booleano=true
//                 break
//             default:
//                 booleano=false
//                 break
//         }
//     if (booleano==false){
//         select_product = String(prompt("Selecciono un producto invalido. \n Por favor elija entre los siguiente producto: silla, mesa, sillon, cama.")).toLocaleLowerCase()
//     }
//     }
// }
// function product_mas_iva(){
//     switch(select_product){
//         case "silla":
//             total = silla * iva * cantidad
//             break
//         case "mesa":
//             total = mesa * iva * cantidad
//             break
//         case "sillon":
//             total = sillon * iva * cantidad
//             break
//         case "cama":
//             total = cama * iva * cantidad
//             break
//     }
//     return alert ("el total de su producto seleccionado con iva incluido es de " + total)

// }
// let select_product = String(prompt("Por favor elija entre los siguiente producto: silla, mesa, sillon, cama. \n A continuacion resivira el precio medio del producto seleccionado.")).toLocaleLowerCase()

// validaciones()
// let cantidad=Number(prompt("por favor seleccione la cantidad de productos que desea: "))
// while (cantidad != Number()){
//     let cantidad=prompt("por favor seleccione la cantidad de productos que desea: ")
// }
// product_mas_iva()

// const productos = ["bebida", "pochoclos", "golosinas", "snacks"]
// let query = "bebida"
// for (let i = 0; i < 4; i++){
//     if (productos [i] === query)
//     alert ("si, aun quedan " + query)
// }

// mascotas.push ("jorge")
// mascotas.unshift ("pez globo")
// const productos = ["bebida", "pochoclos", "golosinas", "snacks"]
// alert( productos.join( " " ))
// let seleccion = prompt("1")
// while (seleccion != productos[0]){
//     seleccion = prompt("2")
// }


class pelicula{
        constructor(nombre,minutos,genero) {
            this.nombre=nombre
            this.minutos=minutos
            this.gnero=genero
    }
}
class producto{
    constructor(id,nombre,precio) {
        this.id=id
        this.nombre=nombre
        this.precio=precio
    }
}
function ofrecerProducto() {
    alert("desea agregar " )
}
const productos =[
    new producto (1,"bebida grande",500),
    new producto(2,"balde pochoclos",590),
    new producto(3,"agua",280),
    new producto(4,"agua saborizada",330),
    new producto(5,"pan de queso",570),
    new producto(6,"nachos con queso",640),
    new producto(7,"gomitas haribo",480),
    new producto(8,"snickers",450),
    new producto(9,"roclets grande",840),
    new producto(10,"skittles medianos",450)

]
const peliculas=[
    new pelicula("cadaver exiquisito",88,"suspenso"),
    new pelicula("dr strange",126,"accion"),
    new pelicula("gemelo siniestro",109,"terror"),
    new pelicula("jurassic world dominio",147,"aventuras"),
    new pelicula("lightyear",100,"animacion"),
    new pelicula("sonic 2",122,"animacion"),
]

console.log(peliculas)
for (const pelicula of peliculas){
    console.log(pelicula.nombre)
}
console.log(productos)
for (const producto of productos){
    console.log(producto.nombre)
}
let ver=prompt("que pelicula desea ver ")
peliculas.find((pelicula)=>{
    if ( pelicula.nombre===ver)
        alert("esta es la pelicula que esta buscando?" + ver)
})
