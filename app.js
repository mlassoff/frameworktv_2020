const personImage = document.getElementById('person')


const randomNumber = Math.ceil(Math.random() * 3)

personImage.src = `./img/person-${randomNumber}.png`
