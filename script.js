function createGrid() {
    var columns = 16;
    var rows = 16;

    var grid = document.createElement('div');            // creates grid
    grid.className = 'grid';
    for (var i = 0; i < columns; ++i) {
        var column = document.createElement('div');      // creates column
        column.className = 'column';
        for (var j = 0; j < rows; ++j) {
            var cell = document.createElement('div');    // creates cell
            cell.className = 'cell';

            var content = (i + 1) + '-' + (j + 1);
            column.appendChild(cell);                    // appends cell to column (as row)
        }
        grid.appendChild(column);                        // appends column to grid
    }
    document.getElementById('container').appendChild(grid); // appends grid to container div
}


// makes grid on page load
window.onload = function() {
    createGrid();
};


