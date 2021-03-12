import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "../store";

function ToDo(props) {
    const {text, delToDo} = props;
    console.log(props)
    return (
        <li>
        {text}<button onClick={delToDo}>DEL</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    return {
        delToDo: () => dispatch(actionCreator.delToDo(ownProps.id))
    }
};

export default connect(null, mapDispatchToProps)(ToDo);