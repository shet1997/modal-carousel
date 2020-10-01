import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Slider from './slider';
import { Route, Switch } from 'react-router-dom';
import ModelPop from './modelpop';


class App extends Component {
  
  render() {
    return (
        <div>
            <div className="container">
              <Slider />
              <Switch>
                <Route path="/subject1" render={props => <ModelPop {...props} /> } />
                <Route path="/subject2" render={props => <ModelPop {...props} /> } />
                <Route path="/subject3" render={props => <ModelPop {...props} /> } />
                <Route path="/subject4" render={props => <ModelPop {...props} /> } />
                <Route path="/subject5" render={props => <ModelPop {...props} /> } />
                <Route path="/subject6" render={props => <ModelPop {...props} /> } />
              </Switch>
            </div>
        </div>
    );
  }
}

export default App;
