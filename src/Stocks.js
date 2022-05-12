import React from "react";
import "./App.css";
import { stockData } from "./data";

export const Stocks = (props) => {
    const param1 = props.param1;
  
  return (
    
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              {data.company +
                " , " +
                data.ticker +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
            </div>
          );
        })
        } 

        

      
      </div>
    
  );
};