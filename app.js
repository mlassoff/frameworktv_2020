// programs - Navigation in header
const programs = document.getElementById('programs')
const programsNavigation = document.getElementById('programs-navigation')

const randomNumber = Math.ceil(Math.random() * 3)
document.getElementById('person').src = `./img/person-${randomNumber}.png`



programs.addEventListener("mouseenter", event => {
    programsNavigation.style.display = 'grid'
})
programsNavigation.addEventListener("mouseleave", event => {
    programsNavigation.style.display = 'none'
})
