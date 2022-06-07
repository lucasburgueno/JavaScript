let silla = 1500
let mesa = 3500
let sillon = 5000
let cama = 10000
let iva = 1.21
function validaciones(){
    let booleano=false
    while(!booleano){
        switch(select_product){
            case "silla":
                booleano=true
                break
            case "mesa":
                booleano=true
                break
            case "sillon":
                booleano=true
                break
            case "cama":
                booleano=true
                break
            default:
                booleano=false
                break
        }
    if (booleano==false){
        select_product = String(prompt("Selecciono un producto invalido. \n Por favor elija entre los siguiente producto: silla, mesa, sillon, cama.")).toLocaleLowerCase()
    }
    }
}
function product_mas_iva(){
    switch(select_product){
        case "silla":
            total = silla * iva * cantidad
            break
        case "mesa":
            total = mesa * iva * cantidad
            break
        case "sillon":
            total = sillon * iva * cantidad
            break
        case "cama":
            total = cama * iva * cantidad
            break
    }
    return alert ("el total de su producto seleccionado con iva incluido es de " + total)

}
let select_product = String(prompt("Por favor elija entre los siguiente producto: silla, mesa, sillon, cama. \n A continuacion resivira el precio medio del producto seleccionado.")).toLocaleLowerCase()

validaciones()
let cantidad=Number(prompt("por favor seleccione la cantidad de productos que desea: "))
while (cantidad != Number()){
    let cantidad=prompt("por favor seleccione la cantidad de productos que desea: ")
}
product_mas_iva()
