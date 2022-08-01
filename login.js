const username = document.getElementById("username")
const password = document.getElementById("password")
const button = document.getElementById("button-login")
button,addEventListener("click", (e)=>{
    e.preventDefault
    const data = {
        username: username.Value,
        password: password.Value
    }
    console.log(data)
})
