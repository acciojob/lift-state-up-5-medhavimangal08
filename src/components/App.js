import React, { useState } from "react";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

const App = () => {
  let [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div>
      {/* Do not remove the main div */}
      <ParentComponent isLoggedIn={isLoggedIn}></ParentComponent>
      <ChildComponent
        isLoggedIn={isLoggedIn}
        setisLoggedIn={setisLoggedIn}
      ></ChildComponent>
    </div>
  );
};

export default App;
