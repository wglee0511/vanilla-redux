const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector("input");

const makeList = (text) => {
  const li = document.createElement("li");
  li.innerText = text;
  ul.appendChild(li);
  input.value = "";
}

const handleSubmit = (event) =>{
  event.preventDefault();
  const textValue = input.value;
  makeList(textValue);
};

const init = () => {
  form.addEventListener("submit", handleSubmit);
};

init();