import React, { createContext } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ToDoList from './components/ToDoList';
import AddToDoFrom from './components/AddToDoForm';
import ToDoFilter from './components/ToDoFilter';
import ToDoService, { IToDoService } from './services/todo-service';
import http from './http/http';
import allReducer from './redux/reducers';
import './App.css';

const toDoService: IToDoService = new ToDoService(http);
export const ServiceContext = createContext<IToDoService>(toDoService);

const toDoStore = createStore(allReducer);

const App = () => {
  return (  
    <ServiceContext.Provider value={toDoService}>
      <Provider store={toDoStore}>
        <div id="main" className="container">
          <h4>Things to do:</h4>
          <ToDoFilter />
          <ToDoList />
          <AddToDoFrom />
        </div>
      </Provider>
    </ServiceContext.Provider>
  );
}

export default App;
