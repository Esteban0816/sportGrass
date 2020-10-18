let i = 0
let c = 0
let interval = setInterval(imgSlider, 6000)
function imgSlider(pos){
    i ++
    if(pos != undefined){
        c = pos
        clearInterval(interval)
    }else{
        c = i
    }
    const content = document.querySelector('.content')
    const textBox = document.querySelector('.content .textBox')
    textBox.classList.remove('goodbye-left')
    textBox.classList.remove('hello')
    const imgBox = document.querySelector('.content .imgBox')
    imgBox.classList.add('d-none')
    const section1 = document.querySelector('#section-1')
    const thumbActive = document.querySelector('.thumb li.active')
    let html;
    switch (c){
        case 0:
            textBox.classList.add('goodbye-left')
            section1.style.background = "linear-gradient(90deg,rgba(0,0,0,.7),rgba(0, 0, 0, .4)),url('../assets/cancha.jpg')"
            html = document.querySelector('#sportGrass').innerHTML
            thumbActive.classList.remove('active')
            document.querySelector('.thumb li:nth-child(1)').classList.add('active')
            setTimeout(()=>{
                content.innerHTML = html
            },550)
        break;
        case 1:
            textBox.classList.add('goodbye-left')
            section1.style.background = "linear-gradient(90deg,rgba(0,0,0,.7),rgba(0, 0, 0, .4)),url('../assets/cancha_tenis.jpg')"
            html = document.querySelector('#sportGrounds').innerHTML
            thumbActive.classList.remove('active')
            document.querySelector('.thumb li:nth-child(2)').classList.add('active')
            setTimeout(()=>{
                content.innerHTML = html
            },550)
        break;
        case 2:
            textBox.classList.add('goodbye-left')
            section1.style.background = "linear-gradient(90deg,rgba(0,0,0,.7),rgba(0, 0, 0, .4)),url('../assets/basket.jpg')"
            html = document.querySelector('#epiSports').innerHTML
            thumbActive.classList.remove('active')
            document.querySelector('.thumb li:nth-child(3)').classList.add('active')
            setTimeout(()=>{
                content.innerHTML = html
            },550)
        break;
        case 3:
            textBox.classList.add('goodbye-left')
            section1.style.background = "linear-gradient(90deg,rgba(0,0,0,.7),rgba(0, 0, 0, .4)),url('../assets/parque.jpg')"
            html = document.querySelector('#apeteck').innerHTML
            thumbActive.classList.remove('active')
            document.querySelector('.thumb li:nth-child(4)').classList.add('active')
            setTimeout(()=>{
                content.innerHTML = html
            },550)
        break;
        default:
            clearInterval(interval)
    }
}