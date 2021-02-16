import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import './css_sass/Main.scss';
import Navbar from './hedar_footer/Navbar';
import home from './pages/Home';
import About from './pages/About';
import service from './pages/Service';
import skill from './pages/Skill';
import portfolio from './pages/Portfolio';
import Footer from './hedar_footer/Footer';




function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={service}/>
        <Route exact path="/skill" component={skill}/>
        <Route exact path="/portfolio" component={portfolio}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
