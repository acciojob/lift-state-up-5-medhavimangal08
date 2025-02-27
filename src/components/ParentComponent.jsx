import React, { useState } from "react";
import ReactDOM from "react-dom";

const ParentComponent = ({ setisLoggedIn, isLoggedIn }) => {
  return (
    <div>
      <h1>Parent Component</h1>
      {isLoggedIn && <p>You are loggedin</p>}
    </div>
  );
};

export default ParentComponent;
