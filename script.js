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
  let verText = this.document.getElementById("version");

  const ver = "v0.0.1"
  const funcText = {"logn": "\\log N", "sqrtn": "\\sqrt{N}", "n": "N", "nlogn": "N\\log N", "n2": "N^2", "n2logn": "N^2\\log N",
                    "n3": "N^3", "n4": "N^4", "2-n": "2^N", "n2-n": "N2^N", "nfc": "N!"
                   }

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
    showResult(0, 0, 0, orderSelect.value)
  }

  function showResult(a, b, tm, fc) {
    resultA.textContent = a;
    resultB.textContent = b;
    resultTime.textContent = tm;
    func.textContent = "\\(f(N)=" + funcText[fc] + "\\)";
    MathJax.typeset([func]);
  }

  addRowButton.addEventListener("click", addRow);
  remRowButton.addEventListener("click", remRow);
  calcButton.addEventListener("click", calculate);
  verText.textContent = ver;
});

