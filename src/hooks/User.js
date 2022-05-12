import React from "react";
import axios from "axios";
import { getHttp } from "../crud.js";

const { useState, useEffect } = React;

const User = () => {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState([]);

  const getDeployment = () => {
    getHttp("https://jsonplaceholder.typicode.com/users", "", valueRetrived);
  };

  const valueRetrived = (response) => {
    if (response.dataErr) {
      console.log("print error");
    } else {
      console.log("print success");
      setData(response.data);
      setResponse(response);
    }
  };

  useEffect(() => {
    /* axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        setData(response.data)
        setResponse(response)
        console.log(response.status);
      })
      .catch(error => console.log(error)); */
    getDeployment();
  }, []);

  const content = data;
  console.log(content.data);

  /* const listItems = content.map((item) =>
    <li>{ item.address.city }</li>
  ); */

  const status = response.status;

  function FancyButton() {
    return (
      <div>Hello</div>
    );
  }

  return (
    <div>
      <div>React & Axios api</div>
      <span>{status}</span>
      {/* <ul>
        {listItems}
      </ul> */}
      <FancyButton />
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById("app"));
export default User;
