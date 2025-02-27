import React, { useState } from "react";
import ReactDOM from "react-dom";

const ChildComponent = ({ setisLoggedIn, isLoggedIn }) => {
  function handleSubmit(e) {
    e.preventDefault();
    setisLoggedIn(true);
  }
  return (
    <div>
      {!isLoggedIn && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>UserName:</label>
            <input type="text"></input>
            <br></br>
            <label>Password:</label>
            <input type="password"></input>
            <br></br>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChildComponent;
