const container = document.querySelector(".container")
const btn1 = document.querySelector(".btn1")
let row
let grid
let pixel
let box

btn1.addEventListener("click", () => {
    row = prompt(`how many pixels do you want, must be less than 100`, "16")
    console.log(row)
    grid = row ** 2
    width = 830 / row
    createGrid(width, grid)
})

function createGrid(userWidth, userGrid) {
    container.innerHTML = ""
    for (let i = 0; i < userGrid; i++) {
        box = document.createElement("div")
        box.setAttribute("id", "one")
        box.style.width = userWidth + "px"
        box.style.height = userWidth + "px"
        box.style.borderRadius = "3px"
        box.style.border = "solid" + userWidth / 100 + " black"
        container.appendChild(box)
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16)
            e.target.style.opacity = ((e.target.style.opacity * 10) + 1) / 10
        })
    }
}

createGrid(51.875, 256)
