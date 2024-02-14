
function draw(){
const myDiv = document.createElement("div"); 
myDiv.style.height = "100px";
myDiv.style.width = "100px";
myDiv.style.backgroundColor = "blue";
myDiv.textContent = "hello poop people"
document.body.appendChild(myDiv);
}

function makeGrids(size) {
    const screen = document.querySelector(".sketch-screen");
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        for (let j = 1; j <= size; j++) {
            const row = document.createElement("div");
            row.classList.add("row");
            row.innerText = i * size + j;
            column.appendChild(row);
        }
        screen.appendChild(column);
    }
}

makeGrids(16);
draw();

