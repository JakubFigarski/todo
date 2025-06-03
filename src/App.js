import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>📝 Planer - Lista zadań</h1>
      <div className="input-area">
        <input
          type="text"
          placeholder="Dodaj nowe zadanie..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Dodaj</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
