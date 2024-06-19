// window.revelar = ScrollReveal({reset:true})

// revelar.reveal('.timefrag',
// {
//     duration: 800,
//     distance: '10px',
//     origin: 'bottom',
//     delay: 300

// })


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


