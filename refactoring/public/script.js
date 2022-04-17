const cards = document.querySelectorAll('.card')
const content = document.querySelectorAll('.content')
const buttons = document.querySelectorAll('.buttons')
const inforPs = document.querySelectorAll('.info')

for(let card of cards) {
    card.addEventListener('click', function() {

        const idCard = card.getAttribute('id')
        window.location.href = `/recipes/${idCard}`

    })
}

for (let [i,button] of buttons.entries()) {

  button.addEventListener("click", () => {

    if(content[i].classList.contains("show")){

        content[i].classList.remove('show')
        content[i].classList.add('hidden')
        button.innerHTML = "Mostrar"

    } else {
        content[i].classList.add('show')

        content[i].classList.remove('hidden')
        button.innerHTML = "Esconder"
        
    }
    
  })
}
