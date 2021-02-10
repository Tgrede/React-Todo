import React, { Component } from 'react'

export default class TodoForm extends Component {
     

     render() {
          return (
               <form onSubmit={this.props.handleSubmit}>
                  <input value={this.props.todoText} onChange={this.props.handleChange} />  
                  <button type='submit'>Submit</button>
                  <button onClick={this.props.resetHandler} type='button'>Clear Completed Tasks</button>
               </form>
          )
     }
}
