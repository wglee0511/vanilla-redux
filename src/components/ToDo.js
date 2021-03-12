import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreator, delToDo } from "../store";

function ToDo(props) {
    const {text, id ,delToDo} = props;
    console.log(props)
    return (
        <li>
        <Link to={`/${id}`}> 
        {text}
        </Link>
        <button onClick={delToDo}>DEL</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    return {
        delToDo: () => dispatch(delToDo(ownProps.id))
    }
};

export default connect(null, mapDispatchToProps)(ToDo);