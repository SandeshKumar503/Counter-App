let count = 0;

function changeNumber() {
  document.getElementById("count").textContent = count;
  const counter = document.getElementById("counter");

  if (count === 0) {
    counter.textContent = "ZERO";
  } else if (count > 0 && count <= 20) {
    counter.textContent = count.toString();
  }
}

function increase() {
  if (count < 20) {
    count++;
    changeNumber();
  }
}

function decrease() {
  if (count > 0) {
    count--;                
    changeNumber();
  }
}

