//Edit memo text function: Chloe
let memoID = document.getElementById("memo");
memoID.innerHTML = localStorage.getItem('memo');

function editMemo() {
  let memoText = prompt("Write your memo!", "Hi, I am Memo :)");
  if (memoText != null) {
    memoID.innerHTML = memoText;
    localStorage.setItem('memo', memoText);
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