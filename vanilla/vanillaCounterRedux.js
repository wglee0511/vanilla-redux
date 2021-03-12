import {createStore} from "redux";

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const span = document.querySelector("span");

span.innerText = 0;

const counter = (state= 0, action) => {
  const type = action.type;
  if(type === "Add"){
    return state + 1;
  } else if (type === "Minus"){
    return state - 1;
  }
  return state;
}

let store = createStore(counter);


const init = () => {
  add.addEventListener("click", ()=> store.dispatch({type: "Add"}));
  minus.addEventListener("click", () => store.dispatch({type: "Minus"}));
  store.subscribe(() => span.innerText =  store.getState());
}

init()