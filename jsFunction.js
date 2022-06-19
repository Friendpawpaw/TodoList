//Edit memo text function: Chloe
function editMemo() {
  let memoText = prompt("Write your memo!", "Hi, I am Memo :)");
  if (memo != null) {
    document.getElementById("memo").innerHTML = memoText;
  }
}

//Darg and Drop function: Chloe
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}