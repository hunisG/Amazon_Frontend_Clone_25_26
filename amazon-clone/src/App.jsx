import React from "react";
import Routing from './Routing'
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router> 
      <Routing />
    </Router>
  );
}

export default App;
