import React, { useState } from "react"
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo } from "../store";


function Home (props){
    const {toDos, addToDo} = props;
    const [text, setText] = useState("");
    const onChange = (event) => {
        setText(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        setText("");
        addToDo(text);
    }
    return <>
    <h1>To Do</h1>
    <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
    </form>
    <ul>
        {toDos.map(todo => {
           return <ToDo text={todo.text} key={todo.id} id={todo.id} />
        })}
    </ul>
    </>

}

const mapStateToProps = (state) => {
    return {
        toDos: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: text => dispatch(addToDo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)