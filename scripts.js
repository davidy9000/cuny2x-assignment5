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

//  add columns to grid
function addColumns(){
    let mainGrid = document.getElementById("main-grid");

    if(amountOfRows === 0){
        let newRow = document.createElement("tr");
        let newCol = document.createElement("td");
        newRow.appendChild(newCol);
        amountOfRows++;
        amountOfColumns++;
        mainGrid.appendChild(newRow);
    }
    else{
        let allRows = document.getElementsByTagName("tr");

        for(let i=0; i< amountOfRows; i++){
            let cell = document.createElement("td");
            cell.className = "white-cell"
            cell.setAttribute("onclick","changeColor(this)")
            allRows[i].appendChild(cell);
        }

        amountOfColumns++;
        document.getElementById("colcount").innerHTML = "Column Count: " + amountOfColumns;
    }
}

//  remove columns to grid
function removeColumns(){
    let allRows = document.getElementsByTagName("tr");

    if(allRows === null) {
        console.log("No more cells!");
    }
    else {
        for(let i=0; i< amountOfRows; i++){
            allRows[i].removeChild(allRows[i].lastElementChild);
        }
    }
    amountOfColumns--;
    document.getElementById("colcount").innerHTML = "Column Count: " + amountOfColumns;
}

//  changecolor
function changeColor(cell){
  cell.className = color + "-cell"
}

//   select color
function selectColor(){
  color = document.getElementById("myDropdown").value;
  console.log(color)
}

//   fill all
function fillAll(){
  cells = document.getElementsByTagName("td")
  for(i = 0; i < cells.length; i++){
    cells[i].className = color + "-cell"
  }
}

// fill empty
function fillEmpty(){
  cells = document.getElementsByClassName("white-cell")
  for(i = 0; i < cells.length; i++){
    cells[i].className = color + "-cell"
  }
}

// clear all
function clearAll(){
  cells = document.getElementsByTagName("td")
  for(i = 0; i < cells.length; i++){
    cells[i].className = "white-cell"
  }
}
