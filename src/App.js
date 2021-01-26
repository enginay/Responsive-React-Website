import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/sides/Home';
import Services from './components/sides/Services';
import Projekte from './components/sides/Projekte';
import SignUp from './components/sides/SignUp';
import Impressum from './components/sides/Impressum';


function App(){
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/projekte' component={Projekte} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/impressum' component={Impressum}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
