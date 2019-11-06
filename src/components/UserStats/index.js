import React, { Component } from 'react';
import './style.css';
import axios from "axios";
const backendUrl = "http://localhost:3001";
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
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
// check to see if user info is in local storage
// if no, redirect to login, otherwise:
// parse user object and set the state for all of the state variables
        let userData = {wins:this.state.wins,losses:this.state.losses,playAvg:this.state.playAvg,countAvg:this.state.countAvg,cribAvg:this.state.cribAvg,skunks:this.state.skunks,skunked:this.state.skunked}
        axios
            .get(backendUrl+"/api/profile", { withCredentials: true })
            .then(data=>{

                console.log("THIS IS RESPONSE",data)

            }).catch(err=>console.log("THIS IS ERROR",err))
            

    }

    render() {
        return (
            <div>
                <h1 className="username">Username: {this.state.username}</h1>
                <h2>Stats</h2>
                <div className="wrapper">
                    <div className="box1">
                        <p className="winPerc" onChange={this.handleChange}>Win Percentage: {this.state.wins}</p>
                        <p className="gamesPlayed" onChange={this.handleChange}>Games Played: {this.state.user}</p>
                    </div>
                    <div className="box2">
                        <p className="playAvg" onChange={this.handleChange}>Play Average: {this.state.playAvg}</p>
                        <p className="countAvg" onChange={this.handleChange}>Count Average: {this.state.countAvg}</p>
                        <p className="cribAvg" onChange={this.handleChange}>Crib Average: {this.state.cribAvg}</p>
                    </div>
                    <div className="box3">
                        <p className="skunksGvn" onChange={this.handleChange}>Skunks Given: {this.state.skunks}</p>
                        <p className="skunksRcvd" onChange={this.handleChange}>Skunks Recieved: {this.state.skunked}</p>
                    </div>
                </div>
            </div>
        )
    }
}
