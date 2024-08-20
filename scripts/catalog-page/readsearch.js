
// FILTRAR LIVROS E HQ'S -----------------------------------------------------------
const filterElement = document.querySelector('.inp-search')
const cards = document.querySelectorAll('.card')


filterElement.addEventListener('keyup', filterCards) // NECESSÁRIO ADICIONAR UM DEBOUCE PARA OTIMIZAR PERFORMANCE

function filterCards() {
    if(filterElement.value !== '') {
        for(let card of cards) {

            let title = card.querySelector('h2')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()

            if(!title.includes(filterText)) {
                card.style.display = "none"
            }
            else {
                card.style.display = "flex"
            }
        }

    } else {
        for(let card of cards) {
            card.style.display = "flex"
        }
    }
}




// FILTRAR VÍDEOS -----------------------------------------------------------
const filterElementVd = document.querySelector('.inp-search')
const cardsvd = document.querySelectorAll('.card-vd')

filterElementVd.addEventListener('input', filterCardsvd)



function filterCardsvd() {
    if(filterElementVd.value !== '') {
        for(let cardvd of cardsvd) {

            let titlevd = cardvd.querySelector('h2')
            titlevd = titlevd.textContent.toLowerCase()
            let filterText = filterElementVd.value.toLowerCase()

            if(!titlevd.includes(filterText)) {

                cardvd.style.display = "none"

            }
            else {

                cardvd.style.display = "flex"

            }

        }

    } else {

        for(let cardvd of cardsvd) {

            cardvd.style.display = "flex"
        }
    }
}







