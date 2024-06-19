//AVISO INICIAL --------------------------------------
const avisoInicial = document.querySelector('.avisoinicial')
window.addEventListener("load", function(){
    avisoInicial.classList.remove('inative')
})

const closeAviso = document.querySelector('.closeaviso')

function closeaviso01() {
    avisoInicial.classList.add('inative')
}



// BOTÕES DE NAVEGAÇÃO DAS PÁGINAS ------------------------------------------------------------------------
// botões
let homeMenu = document.querySelectorAll('.newmenu')
let bookMenu = document.querySelectorAll('.bookmenu')
let hqMenu = document.querySelectorAll('.hqmenu')
let vdMenu = document.querySelectorAll('.vdmenu')
let glMenu = document.querySelectorAll('.glmenu')
let colectMenu = document.querySelectorAll('.collectionmenu')
// páginas
const newPage = document.querySelector('.new-box-box')
const bookPage = document.querySelector('#bookpage')
const hqPage = document.querySelector('#hqpage')
const vdPage = document.querySelector('#vdpage')
const glPage = document.querySelector('#glpage')
const collectionPage = document.querySelector('#collection')


// Acessar lançamentos
homeMenu.forEach((item) => {
    item.addEventListener('click', function(){
        newPage.classList.remove('inative')
        newPage.classList.add('new-box')
        bookPage.classList.add('inative')
        hqPage.classList.add('inative')
        vdPage.classList.add('inative')
        glPage.classList.add('inative')
        collectionPage.classList.add('inative')
        newPage.scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest",
        });

    })

})

// Acessar livros
bookMenu.forEach((item) => {
    item.addEventListener('click', function(){
        bookPage.classList.remove('inative')
        bookPage.classList.add('bookpage-box')
        newPage.classList.add('inative')
        hqPage.classList.add('inative')
        vdPage.classList.add('inative')
        glPage.classList.add('inative')
        collectionPage.classList.add('inative')
        bookPage.scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest",
        });

    })

})

// Acessar hqs
hqMenu.forEach((item) => {
    item.addEventListener('click', function(){
        hqPage.classList.remove('inative')
        hqPage.classList.add('hqpage-box')
        newPage.classList.add('inative')
        bookPage.classList.add('inative')
        vdPage.classList.add('inative')
        glPage.classList.add('inative')
        collectionPage.classList.add('inative')
        hqPage.scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest",
        });

    })

})

// Acessar galeria
glMenu.forEach((item) => {
    item.addEventListener('click', function(){
        glPage.classList.remove('inative')
        glPage.classList.add('glpage-box')
        newPage.classList.add('inative')
        bookPage.classList.add('inative')
        hqPage.classList.add('inative')
        vdPage.classList.add('inative')
        collectionPage.classList.add('inative')
        glPage.scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest",
        });

    })

})

// Acessar videos
vdMenu.forEach((item) => {
    item.addEventListener('click', function(){
        vdPage.classList.remove('inative')
        vdPage.classList.add('vdpage-box')
        newPage.classList.add('inative')
        bookPage.classList.add('inative')
        hqPage.classList.add('inative')
        glPage.classList.add('inative')
        collectionPage.classList.add('inative')
        vdPage.scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest",
        });

    })

})

// Acessar coleções
colectMenu.forEach((item) => {
    item.addEventListener('click', function(){
        collectionPage.classList.remove('inative')
        collectionPage.classList.add('collection-box')
        newPage.classList.add('inative')
        bookPage.classList.add('inative')
        hqPage.classList.add('inative')
        glPage.classList.add('inative')
        vd.classList.add('inative')
        collectionPage.scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest",
        });

    })

})






// FUNCIONALIDADE DO BOTÃO DE EXPANDIR A CAIXA DE PESQUISA-----------------------------------------------
let expSearchBtn = document.querySelector('.search-icon')
let searchBar = document.querySelector('.inp-search')

expSearchBtn.addEventListener('click', function(){
    searchBar.classList.toggle('buscando')
})

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
    origin: 'right',
    delay: 300

})

//----- SCROLL REVEAL DA PÁGINA DE LIVROS
revelar.reveal('.bookpage-box',
{
    duration: 1000,
    origin: 'right',
    delay: 300

})

