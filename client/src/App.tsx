import React, { createContext } from 'react';
import ToDoList from './components/ToDoList';
import AddToDoFrom from './components/AddToDoForm';
import ToDoService, { IToDoService } from './services/todo-service';
import http from './http/http';
import './App.css';

const toDoService: IToDoService = new ToDoService(http);

export const ServiceContext = createContext<IToDoService>(toDoService);

const App = () => {
  return (
    <ServiceContext.Provider value={toDoService}>
      <div id="main" className="container">
        <h4>Things to do:</h4>
        <ToDoList />
        <AddToDoFrom />
      </div>
    </ServiceContext.Provider>
  );
}

export default App;
