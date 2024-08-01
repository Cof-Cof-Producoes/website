
const menuBtn = document.querySelector("#menu_btn");
const mobileMenuBtn = document.querySelector("#mobile_menu_btn");

// Abrir menu lateral
menuBtn.addEventListener("click", function(){
    let menuBar = document.querySelector(".menu");
    menuBar.classList.toggle("hidden");

    let pageVestuario = document.querySelector("#vestuario");
    pageVestuario.classList.toggle("pagemin");

    let pageAcessorios = document.querySelector("#acessorios");
    pageAcessorios.classList.toggle("pagemin");

    let pagePremium = document.querySelector("#premium");
    pagePremium.classList.toggle("pagemin");

    let pageApoiar = document.querySelector("#apoiar");
    pageApoiar.classList.toggle("pagemin");


});

// abrir menu mobile
mobileMenuBtn.addEventListener("click", function(){
    let menuBar = document.querySelector(".mobile_menu");
    menuBar.classList.toggle("expand");
})