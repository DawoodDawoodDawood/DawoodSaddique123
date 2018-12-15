import React, { Component } from 'react';
class TodoList extends Component {
    state = {  }
    render() { 
        return (   <ul>
            { 
                this.props.data.studentList
            }
             </ul> );
    }
}
 
export default TodoList;