let img = document.querySelectorAll(".img")
let btn = document.querySelectorAll(".btn")

for (let i = 0; i < img.length; i++) {
    btn[i].onclick = function () {
        for (let z = 0; z < btn.length; z++) {
            btn[z].classList.remove("active");
        }
        for (let a = 0; a < img.length; a++) {
            img[a].classList.remove("img-active")
            
        }
        btn[i].classList.add("active")
        img[i].classList.add("img-active")
        
    }

}