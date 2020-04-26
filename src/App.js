import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';
import {Jumbotron} from './components/Jumbotron';
import CustomElement, { useScroll } from "./components/Element";
import NavBarNew from './components/NavBarNew';


function App() {

  const [scrollDirection, setScrollDirection] = useState(null);

  useScroll(direction => {
    setScrollDirection(direction);
  });
  return (
    <React.Fragment>
      <NavBarNew />
      <Jumbotron/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component ={Home} />
            <Route exact path="/about" component ={About} />
            <Route exact path="/contact" component ={Contact} />
            <Route component ={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>

  );
}

export default App;
