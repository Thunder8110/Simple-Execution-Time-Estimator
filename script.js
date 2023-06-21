window.addEventListener("load", function () {
  document.querySelectorAll("table td").forEach(elm => {
    elm.contentEditable = true;
  });

  let addRowButton = document.getElementById("addRow");
  let remRowButton = document.getElementById("remRow");
  let calcButton = document.getElementById("calc");
  let inputTable = document.getElementById("input");
  let orderSelect = document.getElementById("order");
  let estSizeInput = document.getElementById("estSize");
  let resultA = document.getElementById("resA");
  let resultB = document.getElementById("resB");
  let resultTime = document.getElementById("resTime");
  let func = document.getElementById("func");

  function addRow() {
    let newRow = document.createElement("tr");
    let newData1 = document.createElement("td");
    let newData2 = document.createElement("td");
    newData1.contentEditable = true;
    newData2.contentEditable = true;
    newData1.textContent = "0";
    newData2.textContent = "0";
    newRow.appendChild(newData1);
    newRow.appendChild(newData2);
    inputTable.children[0].appendChild(newRow);
  }

  function remRow() {
    if(inputTable.children[0].children.length > 3) {
      inputTable.children[0].lastElementChild.remove();
    }
  }

  function calculate() {
    // TODO
  }

  addRowButton.addEventListener("click", addRow);
  remRowButton.addEventListener("click", remRow);
});

