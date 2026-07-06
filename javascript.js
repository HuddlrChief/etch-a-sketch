const topButton = document.createElement("button");
const topContainer = document.querySelector("#top-container");
topButton.innerText = "Refresh square"
topContainer.appendChild(topButton);

const bottomContainer = document.querySelector("#bottom-container");

for (let x = 0; x < 256; x++) {
        const div = document.createElement("div");
        div.textContent = "div"
        div.classList.add("gridBox");
        bottomContainer.appendChild(div);
        }

topButton.addEventListener("click", (e) =>{
    let sides = Number(window.prompt("Number of squares per side:"))
    let finalSides = Math.min(sides, 100);
    createNewGrid(finalSides);
})

function createNewGrid(sides) {
    for (let x = 0; x < sides; x++) {
        const newRow = document.createElement("div");
        newRow.classList.add("newRow");
        for (let y = 0; y < sides; y++) {
            const div = document.createElement("div");
            div.textContent = "div"
            div.classList.add("gridBox");
            newRow.appendChild(div);
            }
        bottomContainer.appendChild(newRow)
        }  
}

const allBoxes = document.querySelectorAll(".gridBox");

allBoxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "red";
  });
});