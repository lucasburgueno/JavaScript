let username =String(prompt("Hola por favor ingrese su usuario: ")).toLowerCase()
while (username != "lucasbur"){
    username=String(prompt("lo lamento ese usuario es incorrecto, ingreselo nuevamente: ")).toLowerCase()
}if(username=="lucasbur"){
    password=String(prompt("Por favor ingrese su contraseña"))
}while (password != "lucas123"){
    password=String(prompt("lo lamento esa contraseña es incorrecta, ingresela nuevamente: ")).toLowerCase()
}if (password=="lucas123"){
    alert("bienvenido usuario " + username)
}
