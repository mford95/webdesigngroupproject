import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import { Provider } from "./context/GlobalContextProvider";

import Landing from "./pages/js/Landing";
import InteractionPapers from "./pages/js/InteractionPapers";
import "./App.css";

import Nav from "./components/js/Nav";
import Footer from "./components/js/Footer";

function App() {
  return (
    <div className="App">

      <Provider>
        <Router>
          <Nav />
          <Route path="/Landing" component={Landing} />
          <Route path="/Interaction-papers/:id" component={InteractionPapers} />
        </Router>
      </Provider>

    </div>
  );
}

export default App;
