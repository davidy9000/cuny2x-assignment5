let amountOfRows = 1;
let amountOfColumns = 1;
let color = "red"

//  add row to grid
function addRows() {
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i=0; i< amountOfColumns; i++){
        let cell = document.createElement("td");
        cell.setAttribute("onclick","changeColor(this)")
        newRow.appendChild(cell);
    }

    mainGrid.appendChild(newRow);
    amountOfRows++;
    document.getElementById("rowcount").innerHTML = "Row Count: " + amountOfRows;
}

//  remove row from grid
function removeRows(){
    let mainGrid = document.getElementById("main-grid");
    let cellRemove = mainGrid.lastElementChild;

    if(cellRemove === null) {
        console.log("No more cells!");
    }
    else {
        mainGrid.removeChild(cellRemove);
    }
    amountOfRows--;
    document.getElementById("rowcount").innerHTML = "Row Count: " + amountOfRows;
}

//  add columns to grid
function addColumns(){
    let allRows = document.getElementsByTagName("tr");
    console.log(allRows);

    for(let i=0; i< amountOfRows; i++){
        let cell = document.createElement("td");
        allRows[i].appendChild(cell);
    }

    amountOfColumns++;
    document.getElementById("colcount").innerHTML = "Column Count: " + amountOfColumns;
}

function removeColumns(){

}

function changeColor(cell){
  cell.className = color + "-cell"
}

function selectColor(){
  color = document.getElementById("myDropdown").value;
  console.log(color)
}
