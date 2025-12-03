let inputBox = document.getElementById("inputBox");
let submitBtn = document.getElementById("btn");
let list = document.getElementById("list");
let arr = [];
submitBtn.addEventListener("click", () => {
  let value = inputBox.value;
  inputBox.value =''
  arr.push(value);
  loadData();
});

function loadData() {
  list.innerHTML = "";
  arr.forEach((item, index) => {
    console.log(item);
    let li = document.createElement("li");
    li.classList.add("list-item");
    li.dataset.id = index;
    li.addEventListener("click", () => {
      removeItem(li.dataset.id);
    });
    li.innerText = item;
    list.appendChild(li);
  });
}

function removeItem(index){
arr.splice(index,1)
loadData()
}
