import React, { Component } from 'react';
import MyHeader from './Components/Header';
import MyFooter from './Components/Footer';
import MainPage from './Components/mainPage';
import ChoosingDocumT from './Components/DocumT';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import './Components/styles.css';
import { BrowserRouter as Router,  Route} from 'react-router-dom';

import AllDocsStud from './Components/AllDocsStud'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={MyHeader}/>
          <Route exact path="/" component={MainPage}/>
         
          <Route exact path = "/teacher" component = {ChoosingDocumT}/> 
          
          <Route exact path = "/student" component = {AllDocsStud}/> 
          <Route path="/" component={MyFooter}/>
        </div>
      </Router>
    
    );
  }
}

export default App;
