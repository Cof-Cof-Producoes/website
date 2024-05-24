

// FUNCIONALIDADE DO BOTÃO DE EXPANDIR DA CAIXA DE USUÁRIO ------------------------------------------------------------


let expUserBtn = document.querySelector('.user-menu-btn')
let menuUserBar = document.querySelector('.usermenu')

expUserBtn.addEventListener('click', function(){
    menuUserBar.classList.toggle('expandir-user-menu')
})


//MENU LATERAL MUDAR BACKGROUND DA SELEÇÃO----------------------------------------------------------------------------
let menuItem = document.querySelectorAll('.item-menu')

function selectlink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
)
this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)


// FUNCIONALIDADE DO BOTÃO DE EXPANDIR MENU LATERAL ------------------------------------------------------------------

// LATERAL ESQUERDA ----------------------------
let expbtn = document.querySelector('#exp-btn')
let menuBar = document.querySelector('.menu')

expbtn.addEventListener('click', function(){
    menuBar.classList.toggle('expandir')
})

// LATERAL DIREITA ----------------------------

let ocultbtn = document.querySelector('#outlined-02')
let menunav = document.querySelector('.nav-list-lateral')

ocultbtn.addEventListener('click', function(){
    menunav.classList.toggle('oculta')
})


// BOTÕES DE NAVEGAÇÃO DO CARROSSEL DOS CARDS ------------------------------------------------------------------------
const control = document.querySelectorAll(".slide");
let currentItem = 0;
const card = document.querySelectorAll(".carrossel-item");
const maxItems = card.length;

control.forEach((slide) =>{

    slide.addEventListener ('click', () => {

        const isleft = slide.classList.contains('left');

            if (isleft) {
                currentItem -= 1;} else {currentItem += 1;
            }
            if (currentItem >= maxItems) {
                currentItem = 0;
            }
            if (currentItem < 0) {
                currentItem = maxItems - 1;
            } 

            card.forEach(card => card.classList.remove('current-item'));
            card[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth",
                block: "nearest",

            });

            card[currentItem].classList.add('current-item')

            console.log("control", isleft, currentItem, maxItems);

        }
    )
})



// -------------- SCROLL REVEAL ------------------------------------------------------------------------------

// -- SCROLL REVEAL DOS ITENS DO CARROSSEL 

window.revelar = ScrollReveal({reset:true})

revelar.reveal('.slide',
{
    duration: 1000,
    distance: '180px',
    origin: 'bottom',
    delay: 500

})

revelar.reveal('.overflow',
{
    duration: 1000,
    distance: '180px',
    origin: 'top',
    delay: 300

})




//----- SCROLL REVEAL DA PÁGINA COLEÇÃO

revelar.reveal('.collection-box',
{
    duration: 1000,
    distance: '10px',
    origin: 'right',
    delay: 300

})

//----- SCROLL REVEAL DA PÁGINA COLEÇÃO
revelar.reveal('.collection-box',
{
    duration: 1000,
    distance: '10px',
    origin: 'right',
    delay: 300

})

//----- SCROLL REVEAL DA PÁGINA DE LIVROS
revelar.reveal('.bookpage-box',
{
    duration: 1000,
    distance: '10px',
    origin: 'right',
    delay: 300

})

//----- SCROLL REVEAL DA PÁGINA DE HQS
revelar.reveal('.hqpage-box',
{
    duration: 1000,
    distance: '10px',
    origin: 'right',
    delay: 300

})

//----- SCROLL REVEAL DA PÁGINA DE VÍDEOS
revelar.reveal('.vdpage-box',
{
    duration: 1000,
    distance: '10px',
    origin: 'right',
    delay: 300

})

//----- SCROLL REVEAL DA PÁGINA DE GALERIA
revelar.reveal('.glpage-box',
{
    duration: 1000,
    distance: '10px',
    origin: 'right',
    delay: 300

})











// MODAL DAS PÁGINAS DE LEITURA------------------------------------------------------------------------------------------


// 01 OS PORTÕES DA AREIA ------------------------------------------------------------------------------
function abrirLeitura01(){
    const modalread01 = document.querySelector("#osportoesdaareia");
    modalread01.classList.remove('invisible');

    modalread01.addEventListener('click',(e) => {
        if(e.target.id == 'closeread01') {
            modalread01.classList.add('invisible')
        }
    })
}

// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 
let expreadbtn = document.querySelector('.menu_text_itens')
let menureadBar = document.querySelector('.text_itens')
expreadbtn.addEventListener('click', function(){
    menureadBar.classList.toggle('hidden')
})


// BARRA DE PROGRESSO DE LEITURA

const historyItem = document.getElementById('iframe_01');
const iframeWindow = historyItem.contentWindow;

function updateProgressBar(){
    
    const iframeDocument = historyItem.contentDocument;

    console.log(iframeDocument.document);
    
}

iframeWindow.addEventListener('scroll', updateProgressBar);







// 02 VAGALUMES ----------------------------------------------------------------------------------------
function abrirLeitura02(){
    const modalread02 = document.querySelector("#vagalumes");
    modalread02.classList.remove('invisible');

    modalread02.addEventListener('click',(e) => {
        if(e.target.id == 'closeread02') {
            modalread02.classList.add('invisible')
        }
    })
}

// 03 BABU --------------------------------


// 04 ANIMAIS ANCESTRAIS --------------------



// 05 BAMBOO --------------------------------
function abrirLeitura05(){
    const modalread05 = document.querySelector("#bamboo");
    modalread05.classList.remove('invisible');

    modalread05.addEventListener('click',(e) => {
        if(e.target.id == 'closeread05') {
            modalread05.classList.add('invisible')
        }
    })
}

// 06 COURO E ESCAMAS -----------------------
function abrirLeitura06(){
    const modalread06 = document.querySelector("#couroeescamas");
    modalread06.classList.remove('invisible');

    modalread06.addEventListener('click',(e) => {
        if(e.target.id == 'closeread06') {
            modalread06.classList.add('invisible')
        }
    })
}



// 12 A ÚLTIMA DE SUA GERAÇÃO ---------------
function abrirLeitura12(){
    const modalread12 = document.querySelector("#aultimadageracao");
    modalread12.classList.remove('invisible');

    modalread12.addEventListener('click',(e) => {
        if(e.target.id == 'closeread12') {
            modalread12.classList.add('invisible')
        }
    })
}


// 14 MORRO DO DIABO ------------------------
function abrirLeitura14(){
    const modalread14 = document.querySelector("#morrododiabo");
    modalread14.classList.remove('invisible');

    modalread14.addEventListener('click',(e) => {
        if(e.target.id == 'closeread14') {
            modalread14.classList.add('invisible')
        }
    })
}
