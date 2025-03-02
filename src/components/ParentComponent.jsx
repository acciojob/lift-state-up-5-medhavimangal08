import React, { useState } from "react";
import ReactDOM from "react-dom";

const ParentComponent = ({ isLoggedIn }) => {
  return (
    <div>
      <h1>Parent Component</h1>
      {isLoggedIn && <p>You are logged in!</p>}
    </div>
  );
};

export default ParentComponent;
