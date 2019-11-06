import React, { Component } from "react";
import "./style.css";
// import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default class NewGameForm extends Component {
  //TODO: Figure out how to place 1 session user in gamecard, add dropdown for 2nd user to bring in session
  state = {
    userOne: "",
    userTwo: "",
    userOnePlay: 0,
    userOneCount: 0,
    userOneCrib: "",
    userOneTotal: 0,
    userTwoPlay: 0,
    userTwoCount: 0,
    userTwoCrib: "",
    userTwoTotal: 0,
    hands: [
    //   {
    //     userOnePlay:0,
    //     userOneCount: 0,
    //     userTwoPlay: 0,
    //     userTwoCount: 0,
    //     userOneCrib: 0,
    //     userTwoCrib: 0
    //   },
    
    ],

    url: "http://localhost:3001/"
    // url:"http://github.io.rzavalia....."
  };

  // componentDidMount(){
  //   this.readSessions();
  //   this.getAllManatees();
  // }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleNextHandSubmit = event => {
    if (event) {
      event.preventDefault();
    }

    let newHand = { ...this.state };
    delete newHand.hands;
    let newStateHands = this.state.hands;
    newStateHands.push(newHand);
    console.log(newStateHands);
    this.setState({
      hands: newStateHands
    });
    //TODO: Alternate Cribs so non-crib doesn't equal zero
  };

  handleEndGameSubmit = event => {
    if (event){
        event.preventDefault();
    }
    axios
    .post(
        `${this.state.url}/gamecard`,
        { name: this.state.name, password: this.state.password },
 
    )
};
    
  findAverage = property => {
    let total = 0;
    this.state.hands.forEach(hand => {
      total += parseInt(hand[property]);
      console.log(hand[property]);
    });
    return total / this.state.hands.length;
  };
  findTotal = user => {
    let total = 0;

    this.state.hands.forEach(hand => {
      if (user === "one") {
        total +=
          parseInt(hand["userOneCount"]) +
          parseInt(hand["userOneCrib"]) +
          parseInt(hand["userOnePlay"]);
      } else if (user === "two") {
        total +=
          parseInt(hand["userTwoCount"]) +
          parseInt(hand["userTwoCrib"]) +
          parseInt(hand["userTwoPlay"]);
      }
    });
    return total;
  };

  render() {
    return (
      <div className="wrapper">
        <div className="a"></div>
        <div className="box b">{this.state.user}</div>
        <div className="box c">{this.state.user}avg</div>
        <div className="box d">{this.state.user2}</div>
        <div className="box e">{this.state.user2}avg</div>

        <div className="box f">The Play</div>
        <input
          className="box user-one-play"
          value={this.state.userOnePlay}
          onChange={this.handleChange}
          type="number"
          name="userOnePlay"
        ></input>
        {/* <div className="box user-one-play-avg">{this.state.hands.reduce((total,hand)=>hand.userOnePlay+ total,0)/this.state.hands.length}</div> */}
        <div className="box user-one-play-avg" type="number" max="9999" >
          {this.findAverage("userOnePlay")}
        </div>
        <input
          className="box user-two-play"
          value={this.state.userTwoPlay}
          onChange={this.handleChange}
          type="number"
          name="userTwoPlay"
        ></input>
        <div className="box user-two-play-avg">
          {this.findAverage("userTwoPlay")}
        </div>
        <div className="box f">The Count</div>

        <input
          className="box user-one-count"
          onChange={this.handleChange}
          type="number"
          name="userOneCount"
        ></input>
        <div className="box user-one-count-avg">
          {this.findAverage("userOneCount")}
        </div>
        <input
          className="box user-two-count"
          value={this.state.userTwoCount}
          onChange={this.handleChange}
          type="number"
          name="userTwoCount"
        ></input>
        <div className="box user-two-count-avg">
          {this.findAverage("userTwoCount")}
        </div>

        <div className="box f">The Crib</div>
        <input
          className="box user-one-crib"
          value={this.state.userOneCrib}
          onChange={this.handleChange}
          type="number"
          name="userOneCrib"
        ></input>
        <div className="box user-one-crib-avg">
          {this.findAverage("userOneCrib")}
        </div>
        <input
          className="box user-two-crib"
          value={this.state.userTwoCrib}
          onChange={this.handleChange}
          type="number"
          name="userTwoCrib"
        ></input>
        <div className="box user-two-crib-avg">
          {this.findAverage("userTwoCrib")}
        </div>

        <div className="box f">Game Score</div>
        
        <div className="box user-one-total-avg">{this.findTotal("one")}</div>
        <div>
          {/* {this.findTotal("one") / this.state.hands.length} */}
        </div>
        <div className="box user-two-total-avg"> {this.findTotal("two")}</div>
        <div>
          {/* {this.findTotal("two") / this.state.hands.length} */}
        </div>
        <button
          className="next-hand-button"
          onClick={this.handleNextHandSubmit}
        >
          Next Hand
        </button>
        <button
          className="end-game-button"
          onClick={this.handleNewGameSubmit}
        >
          New Game
        </button>
      </div>
    )};
    }
