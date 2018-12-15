import React, { Component } from 'react';

import {increment,decrement} from '../Actions/MathAction';
import {connect} from 'react-redux';

class Number extends Component {
    state = { 
  

     }
    render() { 
        return ( 
        
        <div className="Container">
          <div >
        <h1 className="bg-primary"> {this.props.count }</h1>
        </div>
        <div className="row">
        <button className="btn btn-primary my-2 my-sm-0 col" onClick={()=> this.props.increment(this.state.count)}>increment</button>
        <button className="btn btn-danger my-2 my-sm-0  col" onClick={()=> this.props.decrement(this.state.count)}>Decrement</button>
         </div>
        </div> );
    }
   
}

const mapStateToProps = state => ({
    
    count: state.Math.count
});

export default  connect(mapStateToProps, { increment,decrement })(Number);


