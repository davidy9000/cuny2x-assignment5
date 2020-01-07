let amountOfRows = 1;
let amountOfColumns = 1;
let color = "red"

//  add row to grid
function addRows() {
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i=0; i< amountOfColumns; i++){
        let cell = document.createElement("td");
        cell.className = "white-cell"
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

function addColumns(){

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

function fillAll(){
  cells = document.getElementsByTagName("td")
  for(i = 0; i < cells.length; i++){
    cells[i].className = color + "-cell"
  }
}

function fillEmpty(){
  cells = document.getElementsByClassName("white-cell")
  for(i = 0; i < cells.length; i++){
    cells[i].className = color + "-cell"
  }
}
