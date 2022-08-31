import React from "react";
import List from "./components/list.jsx";

import "./App.css";

function App() {
 

  return (
    <div className="main">
      <div className="container">
        <div className="title">Countries List</div>
        <div className="listContainer">
          <List/>
        </div>
      </div>
    </div>
  );
}

export default App;
