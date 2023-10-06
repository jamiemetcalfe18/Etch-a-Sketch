//make sketcher grid
function createGrid() {
    var columns = 16;
    var rows = 16;

    var grid = document.createElement('div'); // creates grid
    grid.className = 'grid';
    for (var i = 0; i < columns; ++i) {
        var column = document.createElement('div'); // creates column
        column.className = 'column';
        for (var j = 0; j < rows; ++j) {
            var cell = document.createElement('div'); // creates cell
            cell.className = 'cell';

            var content = (i + 1) + '-' + (j + 1);
            column.appendChild(cell); // appends cell to column (as row)
        }
        grid.appendChild(column);  // appends column to grid
    }
    document.getElementById('sketch').appendChild(grid); // appends grid to container div
    //make grid draw
    grid.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('cell')) {
            e.target.style.backgroundColor = 'black';
        }
    });
}


// makes grid on page load
window.onload = function() {
    createGrid();
};

//clears grid
function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        if (cell.style.backgroundColor === 'black') {
            cell.style.backgroundColor = 'white';
        }
    });
}
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearGrid);



//color on title hover
function pickColor() { 
    var colors = [ 
        '#ff0000', '#00ff00', '#0000ff', 
        '#ff3333', '#ffff00', '#ff6600' 
    ]; 
      
    var random_color = colors[Math.floor(Math.random() * colors.length)]; 
    var x = document.getElementById('title'); 
    x.style.color = random_color; 
}

// Add an event listener to trigger pickColor() on hover
var titleElement = document.getElementById('title');
titleElement.addEventListener('mouseenter', pickColor);

