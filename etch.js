const gridsbody = document.querySelector('body');
const gridsContainer = document.createElement('div');
gridsContainer.classList.add('gridsContainer');
gridsbody.appendChild(gridsContainer);
defaultGrid(); //make the default grid if the button is not clicked
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  let userinput = prompt('enter a number');
  let inputCon = Number(userinput);   //convert user input to integer
  makeRows(inputCon, inputCon);
});

function makeRows(rows, cols) {
  gridsContainer.style.setProperty('--grid-rows', rows);
  gridsContainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    gridsContainer.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", function(){
      cell.style.backgroundColor = 'blue';
    });
  };
};
//create a default 16 x 16 grid
function defaultGrid(){
  makeRows(16, 16);
};

//clear the grid function
function clearGrid(){
  gridsbody.removeChild(gridsContainer);
}


