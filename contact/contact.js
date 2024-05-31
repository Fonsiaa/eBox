//navigational bar
const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"), 
modeSwitch = body.querySelector(".toggle-switch"),
modeText=body.querySelector(".mode-text");
toggle.addEventListener("click" , () => {
    sidebar.classList.toggle("close")
});

searchBtn.addEventListener("click", () => { 
    sidebar.classList.remove("close") 
});

modeSwitch.addEventListener("click" , () => 
    body.classList.toggle("dark"));
    if (body.classList.contains("dark")) { 
        modeText.innerText="Light mode";
    } else { 
        modeText.innerText="Dark mode"; 
    };

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

