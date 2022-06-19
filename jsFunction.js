//Edit memo text function: Chloe
function editMemo() {
  let memoText = prompt("Write your memo!", "Hi, I am Memo :)");
  if (memo != null) {
    document.getElementById("memo").innerHTML = memoText;
  }
}