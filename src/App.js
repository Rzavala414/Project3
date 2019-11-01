import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserHomeProfile from './pages/UserHomeProfile'
import LeaderboardPage from "./pages/LeaderBoardPage";

import LoginPage from './pages/LoginPage'
import NewGamePage from './pages/NewGamePage'
import RulesNScoringPage from './pages/RulesNScoringPage'
import Dashboard from "./Dashboard";
import "./App.css" 

// Build Router
function App() {
    return(
        <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={UserHomeProfile} />
          <Route exact path="/UserHomeProfile" component={UserHomeProfile} />
          <Route exact path="/LeaderBoardPage" component={LeaderboardPage} />
          <Route exact path="/LoginPage" component={LoginPage} />
          <Route exact path="/NewGamePage" component={NewGamePage} />
          <Route exact path="/RulesNScoringPage" component={RulesNScoringPage} />
          <Route exact path="/Dashboard" component={Dashboard} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
    )
}
// bring in components for router and route
// look at package.jason react-router-dom
export default App;
