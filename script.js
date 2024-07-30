const description = document.getElementsByClassName("description")[0]
const buttonLeft = document.querySelector(".description div:last-child span:first-child")
const buttonRight = document.querySelector(".description div:last-child span:last-child")
const container = document.getElementsByClassName("container")[0]
const product = document.getElementsByClassName("product")[0]
const docWidth = document.documentElement.clientWidth;


console.log(product)
let index = 0

window.onload = () => {
    setTimeout(() => {
        description.style.top = "650px"
    }, 1200)
    setTimeout(() => {
        product.style.top = "-150px"
    }, 1000)
}


buttonLeft.addEventListener("click", () => {
    index = (index + 2) % 3
    change()
})

buttonRight.addEventListener("click", () => {
    index = (index + 1) % 3
    change()
})
    
const change = () => {
    product.style.left = `${-1 * (400 + 800*index + docWidth*index)}px`
    switch(index){
        case 0:
            container.style.backgroundColor = "#b91c1c"
            break
        case 1:
            container.style.backgroundColor = "#15803d"
            break
        case 2:
            container.style.backgroundColor = "#1d4ed8"
            break
        default:
    }
}