//----- SCROLL REVEAL DA PÁGINA DE HQS
revelar.reveal('.hqpage-box',
{
    duration: 1000,
    origin: 'right',
    delay: 300

})

//----- SCROLL REVEAL DA PÁGINA DE VÍDEOS
revelar.reveal('.vdpage-box',
{
    duration: 1000,
    origin: 'right',
    delay: 300

})

//----- SCROLL REVEAL DA PÁGINA DE GALERIA
revelar.reveal('.glpage-box',
{
    duration: 1000,
    origin: 'right',
    delay: 300

})





// ABRIR CAIXAS DE DIÁLOGO (PRÉ LEITURA) ------------------------------------------------------------------------

// TIME LINE TERRAS INVISÍVEIS
function abrirdialog00(){
    const dialog00 = document.querySelector("#dialog00");
    dialog00.classList.remove('inative');

    dialog00.addEventListener('click',(e) => {
        if(e.target.id == 'closedialog00') {
            dialog00.classList.add('inative')
        }
    })
}

// A LENDA DE LÁZARO
function abrirdialog15(){
    const dialog15 = document.querySelector("#dialog15");
    dialog15.classList.remove('inative');

    dialog15.addEventListener('click',(e) => {
        if(e.target.id == 'closedialog15') {
            dialog15.classList.add('inative')
        }
    })
}

// ANAHÍ
function abrirdialog14(){
    const dialog14 = document.querySelector("#dialog14");
    dialog14.classList.remove('inative');

    dialog14.addEventListener('click',(e) => {
        if(e.target.id == 'closedialog14') {
            dialog14.classList.add('inative')
        }
    })
}

// COURO E ESCAMAS
function abrirdialog13(){
    const dialog13 = document.querySelector("#dialog13");
    dialog13.classList.remove('inative');

    dialog13.addEventListener('click',(e) => {
        if(e.target.id == 'closedialog13') {
            dialog13.classList.add('inative')
        }
    })
}

// VAGALUMES
function abrirdialog12(){
    const dialog12 = document.querySelector("#dialog12");
    dialog12.classList.remove('inative');

    dialog12.addEventListener('click',(e) => {
        if(e.target.id == 'closedialog12') {
            dialog12.classList.add('inative')
        }
    })
}

// BAMBOO
function abrirdialog11(){
    const dialog11 = document.querySelector("#dialog11");
    dialog11.classList.remove('inative');

    dialog11.addEventListener('click',(e) => {
        if(e.target.id == 'closedialog11') {
            dialog11.classList.add('inative')
        }
    })
}

// OS PORTÕES DA AREIA
function abrirdialog10(){
    const dialog10 = document.querySelector("#dialog10");
    dialog10.classList.remove('inative');

    dialog10.addEventListener('click',(e) => {
        if(e.target.id == 'closedialog10') {
            dialog10.classList.add('inative')
        }
    })
}

// A ÚLTIMA DA GERAÇÃO
function abrirdialog09(){
    const dialog09 = document.querySelector("#dialog09");
    dialog09.classList.remove('inative');

    dialog09.addEventListener('click',(e) => {
        if(e.target.id == 'closedialog09') {
            dialog09.classList.add('inative')
        }
    })
}







// MODAL DAS PÁGINAS DE LEITURA------------------------------------------------------------------------------------------


// 00 TIME-LINE --------------------------------------------------------------------------------
function abrirLeitura00(){
    const modalread00 = document.querySelector("#time-line");
    modalread00.classList.remove('invisible');

    modalread00.addEventListener('click',(e) => {
        if(e.target.id == 'closeread00') {
            modalread00.classList.add('invisible')
        }
    })
}




// 15 A LENDA DE LÁZARO --------------------------------------------------------------------------------
function abrirLeitura15(){
    const modalread15 = document.querySelector("#alendadelazaro");
    modalread15.classList.remove('invisible');

    modalread15.addEventListener('click',(e) => {
        if(e.target.id == 'closeread15') {
            modalread15.classList.add('invisible')
        }
    })
}
// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn15 = document.querySelector('.menu_text_itens_15')
let menureadBar15 = document.querySelector('.text_itens_15')

expreadbtn15.addEventListener('click', function(){
    menureadBar15.classList.toggle('hidden')
})



