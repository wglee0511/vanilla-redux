import {createStore} from "redux";

const ADD = "ADD";
const DEL = "DEL";

const addToDo = text => {
    return {
        type: ADD,
        text
    }
};
const delToDo = id => {
    return {
        type: DEL,
        id
    }
}

const reducer = (state=[], actions) =>{
    switch (actions.type) {
        case ADD:
            return [{text: actions.text, id: Date.now()}, ...state];
        case DEL:
            return state.filter(todo => todo.id !== actions.id);
        default:
            return [];
    }
}

const store = createStore(reducer);

export const actionCreator = {
    addToDo,
    delToDo
}

export default store;