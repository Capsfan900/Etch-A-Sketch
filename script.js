// DOM references
let button = document.getElementById("userinput");
const flexContainer = document.getElementById("MasterContainer"); // Make sure this ID matches your actual container
let size = promptUser()
// Global scope variables
let rows;
let columns;

// Main content
function promptUser() {
    let userInput = prompt("Enter two numbers of columns and rows separated by a comma");
    // Split the input by comma and convert each element to a number
    let num1 = Number(userInput.split(",")[0]);
    let num2 = Number(userInput.split(",")[1]);
    let userResult = num1 * num2;
   console.log(userResult);
}

function createGrid() {
    if (size >= 0 && size <= 256) {
        for (let i = 0; i < size; i++) {
            const squares = document.createElement("div");
            squares.classList = "flex-item-large";
            flexContainer.appendChild(squares);
        }
    } else if (size >= 258 && size <= 784) {
        for (let i = 0; i < size; i++) {
            const squares = document.createElement("div");
            squares.classList = "flex-item-med";
            flexContainer.appendChild(squares);
        }
    } else if (size >= 786 && size <= 4096) {
        for (let i = 0; i < size; i++) {
            const squares = document.createElement("div");
            squares.classList = "flex-item-small";
            flexContainer.appendChild(squares);
        }
        // Customize the content or other properties of each square if needed
    }
}

createGrid(size);
