// 14 ANAHÍ --------------------------------------------------------------------------------
function abrirLeitura14(){
    const modalread14 = document.querySelector("#anahi");
    modalread14.classList.remove('invisible');

    modalread14.addEventListener('click',(e) => {
        if(e.target.id == 'closeread14') {
            modalread14.classList.add('invisible')
        }
    })
}
// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn14 = document.querySelector('.menu_text_itens_14')
let menureadBar14 = document.querySelector('.text_itens_14')

expreadbtn14.addEventListener('click', function(){
    menureadBar14.classList.toggle('hidden')
})



// 13 COURO E ESCAMAS ---------------------------------------------------------------------------
function abrirLeitura13(){
    const modalread13 = document.querySelector("#couroeescamas");
    modalread13.classList.remove('invisible');

    modalread13.addEventListener('click',(e) => {
        if(e.target.id == 'closeread13') {
            modalread13.classList.add('invisible')
        }
    })
}

// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn13 = document.querySelector('.menu_text_itens_13')
let menureadBar13 = document.querySelector('.text_itens_13')

expreadbtn13.addEventListener('click', function(){
    menureadBar13.classList.toggle('hidden')
})



// 12 VAGALUMES -----------------------------------------------------------------------
function abrirLeitura12(){
    const modalread12 = document.querySelector("#vagalumes");
    modalread12.classList.remove('invisible');

    modalread12.addEventListener('click',(e) => {
        if(e.target.id == 'closeread12') {
            modalread12.classList.add('invisible')
        }
    })
}

// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn12 = document.querySelector('.menu_text_itens_12')
let menureadBar12 = document.querySelector('.text_itens_12')

expreadbtn12.addEventListener('click', function(){
    menureadBar12.classList.toggle('hidden')
})



// 11 BAMBOO --------------------------------------------------------------------------
function abrirLeitura11(){
    const modalread11 = document.querySelector("#bamboo");
    modalread11.classList.remove('invisible');

    modalread11.addEventListener('click',(e) => {
        if(e.target.id == 'closeread11') {
            modalread11.classList.add('invisible')
        }
    })
}

// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn11 = document.querySelector('.menu_text_itens_11')
let menureadBar11 = document.querySelector('.text_itens_11')

expreadbtn11.addEventListener('click', function(){
    menureadBar11.classList.toggle('hidden')
})



// 10 OS PORTÕES DA AREIA ---------------------------------------------------------------------------------
function abrirLeitura10(){
    const modalread10 = document.querySelector("#osportoesdaareia");
    modalread10.classList.remove('invisible');

    modalread10.addEventListener('click',(e) => {
        if(e.target.id == 'closeread10') {
            modalread10.classList.add('invisible')
        }
    })
}

// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn10 = document.querySelector('.menu_text_itens_10')
let menureadBar10 = document.querySelector('.text_itens_10')

expreadbtn10.addEventListener('click', function(){
    menureadBar10.classList.toggle('hidden')
})



// 09 A ÚLTIMA DA GERAÇÃO --------------------------------------------------------------------------
function abrirLeitura09(){
    const modalread09 = document.querySelector("#aultimadageracao");
    modalread09.classList.remove('invisible');

    modalread09.addEventListener('click',(e) => {
        if(e.target.id == 'closeread09') {
            modalread09.classList.add('invisible')
        }
    })
}

// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn09 = document.querySelector('.menu_text_itens_09')
let menureadBar09 = document.querySelector('.text_itens_09')

expreadbtn09.addEventListener('click', function(){
    menureadBar09.classList.toggle('hidden')
})



// 08 XIPAIA --------------------------------------------------------------------------------------
function abrirLeitura08(){
    const modalread08 = document.querySelector("#xipaia");
    modalread08.classList.remove('invisible');

    modalread08.addEventListener('click',(e) => {
        if(e.target.id == 'closeread08') {
            modalread08.classList.add('invisible')
        }
    })
}

// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn08 = document.querySelector('.menu_text_itens_08')
let menureadBar08 = document.querySelector('.text_itens_08')

expreadbtn08.addEventListener('click', function(){
    menureadBar08.classList.toggle('hidden')
})




