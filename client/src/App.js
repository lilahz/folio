import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import LandingComponent from './Components/LandingComponent/LandingComponent';
import ProjectCarouselComponent from './Components/ProjectComponent/ProjectCarouselComponent';
import RegisterComponent from './Components/RegisterComponent/RegisterComponent';


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
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
