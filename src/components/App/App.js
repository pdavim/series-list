import React from "react";
import Main from "../Main";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Link to="/" className="link">
            My List of Series
          </Link>
        </p>
      </header>
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

export default App;
