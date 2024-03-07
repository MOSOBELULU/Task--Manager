import React, { useState } from 'react';
import './App.css';
import AddTaskCard from './components/AddTaskCard';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState({
    backlog: [],
    ready: [],
    inProgress: [],
    done: []
  });

  const handleAddButtonClick = () => {
    setShowAddTask(true);
  };

  const handleCancelAddTask = () => {
    setShowAddTask(false);
  };

  const handleAddTask = (task) => {
    setTasks({
      ...tasks,
      backlog: [...tasks.backlog, task]
    });

    setShowAddTask(false);
  };

  const handleDragStart = (e, taskIndex, columnId) => {
    // Set data to be transferred during drag
    e.dataTransfer.setData('taskIndex', taskIndex);
    e.dataTransfer.setData('columnId', columnId);
  };

  const handleDrop = (e, dropColumnId) => {
    // Prevent default behavior to avoid loading file in browser
    e.preventDefault();

    // Get data transferred during drag
    const draggedTaskIndex = e.dataTransfer.getData('taskIndex');
    const draggedColumnId = e.dataTransfer.getData('columnId');

    // Move task from the source column to the destination column
    const draggedTask = tasks[draggedColumnId][draggedTaskIndex];
    const updatedSourceColumn = tasks[draggedColumnId].filter((_, index) => index !== parseInt(draggedTaskIndex));
    
    setTasks({
      ...tasks,
      [draggedColumnId]: updatedSourceColumn,
      [dropColumnId]: [...tasks[dropColumnId], draggedTask]
    });
  };

  const handleDragOver = (e) => {
    // Prevent default behavior to enable drop
    e.preventDefault();
  };

  return (
    <div className="App">
      <div
        className="column"
        onDrop={(e) => handleDrop(e, 'backlog')}
        onDragOver={(e) => handleDragOver(e)}
      >
        <h2>Backlog</h2>
        {tasks.backlog.map((task, index) => (
          <div
            key={task.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index, 'backlog')}
            className="task"
          >
            <h3>{task.taskName}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
      <div
        className="column"
        onDrop={(e) => handleDrop(e, 'backlog')}
        onDragOver={(e) => handleDragOver(e)}
      >
        <h2>Ready</h2>
        {tasks.backlog.map((task, index) => (
          <div
            key={task.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index, 'backlog')}
            className="task"
          >
            <h3>{task.taskName}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
      <div
        className="column"
        onDrop={(e) => handleDrop(e, 'backlog')}
        onDragOver={(e) => handleDragOver(e)}
      >
        <h2>In Progress</h2>
        {tasks.backlog.map((task, index) => (
          <div
            key={task.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index, 'backlog')}
            className="task"
          >
            <h3>{task.taskName}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
      <div
        className="column"
        onDrop={(e) => handleDrop(e, 'backlog')}
        onDragOver={(e) => handleDragOver(e)}
      >
        <h2>Done</h2>
        {tasks.backlog.map((task, index) => (
          <div
            key={task.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index, 'backlog')}
            className="task"
          >
            <h3>{task.taskName}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
      {/* Repeat the above code for other columns (Ready, In Progress, Done) */}
      
      {showAddTask ? (
        <AddTaskCard onAddTask={handleAddTask} onCancel={handleCancelAddTask} />
      ) : (
        <button className="btn" onClick={handleAddButtonClick}>Add</button>
      )}
    </div>
  );
}

export default App;
