import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserHomeProfile from "./pages/UserHomeProfile";
import LeaderboardPage from "./pages/LeaderBoardPage";
import CreateAccount from "./pages/CreateAccount";
import LoginPage from './pages/LoginPage';
import NewGamePage from './pages/NewGamePage';
import RulesNScoringPage from './pages/RulesNScoringPage';
import Dashboard from "./Dashboard";
import LandingPage from "./pages/LandingPage/landingPage";
import "./App.css" 

// Build Router
function App() {
    return(
        <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/userprofile" component={UserHomeProfile} />
          <Route exact path="/leaderboard" component={LeaderboardPage} />
          <Route exact path="/createaccount" component={CreateAccount} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/newgamepage" component={NewGamePage} />
          <Route exact path="/rulesnscoringpage" component={RulesNScoringPage} />
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
