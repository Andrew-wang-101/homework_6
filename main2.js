window.onload = function() {
    countScheduled() 
  }

function countScheduled() {
  let counter = document.getElementById("counter");
  let count = JSON.parse(localStorage.getItem("key"));
  count = count.length;
  counter.innerHTML = count;
}

