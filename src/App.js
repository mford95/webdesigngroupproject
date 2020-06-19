import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Landing from './pages/js/Landing';
import './App.css';
import Nav from "./components/js/Nav";
import CoursePage from './pages/js/CoursePage';
import interactionMajor from './pages/js/InteractionMajor';

function App() {
  return (
    <div className="App">
   <Router>
        <Nav />
        <Route path="/Landing" component={Landing} />
        <Route path="/CoursePage" component={CoursePage} />
        <Route path="/interactionMajor" component={interactionMajor} />
     </Router>
    </div>
  );
}

export default App;
