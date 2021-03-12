import {createStore} from "redux";

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector("input");

const todos = {
  add:"ADD",
  del:"DEL"
};

const addActionType = text => {
  return {
    type:todos.add,
    text
  }
}

const delActionType = id => {
  return {
    type:todos.del,
    id
  }
}

const todosState = (state = [], action) => {
  switch (action.type) {
    case todos.add:
      return [{text: action.text, id: Date.now()}, ...state];
    case todos.del:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(todosState);

store.subscribe(()=> console.log(store.getState()));

const handleStoreDel = id => {
  store.dispatch(delActionType(id))
}

const handleBtnDel = (event) =>{
  const id = parseInt(event.target.parentNode.id, 10);
  handleStoreDel(id)
};

const handleAddList = () =>{
  const toDoData = store.getState();
  ul.innerHTML = "";
  toDoData.map(todo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.id = todo.id;
    li.innerText = todo.text;
    btn.innerText = "del";
    btn.addEventListener("click", handleBtnDel);
    li.appendChild(btn);
    ul.appendChild(li);

  })
    
}
store.subscribe(handleAddList);

const handleStoreAdd = text => {
  store.dispatch(addActionType(text))
}


const handleSubmit = (event) =>{
  event.preventDefault();
  const textValue = input.value;
  input.value = "";
  handleStoreAdd(textValue);
  

};

const init = () => {
  form.addEventListener("submit", handleSubmit);
  console.log(store)
};

init();