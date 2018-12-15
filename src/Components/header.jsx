import React, { Component } from 'react';

import {increment,decrement} from '../Actions/MathAction';
import {addStudent} from '../Actions/TextAction';
import {connect} from 'react-redux';

class Header extends Component {
    state = { 
        text: "", 

     }
    render() { 
        return ( <div>
                  <nav class="navbar navbar-light bg-primary">
  <div class= "form-inline">
 <a class="navbar-brand bg-success" className="bg-primary">{ this.props.count }</a>
 <input class="form-control mr-sm-2" type="Text" placeholder="Enter Some text "onChange={(e)=> this.setState({text: e.target.value})} aria-label="Text"/>
    <button class="btn btn-primary my-2 my-sm-0" onClick={()=> this.props.addStudent(this.state.text)}>Add</button></div>
</nav>

            
         
   

    <ul>
            { 
                this.props.data.studentList.map(d => <li><h1 >{d}</h1>
                    <div >
        <h1 > {this.props.count1 }</h1>
        </div>
        <div className="row">
        <button className="btn btn-primary my-2 my-sm-0 col" onClick={()=> this.props.increment(this.state.count1)}>increment</button>
        <button className="btn btn-danger my-2 my-sm-0  col" onClick={()=> this.props.decrement(this.state.count1)}>Decrement</button>
         </div>   </li>
                    )
            }
             </ul>
        </div> );
    }
   
}

const mapStateToProps = state => ({
    data: state.TextReducer,
    count: state.TextReducer.count,
    count1: state.Math.count
});

export default  connect(mapStateToProps, { addStudent ,increment,decrement})(Header);


