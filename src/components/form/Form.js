import React, { useState } from "react";
import List from "../List/List";
import classes from './form.module.css';

const Form = (props) => {
    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
        if(title === ''){
            return;
        }
        let id = Math.random().toString(36).slice(2);
        const status = false;
        let todoList = [...props.todos];
        todoList.push({
            id,
            title,
            status,
        });
        props.setTodos(todoList);
        setTitle("");
        e.preventDefault();
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    return (
        <div className={classes.Form}>
            <h1>To-Do List</h1>
            <div className={classes.formDiv}>
                <input type="text" value={title} onChange={handleTitle} placeholder="Add task..."/>
                <button onClick={handleSubmit}>+</button>
            </div>
            <List setTodos={props.setTodos} todos={props.todos}/>
        </div>
    );
};

export default Form;
