const box = document.querySelector(".box");
const BOX_WIDTH = 960;
const ELEMENT_BORDER_WIDTH = 0.96;
const clearGrid1 = document.getElementById("#clearGrid");



function gridElementUpdate(){
    let numberOfSquares = document.querySelector('#square-number').value;
    //fits any number of squares in box up to 64 x 64
    sideLength = BOX_WIDTH/numberOfSquares - (ELEMENT_BORDER_WIDTH*2);
    // console.log(sideLength);          //#debug
    // console.log(numberOfSquares);     //#debug
    clearGrid();
    drawGrid(numberOfSquares);
}

function clearGrid(){
    while(box.firstChild) {
        box.removeChild(box.lastChild);
    }
}
//loop to create a line elment and add squares to the line
//followed by adding line to the '.box' element

function drawGrid(n_square) {
    for(let i=0; i < n_square; i++){ 
        const lineElement = document.createElement('div');
        lineElement.classList.add('line');      
        lineElement.id = 'l' + i;
        //rows
        for(let j=0; j < n_square; j++) {
            const divEle = document.createElement("div");
            divEle.classList.add('square');
            divEle.id = 'sq' + j;
            divEle.style.height = sideLength + 'px';
            divEle.style.width = sideLength + 'px';
            lineElement.appendChild(divEle);
            //append columns to rows
        }
        box.appendChild(lineElement);
    }
}

// dispaly cursor postion 

box.addEventListener('mousemove', (e) => {
    let log = document.querySelector('#log');
    log.innerText = `
    Screen X/Y: (${e.screenX}, ${e.screenY})
    Client X/Y: (${e.clientX}, ${e.clientY})`
    const elementMouseIsOver = document.elementFromPoint(e.clientX, e.clientY);
    const isColorful = document.querySelector('#colorful').checked;
    //js for condition when isColorful is clicked 
    isColorful?
    elementMouseIsOver.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16):
    elementMouseIsOver.style.backgroundColor = '#400080';

   
});

 //function calls

gridElementUpdate(); //first call to load the grid on the page






















