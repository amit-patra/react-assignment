import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './assets/style.css'
// import './components/Form/form.css'
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
// import Login from './components/Auth/Login/Login';
// import Dashboard from './components/Dashboard/Dashboard';
// import Header from './components/Header/Header';
// import FROM from './components/Form/Form';
// import CustomElement from './components/CustomElement';
// import ScmTools from './components/Context-SCM/ScmTools';
  import ToolsComponent from './components/ContextComponent/ToolsComponent' ;
  import ToolsList from './components/ContextComponent/ToolsList';
class App extends Component {
  render() {
    return (
      <div className="App">
       
          <Router>
          {/* <Header /> */}
          <Switch>
              
              <Route exact path="/" component={ToolsComponent} />
              <Route exact path="/viewTools" component={ToolsList} />
          </Switch>
            </Router> 
            {/* <FROM /> */}
            {/* <CustomElement /> */}
            {/* <ScmTools /> */}
            {/* <ToolsComponent /> */}
            {/* <ToolsList /> */}
      </div>
    );
  }
}

export default App;
