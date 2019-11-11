import React, { Component } from 'react';
import GlobalStatsTable from '../../components/GlobalStatsTable';
import "./style.css"
// import GlobalStateTable from '../../components/GlobalStateTable'
export default class LeaderboardPage extends Component {
    render() {
        return (
            <div className="width">
                <div>
                <h1>Leaderboard</h1>
                </div>
                <GlobalStatsTable />
            </div>
        )
    }
}
