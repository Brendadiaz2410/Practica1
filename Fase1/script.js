//se define una constante panels 
//donde se estaran utilizando los objetos
const panels = document.querySelectorAll('.panel')
// se define la funcion que se activara al hacer click
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })    
});

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}

//modulo de avance o progreso
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
//const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > panels.length) {
        currentActive = panels.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    panels.forEach((panel, idx) => {
        if(idx < currentActive) {
            panel.classList.add('active')
        } else {
            panel.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (panels.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === panels.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}