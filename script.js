window.addEventListener("load", function () {
  document.querySelectorAll("table td.editable").forEach(elm => {
    elm.contentEditable = true;
  });
});
