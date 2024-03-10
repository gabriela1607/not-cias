const botaoAbrir = document.querySelector(".header-mobile > button ")
const botaoFechar = document.querySelector(".header-mobile nav button")

botaoAbrir.addEventListener("click" , abrirMenu)
botaoFechar.addEventListener("click" , fecharMenu)

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")



function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}


function fecharMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}
