const btn_mudar_tema = document.querySelector('.tema')
btn_mudar_tema.addEventListener('click', () => {
    let html = document.querySelector('.html')
    html.classList.toggle('light_mode')
})

const btn_mudar_tema_menu = document.querySelector('.tema_menu')
btn_mudar_tema_menu.addEventListener('click', () => {
    let html = document.querySelector('.html')
    html.classList.toggle('light_mode')
})