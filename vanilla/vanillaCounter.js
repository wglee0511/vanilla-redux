
const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const span = document.querySelector("span");

let count = 0;

span.innerText = count;
const updateText = () => {
  span.innerText = count;
}

const handleAdd = () => {
  count = count + 1;
  updateText();
}
const handleMinus = () => {
  count = count - 1;
  updateText();
}

const init = () => {
  add.addEventListener("click", handleAdd);
  minus.addEventListener("click", handleMinus);
}

init()