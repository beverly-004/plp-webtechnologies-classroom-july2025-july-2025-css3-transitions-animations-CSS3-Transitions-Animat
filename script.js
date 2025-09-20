// Part 2: Function with Parameters and Return Value
function addNumbers(a, b) {
  return a + b;
}

// Scope demonstration
function showCalculation(x, y) {
  let result = addNumbers(x, y); // local scope
  document.getElementById("calcResult").textContent = "Result: " + result;
}

// Part 3: Trigger CSS Animation with JS
document.getElementById("animateBoxBtn").addEventListener("click", function() {
  let box = document.getElementById("animatedBox");
  box.classList.remove("animate"); // reset if already animated
  void box.offsetWidth; // force reflow
  box.classList.add("animate");
});