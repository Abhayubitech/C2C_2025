let isColorChange = false;
let hasBorder = false;
let isVisible = false;
let isMagnify = false;
let isDesc = false;

function toggleColor() {
  let boxes = document.getElementsByClassName("box");
  for (let elem of boxes) {
    if (elem) {
      !isColorChange
        ? (elem.style.backgroundColor = "tomato")
        : (elem.style.backgroundColor = "teal");
    }
  }
  isColorChange = !isColorChange;
}

function toggleBorder() {
  let boxes = document.getElementsByClassName("box");
  for (let elem of boxes) {
    if (elem) {
      !hasBorder
        ? (elem.style.border = "1px solid black")
        : (elem.style.border = "");
    }
  }
  hasBorder = !hasBorder;
}

function toggleVisibility() {
  let boxes = document.getElementsByClassName("box");
  for (let elem of boxes) {
    if (elem) {
      !isVisible ? (elem.style.opacity = "0") : (elem.style.opacity = "1");
    }
  }
  isVisible = !isVisible;
}

function toggleOrder() {
  let parent = document.getElementById("demo");

  !isDesc
    ? (parent.style.flexDirection = "row-reverse")
    : (parent.style.flexDirection = "row");

  isDesc = !isDesc;
}
function toggleSize() {
  let boxes = document.getElementsByClassName("box");
  for (let elem of boxes) {
    if (elem) {
      !isMagnify
        ? (elem.style.transform = "scale(1.1)")
        : (elem.style.transform = "scale(1)");
    }
  }
  isMagnify = !isMagnify;
}
