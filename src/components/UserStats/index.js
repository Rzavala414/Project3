import React, { Component } from "react";
import "./style.css";
import axios from "axios";
const backendUrl = "http://localhost:3001";
export default class UserStats extends Component {
  state = {
    username: "",
    wins: "",
    losses: "",
    playAvg: "",
    countAvg: "",
    cribAvg: "",
    skunks: "",
    skunked: "",
    games: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    // check to see if user info is in local storage
    // if no, redirect to login, otherwise:
    // parse user object and set the state for all of the state variables
    axios
      .get(backendUrl + "/api/profile", { withCredentials: true })
      .then(data => {
        this.setState({
          username: data.data.username,
          wins: data.data.wins,
          losses: data.data.losses,
          playAvg: data.data.playAvg,
          countAvg: data.data.countAvg,
          cribAvg: data.data.cribAvg,
          skunks: data.data.skunks,
          skunked: data.data.skunked,
          games: data.data.games
        });
      })
      .catch(err => console.log("THIS IS ERROR", err));
  }

  render() {
    return (
      <div>
        <h1 className="username">{this.state.username}</h1>
        <h2 className="stats">Your Stats</h2>
        <div className="userprofile_wrapper">
          <div className="box1">
            {/* TODO: test math for win percentage */}
            <p className="winPerc" onChange={this.handleChange}>
              Win Percentage:{" "}
              <span className="scoretext">
                {this.state.games.length / this.state.wins}
              </span>
            </p>
            <p className="gamesPlayed" onChange={this.handleChange}>
              Games Played:{" "}
              <span className="scoretext">{this.state.games.length}</span>
            </p>
          </div>
          <div className="box2">
            <p className="playAvg" onChange={this.handleChange}>
              Play Average:{" "}
              <span className="scoretext">{this.state.playAvg}</span>
            </p>
            <p className="countAvg" onChange={this.handleChange}>
              Count Average:{" "}
              <span className="scoretext">{this.state.countAvg}</span>
            </p>
            <p className="cribAvg" onChange={this.handleChange}>
              Crib Average:{" "}
              <span className="scoretext">{this.state.cribAvg}</span>
            </p>
          </div>
          <div className="box3">
            <p className="skunksGvn" onChange={this.handleChange}>
              Skunks Given:{" "}
              <span className="scoretext">{this.state.skunks}</span>
            </p>
            <p className="skunksRcvd" onChange={this.handleChange}>
              Skunks Recieved:{" "}
              <span className="scoretext">{this.state.skunked}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
