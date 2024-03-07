import React, { useState } from 'react';
import classes from './AddTaskCard.module.css';

function AddTaskCard(props) {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAddTask = () => {
        if (taskName.trim() !== '' && description.trim() !== '') {
            // Create a new task object
            const newTask = {
                taskName: taskName,
                description: description
            };

            // Pass the new task to the parent component via props
            props.onAddTask(newTask);

            // Reset the input fields after adding the task
            setTaskName('');
            setDescription('');
        } else {
            // Notify the user if either task name or description is empty
            alert('Please enter both task name and description.');
        }
    };

    const handleCancel = () => {
        // Reset the input fields when the user cancels adding the task
        setTaskName('');
        setDescription('');

        // Execute the cancel action passed from the parent component via props
        props.onCancel();
    };

    return (
        <div className={classes.AddTaskCard}>
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={handleTaskNameChange}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={handleDescriptionChange}
            />
            <button onClick={handleAddTask}>Add</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
}

export default AddTaskCard;
