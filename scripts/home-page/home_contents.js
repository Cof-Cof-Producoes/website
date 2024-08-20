// VARIÁVEIS GLOBAIS
// botões
const nossoAppBtn = document.querySelector("#nosso-app-btn");
const mktingBtn = document.querySelector("#mkting-btn");
const devWebBtn = document.querySelector("#dev-web-btn");
const dataAnltBtn = document.querySelector("#data-anlt-btn");
const prodContBtn = document.querySelector("#prod-cont-btn");
// blocos
const nossoApp = document.querySelector("#nosso-app");
const mkting = document.querySelector("#mkting");
const devWeb = document.querySelector("#dev-web");
const dataAnlt = document.querySelector("#data-anlt");
const prodCont = document.querySelector("#prod-cont");


// FUNÇÕES
// Mostrar nosso app
nossoAppBtn.addEventListener("click", () => {
    let others = [mkting, devWeb, dataAnlt, prodCont];
    let othersBtns = [mktingBtn, devWebBtn, dataAnltBtn, prodContBtn]

    nossoAppBtn.classList.toggle("selected");

    nossoApp.classList.toggle("show_content_box");

    others.forEach((element) => 
    element.classList.remove("show_content_box"));

    othersBtns.forEach((element) =>
    element.classList.remove("selected"));

});

// Mostrar acessoria de marketing
mktingBtn.addEventListener("click", () => {
    let others = [nossoApp, devWeb, dataAnlt, prodCont];
    let othersBtns = [nossoAppBtn, devWebBtn, dataAnltBtn, prodContBtn]

    mktingBtn.classList.toggle("selected");
    mkting.classList.toggle("show_content_box");

    others.forEach((element) =>
    element.classList.remove("show_content_box"));

    othersBtns.forEach((element) =>
    element.classList.remove("selected"));
    
});

// Mostrar desenvolvimento web
devWebBtn.addEventListener("click", () => {
    let others = [nossoApp, mkting, dataAnlt, prodCont];
    let othersBtns = [nossoAppBtn, mktingBtn, dataAnltBtn, prodContBtn];


    devWebBtn.classList.toggle("selected");

    devWeb.classList.toggle("show_content_box");

    others.forEach((element) =>
    element.classList.remove("show_content_box"));

    othersBtns.forEach((element) =>
    element.classList.remove("selected"));

});

// Mostrar Análise de dados
dataAnltBtn.addEventListener("click", () => {
    let others = [nossoApp, mkting, devWeb, prodCont];
    let othersBtns = [nossoAppBtn, mktingBtn, devWebBtn, prodContBtn];


    dataAnltBtn.classList.toggle("selected");

    dataAnlt.classList.toggle("show_content_box");

    others.forEach((element) =>
    element.classList.remove("show_content_box"));

    othersBtns.forEach((element) =>
    element.classList.remove("selected"));

});

// Mostrar produção de conteúdos
prodContBtn.addEventListener("click", () => {
    let others = [nossoApp, mkting, devWeb, dataAnlt];
    let othersBtns = [nossoAppBtn, mktingBtn, devWebBtn, dataAnltBtn];

    prodContBtn.classList.toggle("selected");

    prodCont.classList.toggle("show_content_box");

    others.forEach((element) =>
    element.classList.remove("show_content_box"));

    othersBtns.forEach((element) =>
    element.classList.remove("selected"));

});




