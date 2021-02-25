import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import LandingComponent from './Components/LandingComponent/LandingComponent';
import ProjectCarouselComponent from './Components/HomeComponent/ProjectComponent/ProjectCarouselComponent';
import RegisterComponent from './Components/RegisterComponent/RegisterComponent';
<<<<<<< HEAD
import AllProjects from './Components/HomeComponent/ProjectComponent/AllProjects';
import AllJuniors from './Components/HomeComponent/JuniorComponent/AllJuniors';
=======
import RegisterForm from './Components/RegisterComponent/RegisterForm';
import AllProjectsComponent from './Components/ProjectComponent/AllProjectsComponent';
import AllJuniorsComponent from './Components/JuniorComponent/AllJuniorsComponent';
>>>>>>> 7f384feb41f86b297839feb8ce75659609fe39bf
import AboutComponent from './Components/AboutComponent/AboutComponent';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBarComponent />
          <div className="App">
            <Route exact path="/" component={LandingComponent}>
              <LandingComponent />
              <ProjectCarouselComponent />
            </Route>
            <Route path="/register">
              <RegisterComponent />
            </Route>
            <Route path="/home/projects">
              <AllProjects />
            </Route>
            <Route path="/home/juniors">
              <AllJuniors />
            </Route>
            <Route path="/home/about">
              <AboutComponent />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
