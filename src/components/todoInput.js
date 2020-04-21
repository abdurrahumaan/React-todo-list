//-----------------Todo ListReact Assignment------------------
//------------------------IT18059878--------------------------
//--------------------Abdurrahumaan A.N-----------------------
//------------------------------------------------------------

import React, {Component} from 'react';

class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props;
        return (
            //input text field and add and edit submit button
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"> </i>
                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type your Task here"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit"
                            className={
                                editItem
                                ? "btn btn-block btn-success mt-3"
                                : "btn btn-block btn-primary mt-3"
                                }
                            >
                        {editItem ? "Edit this Task" : "Add Task"}
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoInput;