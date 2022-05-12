import React, { Component } from 'react';
 
class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
        comments: "Default Data Content",
        name: "This content is onloading the page"
    }
  }

  showThis=()=>{
    console.log("I am inside show this");
  }
 
  saveDataContent = () => {
      this.setState({ comments: "Good Luck Your Product Data Updated Content!"});
  }
  
  handler=(name)=>{
    this.setState({name:name});
  }
  render() {
    return (
      <div>
        <div className="h1 bg-suceess text-white text-center p-2">
          { this.state.comments }
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={this.saveDataContent}>
            Click Me
          </button>
        </div>
        <div className="text-center">
          <button className='btn btn-primary' onClick={this.handler.bind(this,"This content is going to be changed after button click")}>
            Click Me once again
           </button> 
        </div>
        <div className='h1 bg-suceess text-white text-center p-2'>
          {this.state.name}

        </div>
      </div>
    );
  }
}
 
export default Application;