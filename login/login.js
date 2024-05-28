//navigational bar/menu bar
const menu = document.querySelector('.menu')
const screenMenu = document.querySelector('.screen-menu')

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  screenMenu.classList.toggle('active')
})