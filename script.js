   // Responsive Navbar Toggle
   const toggle = document.querySelector('.toggle');
   const menu = document.querySelector('.navbar ul');

   toggle.addEventListener('click', () => {
       menu.classList.toggle('active');
   });

   const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slides = document.querySelector(".slides")

let index = 0

const moveRight = () => {
    if(index <= 0) {
        index = 9
    } else {
        index--
    }
    let css = `translateX(${-(index * 100 / 10)}%)`
    slides.style.transform = css
}

const moveLeft = () => {
    if(index >= 9) {
        index = 0
    } else {
        index++
    }
    let css = `translateX(${-(index * 100 / 10)}%)`
    slides.style.transform = css
}


left.addEventListener('click', moveLeft)

right.addEventListener('click', moveRight)


setInterval(() => {moveLeft()}, 5000);