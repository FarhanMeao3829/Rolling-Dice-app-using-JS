var dice;


var stopped = true;
var t;

function change() {
  var random = Math.floor(Math.random() * 100);
  dice.innerHTML = [random];
}

function stopstart() {
  if (stopped) {
    stopped = false;
    t = setInterval(change, 100);
  } else {
    clearInterval(t);
    stopped = true;
  }
}

window.onload = function () {
  dice = document.getElementById("dice");
  stopstart();
};
