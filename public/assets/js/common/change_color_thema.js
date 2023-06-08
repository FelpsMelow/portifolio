const btn_mudar_tema = document.querySelector('.tema')
btn_mudar_tema.addEventListener('click', () => {
    let html = document.querySelector('.html')
    html.classList.toggle('light_mode')

    if (html.classList.contains('light_mode')) {
        localStorage.setItem('theme', 'light_mode')
    } else {
        localStorage.setItem('theme', 'dark_mode')
    }

})

const btn_mudar_tema_menu = document.querySelector('.tema_menu')
btn_mudar_tema_menu.addEventListener('click', () => {
    let html = document.querySelector('.html')
    html.classList.toggle('light_mode')

    if (html.classList.contains('light_mode')) {
        localStorage.setItem('theme', 'light_mode')
    } else {
        localStorage.setItem('theme', 'dark_mode')
    }
})

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    let html = document.querySelector('.html')
    if (savedTheme === 'light_mode') {
      html.classList.add('light_mode');
    }
  });