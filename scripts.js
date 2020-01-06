let amountOfRows = 1;
let amountOfColumns = 2;

function addRows() {
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i=0; i< amountOfColumns; i++){
        let cell = document.createElement("td");
        newRow.appendChild(cell);
    }

    mainGrid.appendChild(newRow);
    amountOfRows++;
}

function removeRows(){

}

function addColumns(){

}

function removeColumns(){
    
}