let opcion = 0
function select(p){
    if(p != undefined){
        opcion = p
    }else{
        opcion = opcion
        opcion ++
    }

    const elements = document.querySelectorAll(`.icons-bar-content ul li`)
    const elementActive = document.querySelector(`.icons-bar-content ul .active`)
    const selectElement = elements[opcion]
    
    /* change icon style */
    elementActive.classList.remove('active')
    selectElement.classList.add('active')

    /* change card */
    const cards = document.querySelectorAll(`#section-cards .cards`)
    const cardInactive = cards[opcion-1]
    const cardActivate = cards[opcion]
    cardInactive.classList.add('zoom-left')
    setTimeout(()=>{
        cardInactive.classList.add('d-none')
        cardInactive.classList.remove('zoom-left')
        cardActivate.classList.remove('d-none')
        cardActivate.classList.add('zoom-right')
        setTimeout(()=>{
            cardActivate.classList.remove('zoom-right')
        },2000)
    }, 1500)
}

setTimeout(()=>{
    setInterval(()=>{
        select()
        console.log('se ejecuta el interval');
    }, 10000)
}, 6000)