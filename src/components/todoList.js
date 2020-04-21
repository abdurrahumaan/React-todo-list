//-----------------Todo ListReact Assignment------------------
//------------------------IT18059878--------------------------
//--------------------Abdurrahumaan A.N-----------------------
//------------------------------------------------------------

import React, {Component} from 'react';
import TodoItem from "./todoItem"; //import todoItem.js

class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit, handleDone} = this.props;

        return (
            //tasks list edit,delete and complete
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center" text="center"> Todo Tasks List</h3>
                {
                    items.map(item => {
                        return(
                            <TodoItem
                                key={item}
                                title={item.title}
                                handleDelete={ ()=> handleDelete(item.id)}
                                handleEdit={ ()=> handleEdit(item.id)}
                                handleDone={ ()=> handleDone(item.id)}
                                completed={item.completed}
                            />
                        )
                    })
                }
                <button
                    type="button"
                    className="btn btn-danger btn-block text-capitalize mt-5"
                    onClick={clearList}
                >
                    clear all tasks
                </button>
            </ul>
        );
    }
}

export default TodoList;
