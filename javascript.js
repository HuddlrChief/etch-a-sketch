const topButton = document.createElement("button");
const topContainer = document.querySelector("#top-container");
topButton.innerText = "Refresh square"
topContainer.appendChild(topButton);

const bottomContainer = document.querySelector("#bottom-container");

for (let x = 0; x < 16; x++) {
    const newRow = document.createElement("div");
    newRow.classList.add("newRow");
    bottomContainer.appendChild(newRow);
    for (let y = 0; y < 16; y++) {
        const div = document.createElement("div");
        div.textContent = "div";
        div.classList.add("gridBox");
        newRow.appendChild(div);
        }
    }  

topButton.addEventListener("click", (e) =>{
    createNewGrid();
})

function createNewGrid() {
    let userSides = Number(window.prompt("Number of squares per side:"));
    let finalSides = Math.min(userSides, 100);
    bottomContainer.replaceChildren();
    const newRow = document.createElement("div");
    newRow.classList.add("newRow");
    bottomContainer.appendChild(newRow);
    for (let x = 0; x < finalSides; x++) {
        for (let y = 0; y < finalSides; y++) {
            const div = document.createElement("div");
            div.textContent = "div";
            div.classList.add("gridBox");
            bottomContainer.appendChild(div);
            }
        }  
}

const allBoxes = document.querySelectorAll(".gridBox");

allBoxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "red";
  });
});