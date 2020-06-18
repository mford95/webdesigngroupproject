import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import { Provider } from "./context/GlobalContextProvider";

import Landing from "./pages/js/Landing";
import InteractionPapers from "./pages/js/InteractionPapers";
import "./App.css";
import Nav from "./components/js/Nav";
import CoursePage from './pages/js/CoursePage';
import Footer from "./components/js/Footer";
import InteractionMajor from "./pages/js/InteractionMajor"


function App() {
  return (
    <div className="App">


      <Provider>
        <Router>
          <Nav />
          <Route path='/' exact={true} component={Landing} />
          <Route path="/Landing" component={Landing} />
          <Route path="/InteractionMajor" component={InteractionMajor} />
          <Route path="/Interaction-papers/:id" component={InteractionPapers} />
          <Route path="/CoursePage" component={CoursePage} />
        </Router>
      </Provider>
      <Footer />

    </div>
  );
}

export default App;
