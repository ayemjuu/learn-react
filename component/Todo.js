import React, { useState } from 'react';
import styles from './Todo.module.css';

const Card = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a task"
          className={styles.input}
        />
        <button onClick={handleAddTodo} className={styles.addButton}>Add</button>
      </div>
      <ul className={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} className={styles.listItem}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)} className={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
