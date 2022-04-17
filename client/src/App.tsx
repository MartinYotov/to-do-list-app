import React, { createContext } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ToDoList from './components/ToDoList';
import AddToDoFrom from './components/AddToDoForm';
import ToDoService, { IToDoService } from './services/todo-service';
import http from './http/http';
import allReducer from './redux/reducers';
import './App.css';
import ToDoFilter from './components/ToDoFilter';

const toDoService: IToDoService = new ToDoService(http);

export const ServiceContext = createContext<IToDoService>(toDoService);
//@ts-ignore
const toDoStore = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
