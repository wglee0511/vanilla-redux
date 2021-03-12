import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreator } from "../store";

function ToDo(props) {
    const {text, id ,delToDo} = props;
    console.log(props)
    return (
        <Link to={`/${id}`}> 
        <li>
        {text}<button onClick={delToDo}>DEL</button>
        </li>
        </Link>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    return {
        delToDo: () => dispatch(actionCreator.delToDo(ownProps.id))
    }
};

export default connect(null, mapDispatchToProps)(ToDo);