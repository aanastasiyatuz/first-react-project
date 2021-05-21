import React, {useState} from 'react';


const AddTodo = (props) => {

    const [task, setTask] = useState('');

    const handleInput = (e) => {
        setTask(e.target.value)
    }

    const handleAdd = () => {
        const newTask = {
            task,
            status: false,
            id: Date.now()
        }
        props.handleTask(newTask)
        setTask('')
    }

    return (
        <>
        <input value={task} onChange={handleInput} type="text"/>
        <button onClick={handleAdd}>Add task</button>
        </>
    );
};

export default AddTodo;