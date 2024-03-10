const botaoAbrir = document.querySelector("header > button ")
const botaoFechar = document.querySelector("header nav button")

botaoAbrir.addEventListener("click" , abrirMenu)
botaoFechar.addEventListener("click" , fecharMenu)

const body = document.querySelector("body")
const nav = document.querySelector("header .mobile")



function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}


function fecharMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}
