import React from 'react';
import axios from 'axios';
import { Stocks } from '../Stocks';

const { useState, useEffect } = React


const App = (props) => {
  
  const [response,setResponse] = useState([]);
  const [res,setRes] = useState([]);

  const displayNewItem =() => {
    return (
      <div>Hiiiiiiiiiiiiiiiiii</div>
    );
  }


  const sampleJSON = {
    "data": {
      "name1": "Pluralsight",
      "name2": "Sougata" 
    }
  }
   
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        setResponse(response)
      })
      .catch(error => console.log(error));
    
  }, []);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        setRes(response)
      })
      .catch(error => console.log(error));
    
  }, []);
  

  const status1 = response.status;
  const status2 = res.status;
  console.log(props.color);
  console.log(Object.keys(sampleJSON.data)[0]);
  console.log(Object.values(sampleJSON.data)[0]);
  console.log(Object.keys(sampleJSON.data)[1]);
  console.log(Object.values(sampleJSON.data)[1]);    
                           
  return (
    <div>
         {/*  {status1 === 200 && status2 === 200  ? <button onClick={() => props.clickMe()}>Deploy</button> : null} */}
         {props.color}
         <Stocks param1 = "Twitter Inc"/>
         <displayNewItem/>
      </div>

      
  );
}

export default App;
//ReactDOM.render(<App />, document.getElementById("app"));
