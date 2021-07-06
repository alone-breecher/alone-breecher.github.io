const aboutbtn = document.querySelector(".button");
const rembtn = document.querySelector(".remove");
const link = document.querySelectorAll("a");
const about = document.querySelector(".about");
const body = document.querySelector(".body")
const dark = document.querySelector(".dark");
const main = document.querySelector("#main");
const logotext = document.querySelector(".logotext");
dark.addEventListener('click', ()=> {
       main.classList.toggle("light");
       link.classList.toggle("light")
});

aboutbtn.addEventListener('click', () =>{
       body.classList.toggle("close");
       about.classList.toggle("open");
       logotext.classList.toggle("open")
});
rembtn.addEventListener('click', () =>{
       body.classList.remove("close");
       about.classList.remove("open");
       logotext.classList.remove("open")
});