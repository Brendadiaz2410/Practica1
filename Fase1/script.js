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