import React, { Component } from 'react';
import './style.css';
import axios from "axios";
const backendUrl = "http://localhost3001";
export default class UserStats extends Component {
    state = {
        username: "",
        // instead of wins and losses we need win percentage and games played
        wins: "",
        losses: "",
        playAvg: "",
        countAvg: "",
        cribAvg: "",
        skunks: "",
        skunked: "",
        games: "",
        url: "localhost3001",
        // url: "git.io.danlgrigg/cribsmack"
    };

    componentDidMount() {
// check to see if user info is in local storage
// if no, redirect to login, otherwise:
// parse user object and set the state for all of the state variables

        axios
            .get(backendUrl+"/api/profile")
            .then(data=>console.log(data))
            .catch(err=>console.log(err))

    }

    render() {
        return (
            <div>
                <h1 className="username">{this.state.username}</h1>
                <h2>Stats</h2>
                <div className="wrapper">
                    <div className="box1">
                        <p className="winPerc">{this.state.wins}</p>
                        <br />
                        
                        <p className="gamesPlayed">{this.state.user}</p>
                    </div>
                    <div className="box2">
                        <p className="playAvg">{this.state.playAvg}</p>
                        <br />
                        <p className="countAvg">{this.state.countAvg}</p>
                        <br />
                        <p className="cribAvg">{this.state.cribAvg}</p>
                    </div>
                    <div className="box3">
                        <p className="skunksGvn">{this.state.skunks}</p>
                        <br />
                        <p className="skunksRcvd">{this.state.skunked}</p>
                    </div>
                </div>
            </div>
        )
    }
}
