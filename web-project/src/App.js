import React, { Component } from 'react';
import MyHeader from './Components/Header';
import MyFooter from './Components/Footer';
import MainPage from './Components/mainPage';
import ChoosingDocumT from './Components/DocumT';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import './Components/styles.css';
import { BrowserRouter as Router,  Route} from 'react-router-dom';
import ChoosingDocumS from './Components/DocumS';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={MyHeader}/>
          <Route exact path="/" component={MainPage}/>
         
          <Route exact path = "/teacher" component = {ChoosingDocumT}/>
          <Route exact path = "/student" component = {ChoosingDocumS}/>
          
          <Route path="/" component={MyFooter}/>
        </div>
      </Router>
    
    );
  }
}

export default App;
/**  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */