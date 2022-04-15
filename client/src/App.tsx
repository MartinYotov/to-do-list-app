import React from 'react';
import ToDoList from './components/ToDoList';
import { IToDoTask } from '../../shared/data-types';
import './App.css';
import AddToDoFrom from './components/AddToDoForm';

const mockToDos: IToDoTask[] = [
    { id: '1', text: 'Task 1', completed: true },
    { id: '2', text: 'Task 2', completed: false },
    { id: '3', text: 'Task 2', completed: false }
]

const App = () => {
  return (
    <div id="main" className="container">
      <h4>Things to do:</h4>
      <ToDoList toDoTasks={mockToDos} />
      <AddToDoFrom />
    </div>
  );
}

export default App;
