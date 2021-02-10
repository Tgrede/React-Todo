import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
     render() {
          return (
               <div onClick={this.props.clickHandler}>
                    {this.props.todos.map((todo) => {
                         return <Todo todo={todo} key={todo.id}/>
                    })}
               </div>
          )
     }
}
