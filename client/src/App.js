import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import LandingComponent from './Components/LandingComponent/LandingComponent';
import RegisterComponent from './Components/RegisterComponent/RegisterComponent';
// import NewProjectForm from './Components/NewProjectComponent/NewProjectForm';
import AllProjects from './Components/HomeComponent/ProjectComponent/AllProjects';
import AllJuniors from './Components/HomeComponent/JuniorComponent/AllJuniors';
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
            </Route>
            <Route path="/register">
              <RegisterComponent />
            </Route>
            {/* <Route path="/new_project">
              <NewProjectForm />
            </Route> */}
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
