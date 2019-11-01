import React, { Component } from "react";
import UserHomeProfile from "./pages/UserHomeProfile";
import NewGamePage from "./pages/NewGamePage";
import LeaderboardPage from "./pages/LeaderBoardPage";
import RulesNScoringPage from "./pages/RulesNScoringPage";
import Navbar from "./components/NavBar";

class Dashboard extends Component {
    state = {
        page:"userPage"
    }
    setCurrentPage=(page)=>{
        this.setState({page});
    }
    render() {
        let currentPage;
        if (this.state.page === "userPage") {
            currentPage = <UserHomeProfile />
        }
        else if (this.state.page === "newGame") {
            currentPage = <NewGamePage />
        }
        else if (this.state.page === "leaderboard") {
            currentPage = <LeaderboardPage />
        }
        else if (this.state.page === "rulesNScoring") {
            currentPage = <RulesNScoringPage />
        }
        return (
            <div>
                <h1>CribSmack</h1>
                {currentPage}
                <Navbar handleChangePage={this.setCurrentPage}/>
            </div>
        )
    }
}
export default Dashboard