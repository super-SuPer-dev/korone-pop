const main = document.querySelector(".main")
const count = document.querySelector(".count")
const korone = document.querySelector(".korone")
const img = document.querySelector(".img")


const h1 = document.createElement("h1")

h1.innerText = c
count.append(h1)
const imglist = ["img/korone3.png", "img/korone4.png"]
var imgli = 1;


var c = Number(localStorage.getItem("pop"))

main.addEventListener("click", Event => {
    c = c + 1
    var b = c
    h1.innerText = c
    count.append(h1)

    console.log(imgli);
    if (imgli > 1){
        imgli = 0
    }
    console.log(imglist[imgli]);
    img.src = imglist[imgli]
    imgli++;
    localStorage.setItem("pop",b)
})