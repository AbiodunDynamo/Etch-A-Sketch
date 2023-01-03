const gridsbody = document.querySelector('body');
const gridsContainer = document.createElement('div');
gridsContainer.classList.add('gridsContainer');
gridsbody.appendChild(gridsContainer);

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  let userinput = prompt('enter a number');
  let inputCon = Number(userinput);   //convert user input to integer
  makeRows(inputCon, inputCon);
})

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

//makeRows(16, 16);



