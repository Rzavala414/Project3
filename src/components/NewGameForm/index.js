import React, { Component } from "react";
import "./style.css";
// import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default class GameCard extends Component {
  //TODO: Figure out how to place 1 session user in gamecard, add dropdown for 2nd user to bring in session
  state = {
    userOne: {
        id:"",
        name:""
    },
    userTwo: "",
    userOnePlay: 0,
    userOneCount: 0,
    userOneCrib: 0,
    userOneTotal: 0,
    userTwoPlay: 0,
    userTwoCount: 0,
    userTwoCrib: 0,
    userTwoTotal: 0,
    userOneWin: 0,
    userOneLoss: 0,
    userTwoWin: 0,
    userTwoLoss: 0,
    hands: [],

    url: "http://localhost:3001/"
    //TODO: url:"http://github.io.rzavalia....."
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
    if (event) {
      event.preventDefault();
    }
    //TODO: build post route to /gamecard with gamecard keys:values... ARe we posting to cribsmack?
    axios
      .post(
        `${this.state.url}api/gamecard`,
        {
          userOne: this.state.username,
          userTwo: this.state.userTwoname,
          userOnePlay: this.state.userOnePlay,
          userOneCount: this.state.userOneCount,
          userOneCrib: this.state.userOneCrib,
          userOneTotal: this.state.userOneTotal,
          userTwoPlay: this.state.userTwoPlay,
          userTwoCount: this.state.userTwoCount,
          userTwoCrib: this.state.userTwoCrib,
          userTwoTotal: this.state.userTwoTotal,
          userOneWin: this.state.userOneWin,
          userOneLoss: this.state.userOneLoss,
          userTwoWin: this.state.userTwoWin,
          userTwoLoss: this.state.userTwoLoss,
          userOnePlayAverage: this.findAverage("userOnePlay"),
          userOneCountAverage: this.findAverage("userOneCount"),
          userOneCribAverage: this.findAverage("userOneCrib"),
          userTwoPlayAverage: this.findAverage("userTwoPlay"),
          userTwoCountAverage: this.findAverage("userTwoCount"),
          userTwoCribAverage: this.findAverage("userTwoCrib"),
          hands: []
        }
        //TODO: Separate post for users??
      )
      .then(function(response) {
        console.log("GameCard Response", response);
      })
      .catch(function(error) {
        console.log(error);
      });
      //User Axios call
    axios
      .post(`${this.state.url}api/user`, {
        user: {
          win: this.state.userOneWin,
          userOneLoss: this.state.userOneLoss,
          userOnePlayAverage: this.findAverage("userOnePlay"),
          userOneCountAverage: this.findAverage("userOneCount"),
          userOneCribAverage: this.findAverage("userOneCrib")
        }
      })
      .then(function(response) {
        console.log("User Response", response);
      })
      .catch(function(error) {
        console.log(error);
      });
      axios
      .post(`${this.state.url}api/user`, {
        userTwo: {
          win: this.state.userTwoWin,
          userTwoLoss: this.state.userTwoLoss,
          userTwoPlayAverage: this.findAverage("userTwoPlay"),
          userTwoCountAverage: this.findAverage("userTwoCount"),
          userTwoCribAverage: this.findAverage("userTwoCrib")
        }
      })
      .then(function(response) {
        console.log("User Response", response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  findAverage = property => {
    let total = 0;
    this.state.hands.forEach(hand => {
      total += parseInt(hand[property]);
      console.log("hand",hand[property]);
    });
    return (total / this.state.hands.length).toFixed(2);
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
  };

  //formula for wins and losses, set to state
  findWinAndLosses = user => {
    if (this.state.userOneTotal >= 121) {
      this.setState.userOneWin++;
      this.setState.userTwoLoss++;
    }
    if (this.state.userTwoTotal >= 121) {
      this.setState.userTwoWin++;
      this.setState.userOneLoss++;
    }
  };

  render() {
    //TODO: Set user 1 and user 2 to state????
    return (
      <div className="wrapper">
        <div className="input">
          <div className="a"></div>
          <div className="box b">{this.state.user}</div>
          {/* <div className="box c">{this.state.user}avg</div> */}
          <div className="box d">{this.state.user2}</div>
          {/* <div className="box e">{this.state.user2}avg</div> */}

          <div className="box f">The Play</div>
          <input
            className="box user-one-play"
            value={this.state.userOnePlay}
            onChange={this.handleChange}
            type="number"
            name="userOnePlay"
          ></input>
          {/* <div className="box user-one-play-avg">{this.state.hands.reduce((total,hand)=>hand.userOnePlay+ total,0)/this.state.hands.length}</div> */}
          {/* <div className="box user-one-play-avg" type="number" max="9999">
          {this.findAverage("userOnePlay")}
        </div> */}
          <input
            className="box user-two-play"
            value={this.state.userTwoPlay}
            onChange={this.handleChange}
            type="number"
            name="userTwoPlay"
          ></input>
          {/* <div className="box user-two-play-avg">
          {this.findAverage("userTwoPlay")}
        </div> */}
          <div className="box f">The Count</div>

          <input
            className="box user-one-count"
            onChange={this.handleChange}
            type="number"
            name="userOneCount"
          ></input>
          {/* <div className="box user-one-count-avg">
          {this.findAverage("userOneCount")}
        </div> */}
          <input
            className="box user-two-count"
            value={this.state.userTwoCount}
            onChange={this.handleChange}
            type="number"
            name="userTwoCount"
          ></input>
          {/* <div className="box user-two-count-avg">
          {this.findAverage("userTwoCount")}
        </div> */}

          <div className="box f">The Crib</div>
          <input
            className="box user-one-crib"
            value={this.state.userOneCrib}
            onChange={this.handleChange}
            type="number"
            name="userOneCrib"
          ></input>
          {/* <div className="box user-one-crib-avg">
          {this.findAverage("userOneCrib")}
        </div> */}
          <input
            className="box user-two-crib"
            value={this.state.userTwoCrib}
            onChange={this.handleChange}
            type="number"
            name="userTwoCrib"
          ></input>
        </div>
        {/* <div className="box user-two-crib-avg">
          {this.findAverage("userTwoCrib")}
        </div> */}
        <div className="score">
          <div className="box f">Game Score</div>

          <div className="box user-one-total-avg"
          >{this.findTotal("one")}</div>
        
          <div className="box user-two-total-avg"
          >{this.findTotal("two")}</div>
        
        </div>

        <div className="buttons">
          <button
            className="next-hand-button buttonBoxL"
            onClick={this.handleNextHandSubmit}
          >
            Next Hand
          </button>

          <button
            className="end-game-button buttonBoxR"
            onClick={this.handleNewGameSubmit}
          >
            New Game
          </button>
        </div>

        <div className="average-wrapper">
          <div className="average-title">Average</div>
          <div className="averages">
            <div className="box f">The Play</div>
            <div className="box user-one-play-avg" type="number" max="9999">
              {this.findAverage("userOnePlay")}
            </div>
            <div className="box user-two-play-avg">
              {this.findAverage("userTwoPlay")}
            </div>
            <div className="box f">The Count</div>
            <div className="box user-one-count-avg">
              {this.findAverage("userOneCount")}
            </div>
            <div className="box user-two-count-avg">
              {this.findAverage("userTwoCount")}
            </div>
            <div className="box f">The Crib</div>
            <div className="box user-one-crib-avg">
              {this.findAverage("userOneCrib")}
            </div>
            <div className="box user-two-crib-avg">
              {this.findAverage("userTwoCrib")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