// 07 MORRO DO DIABO -----------------------------------------------------------------------------------
function abrirLeitura07(){
    const modalread07 = document.querySelector("#morrododiabo");
    modalread07.classList.remove('invisible');

    modalread07.addEventListener('click',(e) => {
        if(e.target.id == 'closeread07') {
            modalread07.classList.add('invisible')
        }
    })
}

// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn07 = document.querySelector('.menu_text_itens_07')
let menureadBar07 = document.querySelector('.text_itens_07')

expreadbtn07.addEventListener('click', function(){
    menureadBar07.classList.toggle('hidden')
})



// 06 BABU -------------------------------------------------------------------------------------

function abrirLeitura06(){
    const modalread03 = document.querySelector("#babu");
    modalread03.classList.remove('invisible');

    modalread03.addEventListener('click',(e) => {
        if(e.target.id == 'closeread06') {
            modalread03.classList.add('invisible')
        }
    })
}

// // BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn06 = document.querySelector('.menu_text_itens_06')
let menureadBar06 = document.querySelector('.text_itens_06')

expreadbtn06.addEventListener('click', function(){
    menureadBar06.classList.toggle('hidden')
})



// 05 COGAUA -----------------------------------------------------------------------------------
function abrirLeitura05(){
    const modalread05 = document.querySelector("#cogaua");
    modalread05.classList.remove('invisible');

    modalread05.addEventListener('click',(e) => {
        if(e.target.id == 'closeread05') {
            modalread05.classList.add('invisible')
        }
    })
}

// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn05 = document.querySelector('.menu_text_itens_05')
let menureadBar05 = document.querySelector('.text_itens_05')

expreadbtn05.addEventListener('click', function(){
    menureadBar05.classList.toggle('hidden')
})




// 04 DAMATO ------------------------------------------------------------------------

function abrirLeitura04(){
    const modalread04 = document.querySelector("#damato");
    modalread04.classList.remove('invisible');

    modalread04.addEventListener('click',(e) => {
        if(e.target.id == 'closeread04') {
            modalread04.classList.add('invisible')
        }
    })
}

// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn04 = document.querySelector('.menu_text_itens_04')
let menureadBar04 = document.querySelector('.text_itens_04')

expreadbtn04.addEventListener('click', function(){
    menureadBar04.classList.toggle('hidden')
})



// 03 BATALHA DOS ESPÓLIOS -----------------------------------------------------------------------------------------
function abrirLeitura03(){
    const modalread03 = document.querySelector("#batalhadosespolios");
    modalread03.classList.remove('invisible');

    modalread03.addEventListener('click',(e) => {
        if(e.target.id == 'closeread03') {
            modalread03.classList.add('invisible')
        }
    })
}
// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn03 = document.querySelector('.menu_text_itens_03')
let menureadBar03 = document.querySelector('.text_itens_03')

expreadbtn03.addEventListener('click', function(){
    menureadBar03.classList.toggle('hidden')
})


// 02 ANIMAIS ANCESTRAIS --------------------------------------------------------------------------------
function abrirLeitura02(){
    const modalread02 = document.querySelector("#animaisancestrais");
    modalread02.classList.remove('invisible');

    modalread02.addEventListener('click',(e) => {
        if(e.target.id == 'closeread02') {
            modalread02.classList.add('invisible')
        }
    })
}

// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn02 = document.querySelector('.menu_text_itens_02')
let menureadBar02 = document.querySelector('.text_itens_02')

expreadbtn02.addEventListener('click', function(){
    menureadBar02.classList.toggle('hidden')
})



// 01 ANTES DE TUDO -----------------------------------------------------------------------
function abrirLeitura01(){
    const modalread01 = document.querySelector("#antesdetudo");
    modalread01.classList.remove('invisible');

    modalread01.addEventListener('click',(e) => {
        if(e.target.id == 'closeread01') {
            modalread01.classList.add('invisible')
        }
    })
}

// BOTÃO DE EXPANDIR CAIXA DE ITENS DA PÁGINA DE LEITURA 

let expreadbtn01 = document.querySelector('.menu_text_itens_01')
let menureadBar01 = document.querySelector('.text_itens_01')

expreadbtn01.addEventListener('click', function(){
    menureadBar01.classList.toggle('hidden')
})


