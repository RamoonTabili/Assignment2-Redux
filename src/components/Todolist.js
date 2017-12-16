import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

class Todolist extends Component {
    render() {
        const todos = this.props.todoList.map((item) => {
            return (
                <Todo {...item} onClick={this.props.onTodoClick} />
            )
        });
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (e) => dispatch(actions.toggleStatus(e.target.closest("li").id.split("-")[1]))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);