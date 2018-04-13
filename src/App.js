import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Remodeling from "./pages/Remodeling";
import Gallery from "./pages/Gallery";
import LogIn from "./pages/LogIn";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";





const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/remodeling" component={Remodeling} />
        <Route exact path="/signin" component={LogIn} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;