
var currentChar = "X";
var splat = "redsplat.png";
var d = document.getElementById("board");
d.addEventListener('click', setCell, false);
var b = document.getElementById("reset");
b.addEventListener('click', startOver, false);
var grid = Create2DArray();

function setCell(e) {
    let saveChar = "";
    if (!document.querySelector("#board").querySelector("#result").textContent.endsWith("has WON!")) {
        //if the cell is blank then it is okay to set the marker (X or O) in that cell
        if (e.target.textContent.trim.length == 0 && e.target.id=="cell") {
            e.target.style.background=`url(${splat})`;
            e.target.style.backgroundSize = 'cover';
            soundsplat.play();
            saveChar = currentChar;
            //parse the data id into row-column pair
            let gridRow = e.target.getAttribute("data-id").substr(0, 1);
            let gridCol = e.target.getAttribute("data-id").substr(1, 1);
            //add the value to the grid array
            grid[gridRow][gridCol] = currentChar;
            //console.log(grid);
            //toggle marker
            if (currentChar == "X") {
                currentChar = "O";
                splat="bluesplat.png";
            } else {
                currentChar = "X";
                splat="redsplat.png";
            }
            checkForWinner(saveChar);
            checkForDraw();
        }
    }
}

//the reset button was clicked, set starting character to X, reset the screen, reset the grid
function startOver(e) {

    let rows = document.querySelector("#board").querySelectorAll("#row");
    rows.forEach(processRow);
    currentChar = "X";
    splat="redsplat.png";
    document.querySelector("#board").querySelector("#result").textContent = "";
    resetGrid();
}

//clear out each row on the screen
function processRow(row) {
    let cols = row.querySelectorAll("#cell");
    cols.forEach(processCol);
}

//clear out the current cell
function processCol(col) {
    col.style.background="";
}

//create the grid array
function Create2DArray() {
    let arr = [];
    for (var i = 0; i < 3; i++) {
        arr[i] = [" ", " ", " "];
    }
    return arr;
}

//clear out the grid array
function resetGrid() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            grid[i][j] = " ";
        }
    }
}

//check for a horizontal, vertical, or diagonal win
function checkForWinner(player) {
    if (checkHorizontals(player) || checkVerticals(player) || checkDiagonals(player)) {
        document.querySelector("#board").querySelector("#result").textContent = player + " has WON!";
    }
}

//check for a horizontal win
function checkHorizontals(player) {
    if ((grid[0][0] == player && grid[0][1] == player && grid[0][2] == player) ||
        (grid[1][0] == player && grid[1][1] == player && grid[1][2] == player) ||
        (grid[2][0] == player && grid[2][1] == player && grid[2][2] == player)) {
        return true;
    } else {
        return false;
    }
}

//check for a vertical win
function checkVerticals(player) {
    if ((grid[0][0] == player && grid[1][0] == player && grid[2][0] == player) ||
        (grid[0][1] == player && grid[1][1] == player && grid[2][1] == player) ||
        (grid[0][2] == player && grid[1][2] == player && grid[2][2] == player)) {
        return true;
    } else {
        return false;
    }
}

//check for a diagonal win
function checkDiagonals(player) {
    if ((grid[0][0] == player && grid[1][1] == player && grid[2][2] == player) ||
        (grid[0][2] == player && grid[1][1] == player && grid[2][0] == player)) {
        return true;
    } else {
        return false;
    }
}

//if all cells have a mark, then it is a draw
function checkForDraw() {
    if (!document.querySelector("#board").querySelector("#result").textContent.endsWith("has WON!")) {
        let draw = 0;
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                if (grid[i][j] != " ") {
                    draw++;
                }
            }
        }
        if (draw == 9) {
            document.querySelector("#board").querySelector("#result").textContent = "DRAW!";
        }
    }
}