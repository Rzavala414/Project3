import React, { Component } from "react";
import UserHomeProfile from "./pages/UserHomeProfile";
import NewGamePage from "./pages/NewGamePage";
import LeaderboardPage from "./pages/LeaderBoardPage";
import RulesNScoringPage from "./pages/RulesNScoringPage";
import Navbar from "./components/NavBar";
import LogoUserNav from "./components/LogoUserNav";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount";
import './Dashboard.css'

class Dashboard extends Component {
    state = {
        page: "userPage"
    }
    setCurrentPage = (page) => {
        this.setState({ page });
    }
    render() {
        console.log(this.props);
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
        else if (this.state.page === "loginpage") {
            currentPage = <LoginPage />
        }
        else if (this.state.page === "createaccount") {
            currentPage = <CreateAccount />
        }
        return (
            <div className="dashboardComponents">
                <div className="topNav">
                    <LogoUserNav history={this.props.history} handleChangePage={this.setCurrentPage} />
                </div>
                <div className="currentPageParent">
                    <div className="currentPage">
                        {currentPage}
                    </div>
                </div>
                <div className="navbar">
                    <Navbar handleChangePage={this.setCurrentPage} />
                </div>
            </div>
        )
    }
}
export default Dashboard