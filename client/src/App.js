import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";
import HowItWorks from "./pages/HowItWorks";
import LogIn from "./pages/LogIn";


const App = () =>
  <Router>
      <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/HowItWorks" component={HowItWorks} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/Pricing" component={Pricing} />
            <Route exact path="/FAQ" component={Faq} />
            <Route exact path="/LogIn" component={LogIn} />
          </Wrapper>
      </div>
  </Router>

export default App;


