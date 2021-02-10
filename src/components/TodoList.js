import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
     render() {
          return (
               <div>
                    {this.props.todos.map((todo) => {
                         return (
                         <Todo 
                         handleClick={this.props.handleClick} 
                         todo={todo} 
                         key={todo.id}
                         />     
                    )})}
               </div>
          )
     }
}
