import React from "react";
import { connect } from "react-redux";

function Detail (props){
    const {toDo} = props;
    console.log(props);
    return <>
    <h1>Detail</h1>
    <h1>Todo : {toDo?.text}</h1>
    <h5>created at : {toDo?.id}</h5>   
    </>;
}

const mapStateToProps = (state, ownProps) => {
    const {match:{params:{id}}} = ownProps;

    return {
        toDo: state.find(todo=> todo.id === parseInt(id,10))
    }
}

export default connect(mapStateToProps)(Detail)

