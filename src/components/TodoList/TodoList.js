//rsc

import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
    return (
        <ul className="todo-list">
            {props.todos.map((item, index) => (
                <li className="list-item" key={index + 'task'}>{item.task}</li>
            ))}
        </ul>
    );
};

export default TodoList;