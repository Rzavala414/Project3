import React, { Component } from "react";
import "./style.css";
// import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

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

    url: "https://cribsmack-be.herokuapp.com/"
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
          <div className="box b number">{this.state.user}</div>
          
          <div className="box d number">{this.state.user2}</div>

          <div className="box f label">The Play</div>
          <input
            className="box user-one-play number"
            value={this.state.userOnePlay}
            onChange={this.handleChange}
            type="number"
            name="userOnePlay"
          ></input>
      
          <input
            className="box user-two-play number"
            value={this.state.userTwoPlay}
            onChange={this.handleChange}
            type="number"
            name="userTwoPlay"
          ></input>
        
          <div className="box f label">The Count</div>

          <input
            className="box user-one-count number"
            onChange={this.handleChange}
            type="number"
            name="userOneCount"
          ></input>
       
          <input
            className="box user-two-count number"
            value={this.state.userTwoCount}
            onChange={this.handleChange}
            type="number"
            name="userTwoCount"
          ></input>

          <div className="box f label">The Crib</div>
          <input
            className="box user-one-crib number"
            value={this.state.userOneCrib}
            onChange={this.handleChange}
            type="number"
            name="userOneCrib"
          ></input>
          <input
            className="box user-two-crib number"
            value={this.state.userTwoCrib}
            onChange={this.handleChange}
            type="number"
            name="userTwoCrib"
          ></input>
        </div>
     
        <div className="score">
          <div className="box f label">Total</div>

          <div className="box user-one-total-avg"
          >{this.findTotal("one")}</div>

          <div className="box user-two-total-avg"
          >{this.findTotal("two")}</div>
        </div>

        <div className="buttons">
          <button
            className="next-hand-button buttonBoxL label"
            onClick={this.handleNextHandSubmit}>
            Next Hand
          </button>
          <button
            className="end-game-button buttonBoxR label"
            onClick={this.handleNewGameSubmit}>
            End Game
          </button>
        </div>

        <div className="average-wrapper">
          <div className="average-title">Average</div>
          <div className="averages">
            <div className="box f label">The Play</div>
            <div className="box user-one-play-avg number" type="number" max="9999">
              {this.findAverage("userOnePlay")}
            </div>
            <div className="box user-two-play-avg number">
              {this.findAverage("userTwoPlay")}
            </div>
            <div className="box f label">The Count</div>
            <div className="box user-one-count-avg number">
              {this.findAverage("userOneCount")}
            </div>
            <div className="box user-two-count-avg number">
              {this.findAverage("userTwoCount")}
            </div>
            <div className="box f label">The Crib</div>
            <div className="box user-one-crib-avg number">
              {this.findAverage("userOneCrib")}
            </div>
            <div className="box user-two-crib-avg number">
              {this.findAverage("userTwoCrib")}
            </div>
          </div>
          </div>
        </div>
      // </div>
    );
  }
}
