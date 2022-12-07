import React from "react";
import '../../App.css';
import { tablesList } from "../../tablesList";

export const Tables = () => {
  return (
    <div className="tablesList">
      {tablesList.map(table => 
        <div className="table">
        Number: {table.id}
      </div>)}
    </div>
  )
}