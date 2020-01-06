let amountOfRows = 1;
let amountOfColumns = 1;

//  add row to grid
function addRows() {
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i=0; i< amountOfColumns; i++){
        let cell = document.createElement("td");
        newRow.appendChild(cell);
    }

    mainGrid.appendChild(newRow);
    amountOfRows++;
    document.getElementById("rowcount").innerHTML = "Row Count: " + (amountOfRows - 1);
}

//  remove row from grid
function removeRows(){
    let mainGrid = document.getElementById("main-grid");
    let cellRemove = mainGrid.lastElementChild;

    if(cellRemove === null) {
        console.log("No more cells!");
    } else {
        mainGrid.removeChild(cellRemove);
    }
    amountOfRows--;
}

function addColumns(){

}

function removeColumns(){
    
}