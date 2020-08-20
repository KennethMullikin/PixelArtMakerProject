
//Select Size Input
let rowsNumber = document.getElementById("inputHeight");
let columnsNumber = document.getElementById("inputWidth");

//Select Color Input
let colorPicker = document.getElementById("colorPicker");

//Select form
const gridForm = document.getElementById("sizePicker");

//Select pixelCanvas
const pixelCanvas = document.getElementById("pixelCanvas");


//adding function to clicking on "submit" to make the grid after selection of size by user
gridForm.addEventListener("submit", function(e) {
  pixelCanvas.innerHTML = ""; //makes grid empty
  e.preventDefault();
  makeGrid();
});


//makes the grid and lets user click to add colorChoice value
function makeGrid() {
  for (let i = 0; i < rowsNumber.value; i++) {
    let row = pixelCanvas.insertRow(i);
    for (let k = 0; k < columnsNumber.value; k++) {
      let cell = row.insertCell(k);
      cell.addEventListener("click", function(event) {
        var colorChoice = document.getElementById("colorPicker").value;
        cell.style.backgroundColor = colorChoice.value;
      });

    }
  }

}

//pixelCanvas.addEventListener('click', function (e) {
  //if (e.target.nodeName.toLowerCase() === "td") {
      //e.target.style.backgroundColor = colorPicker.value;
  //}
//});
