import {createStore} from "redux";
import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit';

/*
const addToDo = createAction("ADD")
const delToDo = createAction("DEL")
*/

/*const reducer = (state=[], actions) =>{
    switch (actions.type) {
        case addToDo.type:
            return [{text: actions.payload, id: Date.now()}, ...state];
        case delToDo.type:
            return state.filter(todo => todo.id !== actions.payload);
        default:
            return [];
    }
}*/

/*
const reducer = createReducer([], {
    [addToDo]: (state, action) => [{text: action.payload, id: Date.now()}, ...state],
    [delToDo]: (state, action) => state.filter(todo => todo.id !== action.payload)
})
*/
const toDos = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addToDo: (state, action) => [{text: action.payload, id: Date.now()}, ...state],
        delToDo: (state, action) => state.filter(todo => todo.id !== action.payload)
    }
})

const store = configureStore({reducer: toDos.reducer});

export const {
    addToDo,
    delToDo
} = toDos.actions;

export default store;