

//EFEITO DE ABERTURA DO MODAL------------------------------

// OPÇÃO 01 ---

/*const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});*/

// OPÇÃO 02 ---

// MODAL DA PÁGINA SOBRE NÓS--------------------------
function abrirModal(){
    const modal = document.querySelector(".about-text-modal-box");
    modal.classList.add('modal-aberto');

    modal.addEventListener('click',(e) => {
        if(e.target.id == 'close-modal' || e.target.id == 'fade'){
            modal.classList.remove('modal-aberto')
        }
    })
}

//MODAL DA TELA DE LOGIN--------------------------------
function abrirModal2(){
    const loginModalBox = document.querySelector(".login-modal-box");
    loginModalBox.classList.add('modal-aberto');

    loginModalBox.addEventListener('click',(e) => {
        if(e.target.id == 'close-login-modal' || e.target.id == 'fade2'){
            loginModalBox.classList.remove('modal-aberto')
        }
    })

   
}

//----------------------------------------------------------

// CONTROLE DE NAVEGAÇÃO DOS CONTEÚDOS

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const card = document.querySelectorAll(".card");
const maxItems = card.length;

controls.forEach((control) => {

    control.addEventListener ("click", () => {

     const isleft = control.classList.contains('arrow-left');

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

            card[currentItem].classList.add('current-item');

        
            console.log("control", isleft, currentItem, maxItems);
    })
});
//----------------------------------------------------------
        