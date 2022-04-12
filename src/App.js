import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route> 
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
