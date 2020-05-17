import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Customers from './components/Customers';
import Trainings from './components/Trainings';
import Navigation from './components/Navigation';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/customers' component={Customers} />
            <Route path='/trainings' component={Trainings} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
