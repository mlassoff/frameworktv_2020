const personImage = document.getElementById('person')
const programs = document.getElementById('programs')
const programsNavigation = document.getElementById('programs-navigation')

const randomNumber = Math.ceil(Math.random() * 3)
personImage.src = `./img/person-${randomNumber}.png`



programs.addEventListener("mouseenter", event => {
    programsNavigation.style.display = 'grid'
})

programsNavigation.addEventListener("mouseleave", event => {
    programsNavigation.style.display = 'none'
})
