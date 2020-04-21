//-----------------Todo ListReact Assignment------------------
//------------------------IT18059878--------------------------
//--------------------Abdurrahumaan A.N-----------------------
//------------------------------------------------------------

import React, {Component} from 'react';
import TodoInput from "./components/todoInput"; //import todoInput.js
import TodoList from "./components/todoList"; //import todoList.js

import "bootstrap/dist/css/bootstrap.min.css"; //download the bootstrap library and import here
import uuid from "uuid/v4"; //install and import uuid
import './App.css';


class App extends Component{
    state={
        items:[],
        id:uuid(),
        item:'',
        editItem:false,
        completed:false
    };


    handleChange = (e) => {
        this.setState({
            item:e.target.value
        });
    };

    //handle add items function
    handleSubmit = (e) => {
        e.preventDefault();

        const newItem ={
            id:this.state.id,
            title:this.state.item,
            completed:false

        };

        console.log(newItem);

        const updatedItems = [newItem,...this.state.items];

        this.setState({
            items: updatedItems,
            item:'',
            id: uuid(),
            editItem: false,
            completed:false
        });
    };

    //handle clear tasks function
    clearList = () =>{
        this.setState({
            items:[]
        })
    };

    //handle delete function
    handleDelete = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items:filteredItems
        })
    };

    //handle edit function
    handleEdit = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);

        console.log(selectedItem);

        this.setState({
            items:filteredItems,
            item:selectedItem.title,
            editItem:true,
            id:id
        })
    };

    //handle complete function
    handleDone = (id) => {

        this.setState({

            items:this.state.items.map(item => {
                if(item.id === id){
                    item.completed = !item.completed;
                }
                return item;
            })
        })
    };


  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">

                    <h4 className="text-center">Welcome! Let’s get started.</h4>

                    <h6> Add a new task by typing inside the type here field and submit by clicking the add task button,
                        Edit the submitted task by clicking the pen icon,
                        Delete a task by clicking the Trash icon and
                        cross your completetd task by clicking the check icon
                        and you can even uncross it by clicking the check button again and
                        clear your tasks list by clicking the clear all tasks button.</h6>

                    <h3 className="text-capitalize text-center"> Todo Tasks Input </h3>


                    <TodoInput
                        item={this.state.item}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        editItem={this.state.editItem}
                    />


                    <TodoList
                        items={this.state.items}
                        clearList={this.clearList}
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}
                        handleDone={this.handleDone}
                        completed={this.state.completed}
                    />
                </div>
            </div>
        </div>

    );
  }
}

export default App;
