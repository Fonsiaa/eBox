//navigational bar/menu bar
const menu = document.querySelector('.menu')
const screenMenu = document.querySelector('.screen-menu')

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  screenMenu.classList.toggle('active')
})

//the animation for the contact form
const inputs = document.querySelectorAll(".input");

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove ("focus");
    }
}

inputs.forEach ((input) => {
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
});

