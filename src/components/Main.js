import React, {Component} from "react";
import Header from "./Header";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";


class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Todolist />
                <AddNewTodo />
            </div>
        )
    }
}

export default Main;