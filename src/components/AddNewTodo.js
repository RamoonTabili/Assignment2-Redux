import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

class AddNewTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.addTodoValue} onChange={this.props.addTodoChanged} placeholder="Add New Todo" />
                <button className="add" onClick={this.props.saveNewTodo}>➕</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addTodoValue: state.addTodoValue
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoChanged: (e) => dispatch(actions.addTodoChanged(e.target.value)),
        saveNewTodo: () => dispatch(actions.saveNewTodo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTodo);