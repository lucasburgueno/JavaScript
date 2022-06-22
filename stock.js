class productos{
    constructor(id,nombre,precio,imagen) {
        this.id=id
        this.nombre=nombre
        this.precio=precio
        this.imagen=imagen
        
    }
}
const listaProductos =[
    new productos(1,"balde pochoclos",590,"./imagenes/balde-pochoclo.png"),
    new productos (2,"bebida grande",500,"./imagenes/bbida-grde.png"),
    new productos(3,"agua",280,"./imagenes/agua.png"),
    new productos(4,"agua saborizada",330,"./imagenes/agua-saborizada.png"),
    new productos(5,"pan de queso",570,"./imagenes/pan-de-queso.png"),
    new productos(6,"nachos con queso",640,"./imagenes/nachos-con-queso.png"),
    new productos(7,"gomitas haribo",480,"./imagenes/gomitas-haribo.png"),
    new productos(8,"snickers",450,"./imagenes/snickers.png"),
    new productos(9,"roclets grande",840,"./imagenes/roclets-grde.png"),
    new productos(10,"skittles medianos",450,"./imagenes/skittles.png")
]