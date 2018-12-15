import React, { Component } from 'react';

import './App.css';
import {Provider} from 'react-redux';
import store from './Store/store';
import Number from './Components/Number'
import Headers from './Components/header'
// import TodoList from './Components/TodoList'
import MyTodo from './Classes/MyTodo'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <div className="App">
         <Headers onAdd={this.addTodo}/>
         {/* <Number/> */}
        
         </div>
      </Provider>  
   
    );
  }

addTodo = (todo)=> {
  // this.state.todoList.push(todo);
  this.setState({todoList: [ ...this.state.todoList, new MyTodo(1, "te", false) ] });
}}
export default App;
