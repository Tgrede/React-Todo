import React, { Component } from 'react'
import styled from 'styled-components'

export default class Todo extends Component {


     render() {
          return (   
               <div onClick={() => this.props.handleClick(this.props.todo.id)}>   
                    <StyledTask>{this.props.todo.task}</StyledTask>
                    <p>{this.props.todo.completed ? 'Complete' : 'Not Complete'}</p>
               </div>
               )
     }
}

const StyledTask = styled.p`
     color:red;
`