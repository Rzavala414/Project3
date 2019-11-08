import React, { Component } from 'react';
import GlobalStatsTable from '../../components/GlobalStatsTable';

// import GlobalStateTable from '../../components/GlobalStateTable'
export default class LeaderboardPage extends Component {
    render() {
        return (
            <div>
                <div>
                <h1>Leader board Page </h1>
                </div>
                <GlobalStatsTable />
            </div>
        )
    }
}
