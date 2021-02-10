import React, { Component } from 'react'

export default class TodoForm extends Component {
     

     render() {
          return (
               <form onSubmit={this.props.handleSubmit}>
                  <input value={this.props.todoText} onChange={this.props.handleChange} />  
               </form>
          )
     }
}
