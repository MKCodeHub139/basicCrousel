let next =document.querySelector('.next-btn')
let previous =document.querySelector('.prev-btn')

function updateBackground() {
    let active = document.querySelector('.active');
    let arrow =document.querySelectorAll('span')
    let bg = active.querySelector('img');
    document.body.style.backgroundImage = `url(${bg.src})`;
    arrow.style.backgroundImage = `url(${bg.src})`;

}

next.addEventListener('click',()=>{
    let active =document.querySelector('.active')
    let activeNext =active.nextElementSibling
    if(active.nextElementSibling){    
        active.classList.remove('active')
        activeNext.classList.add('active')
        updateBackground()
    }
})
previous.addEventListener('click',()=>{
    let active =document.querySelector('.active')
    let activePrev =active.previousElementSibling
    if(active.previousElementSibling){
        active.classList.remove('active')
        activePrev.classList.add('active')
        updateBackground()
    }
})
updateBackground()
