// programs - Navigation in header
const programs = document.getElementById('programs')
const programsNavigation = document.getElementById('programs-navigation')
programs.addEventListener("mouseenter", event => {
    programsNavigation.style.display = 'grid'
})
programsNavigation.addEventListener("mouseleave", event => {
    programsNavigation.style.display = 'none'
})




const person = document.getElementById('person')
const randomNumber = Math.ceil(Math.random() * 3)
person.src = `./img/person-${randomNumber}.png`




