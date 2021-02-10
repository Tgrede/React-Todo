import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {nanoid} from 'nanoid'


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      todos: [{
        task: '',
        id: nanoid(),
        completed: false
      }],
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
        ...this.state.todos,
        {
          task: this.state.todoText,
          id: nanoid(),
          completed: false
        }
      ],
      todoText: ''
    })
  }

  handleClick = (id) => {
    console.log('click')
    this.setState({
      todos: [...this.state.todos,{

      }]
    })
  }


  componentDidUpdate(){
    console.log(this.state.todoText)
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
        clickHandler={this.clickHandler} 
        todos={this.state.todos}
        />

      </div>
    );
  }
}

export default App;
