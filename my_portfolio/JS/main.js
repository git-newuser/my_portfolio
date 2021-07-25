let container = document.querySelector(".container")
let titles = document.querySelectorAll(".title")
let img = document.querySelector("img")
let delay = 2500;

window.onload = ()=>{

    setTimeout(() => {
       container.style.clipPath = "circle(100%)";
    }, 500);
    titles.forEach((e)=>{
        setTimeout(() => {
            e.style.opacity = 1;
            e.style.transform = "translateX(0)";
            // t.classList.add("show")
        }, delay);
        delay+=500
    })
    setTimeout(() => {
            titles[0].style.opacity = 1;
            titles[0].style.transform = "translateX(0px)";
        }, 1500);
}

