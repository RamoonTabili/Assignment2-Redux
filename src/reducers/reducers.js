import { TOGGLE_STATUS, ADD_TODO_CHANGED, SAVE_NEW_TODO } from "../actions/actions";

export default function reducers(state, action) {
    let newState = Object.assign({}, state);
    let newList = newState.todoList.slice();

    switch(action.type) {
        case TOGGLE_STATUS:
            for (let i = 0; i < newList.length; i++) {
                let todo = newList[i];
                let id = action.id;
                if (todo.id == id) {
                    todo.status = (todo.status) ? 0 : 1;
                    break;
                }
            }
            newState.todoList = newList;
            break;
        case ADD_TODO_CHANGED:
            let text = action.item
            newState.addTodoValue = text;
            break;
        case SAVE_NEW_TODO:
            let newTodoItem = {};
            const lastId = newList[newList.length-1].id;
            newTodoItem.id = lastId+1;
            newTodoItem.key = lastId+1;
            newTodoItem.text = newState.addTodoValue;
            newTodoItem.status = 0;
            newList.push(newTodoItem);
            newState.todoList = newList;
            break;
        default:
            return state;
    }

    return newState;
}