window.addEventListener("load", function () {
  document.querySelectorAll("table td").forEach(elm => {
    elm.contentEditable = true;
  });
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
  // TODO
}

function remRow() {
  // TODO
}

function calculate() {
  // TODO
}

addRowButton.addEventListener("click", addRow);