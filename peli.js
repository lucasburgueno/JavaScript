const btnBuscar = document.querySelector("#btn-busqueda")
const inputBusqueda = document.querySelector("#busqueda")
const containerResultado = document.querySelector("#container-pelicula")
let peliculas=[]
const consultarPeli=(peli)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const match = pelicula.find((el)=>el.nombre===peli)
            match? resolve(match): reject ("No se encontraron resultados")
        },3000)
    })
}

btnBuscar.addEventListener("click",()=>{
    const value= busqueda.value
    containerResultado.innerHTML=`<h3> buscando....</h3>`
    consultarPeli(value)
        .then((resp)=>{
            console.log(resp)
            containerResultado.innerHTML=`
                <h3> Esto estabas buscando: ${resp.nombre}</h3>
                <img src="${resp.imagen}" alt="balde de pochoclos">
                <h3>${resp.nombre}</h3>
            `
    })
    .catch((err)=>{
        console.log(err)
        containerResultado.innerHTML=`
        <h3> "Lo siento no encontramos ninguna coincidencia. "</h3>
        `
    })
})
