import React, { Component } from 'react'
import App from './hooks/App.js';
import User from './hooks/User.js';
import {toast} from 'react-toastify';

toast.configure();

class Test extends Component {

    handleSubmit = () => {
        console.log('I am inside handle Submit');
        toast.info("hello I am inside Test component");
    }
 
  render() {
      let value,value1 ;
      value = <User/>;

      value1 = <App clickMe={this.handleSubmit} color="Blue"/>;
      
      
    return (
        <div>
           {value1}
        </div>
      
    )
  }
}

export default Test;