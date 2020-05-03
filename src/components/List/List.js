import React, { Fragment } from "react";
import classes from './list.module.css';
import { FaTrashAlt } from 'react-icons/fa';

const List = (props) => {

    const deleteItemHandler = (id) => {
        const todosList = props.todos.filter( item => {
            if(item.id !== id) {
                return true;
            }
            return false;
        });
        props.setTodos(todosList);
    }

    const completeItemHandler = (id) => {
        let updatedTodos = [...props.todos];
        updatedTodos = updatedTodos.map(item => {
            if(item.id === id){
                item.status = !item.status;
            }
            return item;
        });
        props.setTodos(updatedTodos);
    }

    return (
        <div>
            <ul type="none" className={classes.List}>
                {props.todos.map((item) => {
                    if(item.status !== true){
                        return (
                            <Fragment key={item.id}>
                                <li onClick={() => completeItemHandler(item.id)}>{item.title}</li>
                                <span role="img" aria-label="delete" onClick={() => deleteItemHandler(item.id)}><FaTrashAlt></FaTrashAlt></span>
                            </Fragment>
                        );
                    }
                    else {
                        return (
                            <Fragment key={item.id}>
                                <li className={classes.lineThrough} onClick={() => completeItemHandler(item.id)}>{item.title}</li>
                                <span role="img" aria-label="delete" onClick={() => deleteItemHandler(item.id)}><FaTrashAlt></FaTrashAlt></span>
                            </Fragment>
                        ); 
                    }
                })}
            </ul>
        </div>
    );
};

export default List;
