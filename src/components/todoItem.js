//-----------------Todo ListReact Assignment------------------
//------------------------IT18059878--------------------------
//--------------------Abdurrahumaan A.N-----------------------
//------------------------------------------------------------

import React, {Component} from 'react';


class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit, handleDone, completed} = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6 className={ completed ? "done": "notDone"}>{title}</h6>

                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fas fa-edit"/>
                    </span>
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fas fa-trash"/>
                    </span>
                    <span className="mx-2 text-success" onClick={handleDone}>
                        <i className="fas fa-check-square"/>
                    </span>
                </div>
            </li>
        );
    }
}

export default TodoItem;