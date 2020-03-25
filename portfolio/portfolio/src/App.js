import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Introductions from "./pages/Introductions"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Dashboard from "./pages/Dashboard"


function App() {
  return (
    <div className="App">
     <Router>
    <div>
       <Switch>
          <Route exact path="/" component={Introductions} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      
    </div>
    </Router>
     
    </div>
  );
}

export default App;
