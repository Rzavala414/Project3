import React, { Component } from 'react';
import axios from "axios";
import "./style.css";
// const backendUrl = "http://localhost:3001";
const backendUrl = " https://cribsmack-be.herokuapp.com";
export default class GlobalStatsTable extends Component {
    state = {
        wins: "",
        playAvg: "",
        countAvg: "",
        cribAvg: "",
        skunks: ""
    };  

    componentDidMount() {

        axios.get(backendUrl + "/api/leaderboard-win-percentage", { withCredentials: true })
            .then(data => {
                this.setState({
                    wins: data.data
                })
                axios.get(backendUrl + "/api/leaderboard-playavg", { withCredentials: true })
                    .then(data => {
                        this.setState({
                            playAvg: data.data
                        })
                        axios.get(backendUrl + "/api/leaderboard-countavg", { withCredentials: true })
                            .then(data => {
                                this.setState({
                                    countAvg: data.data
                                })
                                axios.get(backendUrl + "/api/leaderboard-cribavg", { withCredentials: true })
                                    .then(data => {
                                        this.setState({
                                            cribAvg: data.data
                                        })
                                        axios.get(backendUrl + "/api/leaderboard-skunks", { withCredentials: true})
                                        .then(data => {
                                            this.setState({
                                                skunks: data.data
                                            })
                                        })
                                    })
                            })
                        console.log("THIS IS RESPONSE", data.data)

                    }).catch(err => console.log("THIS IS ERROR", err))

            })
    }

    render() {
        return (
            <div className="stats">
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.wins ?
                            (this.state.wins.map((user, i) => {
                                return (<tr>
                                    <td>{i + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.wins}</td>
                                </tr>)
                            })) : null}

                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Play Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.playAvg ?
                            (this.state.playAvg.map((user, i) => {
                                return (<tr>
                                    <td>{i + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.playAvg}</td>
                                </tr>)
                            })) : null}

                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Count Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.countAvg ?
                            (this.state.countAvg.map((user, i) => {
                                return (<tr>
                                    <td>{i + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.countAvg}</td>
                                </tr>)
                            })) : null}

                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Crib Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cribAvg ?
                            (this.state.cribAvg.map((user, i) => {
                                return (<tr>
                                    <td>{i + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.cribAvg}</td>
                                </tr>)
                            })) : null}

                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Username</th>
                            <th>Skunks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.skunks ?
                            (this.state.skunks.map((user, i) => {
                                return (<tr>
                                    <td>{i + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.skunks}</td>
                                </tr>)
                            })) : null}

                    </tbody>
                </table>
            </div>
        )
    }
}

