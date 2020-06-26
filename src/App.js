import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import HomeMain from "./components/Home/HomeMain";
import ProjectMain from "./components/Projects/ProjectMain";
import ResumeMain from "./components/Resume/ResumeMain";
import Navbar from "./components/Navbar";
import Default from "./components/Default";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeMain} />
        <Route path="/resume" component={ResumeMain} />
        <Route path="/projects" component={ProjectMain} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
