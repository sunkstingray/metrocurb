import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";
import HowItWorks from "./pages/HowItWorks";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import LogIn from "./pages/LogIn";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import "./App.css";


const App = () =>
  <Router>
      <div>
          <Wrapper>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/HowItWorks" component={HowItWorks} />
            <Route exact path="/ContactUs" component={ContactUs} />
            <Route exact path="/Pricing" component={Pricing} />
            <Route exact path="/FAQ" component={Faq} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/LogIn" component={LogIn} />
            <Route exact path="/Admin" component={Admin} />
          </Wrapper>
          <Footer />
      </div>
  </Router>

export default App;


