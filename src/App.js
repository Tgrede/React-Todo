import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {nanoid} from 'nanoid'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [],
      todoText: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      todoText: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      todos: [
        {
          task: this.state.todoText,
          id: nanoid(),
          completed: false
        },
        ...this.state.todos
      ],
      todoText: ''
    })
  }
  handleClick = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
        todoText={this.state.todoText} 
        handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange} 
        />
        <TodoList 
        handleClick={this.handleClick}
        todos={this.state.todos}
        />

      </div>
    );
  }
}

export default App;
