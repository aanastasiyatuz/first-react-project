import React from 'react';


const AddTodo = (props) => {
    const handleInput = (e) => {
        props.onChangeInput(e.target.value)
    }

    return (
        <>
        <input onChange={handleInput} type="text"/>
        <button onClick={props.handleClick} className="btn">Add task</button>
        </>
    );
};

export default AddTodo;