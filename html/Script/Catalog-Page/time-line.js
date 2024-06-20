

// ESTILIZAÇÃO DO INPUT RANGE DA TIME-LINE
const slider = document.querySelector('#ano')
const output = document.querySelector('#value')

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;

}

slider.addEventListener("input", function(){
    let a = slider.value;
    let b = 2650
    let c = 100
    let x = a / b * c
    let color = 'linear-gradient(90deg, rgb(140, 189, 18)' + x + '%, rgb(247, 255, 229)' + x + '%)';

    slider.style.background = color;


})

// AJUSTAR**************************************************************
// FUNCIONALIDADE DO INPUT-RANGE PARA NAVEGAR NA TIME-LINE
const time = document.querySelectorAll('.timefrag')

time.forEach((timefrag) =>{

    slider.addEventListener ('input', () => {

        let itsTime = timefrag.value 

            if (itsTime == slider.value){
                itstime.forEach(itstime => { 
                    itsTime.scrollIntoView({
                    inline: "center",
                    behavior: "smooth",
                    block: "nearest",

                    });
                });
                    
                } else{

            }
    })

});

