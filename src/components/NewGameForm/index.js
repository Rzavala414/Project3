import React, { Component } from "react";
import "./style.css";
// import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

export default class GameCard extends Component {
  //TODO: Figure out how to place 1 session user in gamecard, add dropdown for 2nd user to bring in session
  state = {
    userOne: "",
    userTwo: "",
    users: [],
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
    userOneSkunks: 0,
    userOneSkunked: 0,
    userTwoSkunks: 0,
    userTwoSkunked: 0,
    hands: [],
    buttonHidden: false,
    responseOne: null,
    responseTwo: null,
    responseThree: null,

    // url: "http://localhost:3001/"
    url: "https://cribsmack-be.herokuapp.com/"
  };

  componentDidMount() {
    axios
      .get(`${this.state.url}auth/readsessions`, { withCredentials: true })
      .then(data => {
        console.log("read sessions:", data.data);
        this.setState({
          userOne: data.data.user
        });
      });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  //formula to handle add user
  populateUserTwoOptions = event => {
    if (event) {
      event.preventDefault();
    }
    
    axios
      .get(`${this.state.url}api/user`)
      .then(response => {
        console.log("challengers", response.data);
        let newState;
        // console.log(this.state)
        newState = response.data.map(el => {
          return { name: el.username, id: el._id };
        });
        console.log("newState", newState);
        this.setState({ users: newState });
        console.log("setState", this.state);
      })
      .catch(function(error) {
        console.log(error);
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
    this.findGameScore("one")
    console.log(this.state.userOneTotal)
    this.setState({
      userOnePlay: 0,
      userOneCount: 0,
      userOneCrib: 0,
      userTwoPlay: 0,
      userTwoCount: 0,
      userTwoCrib: 0,
      hands: newStateHands
    });
    //TODO: Alternate Cribs so non-crib doesn't equal zero
  };

  handleEndGameSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    axios
      .post(
        `${this.state.url}api/gamecard`,
        {
          //TODO: what do we set
          userTwo: this.state.userTwo.id,
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
          userOneSkunks: this.state.userOneSkunks,
          userOneSkunked: this.state.userOneSkunked,
          userTwoSkunks: this.state.userTwoSkunks,
          userTwoSkunked: this.state.userTwoSkunked,
          userOnePlayAverage: this.findAverage("userOnePlay"),
          userOneCountAverage: this.findAverage("userOneCount"),
          userOneCribAverage: this.findAverage("userOneCrib"),
          userTwoPlayAverage: this.findAverage("userTwoPlay"),
          userTwoCountAverage: this.findAverage("userTwoCount"),
          userTwoCribAverage: this.findAverage("userTwoCrib"),
          hands: []
        },
        { withCredentials: true }
        //TODO: Separate post for users??
      )
      .then(function(response) {
        this.setState({
          responseOne: response
        });

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
          loss: this.state.userOneLoss,
          playAvg: this.findAverage("userOnePlay"),
          countAvg: this.findAverage("userOneCount"),
          cribAvg: this.findAverage("userOneCrib")
        }
      })
      .then(function(response) {
        // console.log("User Response", response);
        this.setState({
          responseTwo: response
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    axios
      .post(`${this.state.url}api/user`, {
        userTwo: {
          win: this.state.userTwoWin,
          loss: this.state.userTwoLoss,
          playAvg: this.findAverage("userTwoPlay"),
          countAvg: this.findAverage("userTwoCount"),
          cribAvg: this.findAverage("userTwoCrib")
        }
      })
      .then(function(response) {
        // console.log("User Response", response);
        // console.log(this.state)
        this.setState({
          responseThree: response
        });
        console.log("this.state", this.state);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  findAverage = property => {
    let total = 0;
    this.state.hands.forEach(hand => {
      total += parseInt(hand[property]);
      console.log("hand", hand[property]);
    });
    return (total / this.state.hands.length).toFixed(2);
  };

  findGameScore = user => {
    let total = 0;
    console.log(total);

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

  findHandScore = user => {
    let total = 0;
    console.log("handScore:", total);
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

  //formula for wins and losses, set to state
  findWinAndLosses = user => {
    if (this.state.userOneTotal >= 121) {
      this.setState.userOneWin++;
      this.setState.userTwoLoss++;
    } else if (this.state.userTwoTotal >= 121) {
      this.setState.userTwoWin++;
      this.setState.userOneLoss++;
    }
  };

  findSkunksandSkunked = user => {
    if (this.state.userOneTotal >= 121 && this.state.userTwoTotal <= 90) {
      this.state.userOneSkunks++;
      this.state.userTwoSkunked++;
    } else if (
      this.state.userTwoTotal >= 121 &&
      this.state.userOneTotal <= 90
    ) {
      this.state.userTwoSkunks++;
      this.state.userOneSkunked++;
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="user-two-populate">
          {this.state.buttonHidden !== true ? (
            <button
              className="user-two-select"
              onClick={event => this.populateUserTwoOptions(event)}
            >
              Pick Challenger
            </button>
          ) : null}
          <form>
            <select
              onChange={event => {
                this.setState({
                  userTwo: {
                    id: event.target.value,
                    name:
                      event.target.options[event.target.options.selectedIndex]
                        .text
                  },
                  users: [],
                  buttonHidden: true
                });
              }}
            >
              {this.state.users.map((el, i) => {
                return (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                );
              })}
            </select>
          </form>
        </div>

        <div className="input">
          <div className=""></div>
          <div className="box user-one">{this.state.userOne.name}</div>
          <div className="box user-two">{this.state.userTwo.name}</div>

          <div className="box play-header">The Play</div>
          <input
            className="box user-one-play number"
            value={this.state.userOnePlay}
            placeholder={this.state.userOnePlay}
            onChange={this.handleChange}
            type="number"
            name="userOnePlay"
          ></input>
          <input
            className="box user-two-play number"
            placeholder={this.state.userTwoPlay}
            value={this.state.userTwoPlay}
            onChange={this.handleChange}
            type="number"
            name="userTwoPlay"
          ></input>

          <div className="box count-header">The Count</div>
          <input
            className="box user-one-count number"
            placeholder={this.state.userOneCount}
            value={this.state.userOneCount}
            onChange={this.handleChange}
            type="number"
            name="userOneCount"
          ></input>
          <input
            className="box user-two-count number"
            placeholder={this.state.userTwoCount}
            value={this.state.userTwoCount}
            onChange={this.handleChange}
            type="number"
            name="userTwoCount"
          ></input>

          <div className="box crib-header">The Crib</div>
          <input
            className="box user-one-crib number"
            placeholder={this.state.userOneCrib}
            value={this.state.userOneCrib}
            onChange={this.handleChange}
            type="number"
            name="userOneCrib"
          ></input>
          <input
            className="box user-two-crib number"
            placeholder={this.state.userTwoCrib}
            value={this.state.userTwoCrib}
            onChange={this.handleChange}
            type="number"
            name="userTwoCrib"
          ></input>
        </div>

        <div className="score hand-score">
          <div className="box hand-score-label">Hand Score</div>
          <div className="box user-one-hand">{this.findHandScore("one")}</div>
          <div className="box user-two-hand"> {this.findHandScore("two")}</div>
        </div>

        <div className="score game-score">
          <div className="box game-score-label">Game Score</div>
          <div className="box user-one-score">{this.findGameScore("one")}</div>
          <div className="box user-two-score"> {this.findGameScore("two")}</div>
        </div>

        <div className="buttons">
          <button
            className="next-hand-button buttonBoxL label"
            onClick={this.handleNextHandSubmit}
          >
            Next Hand
          </button>
          <button
            className="end-game-button buttonBoxR label"
            onClick={this.handleNewGameSubmit}
          >
            End Game
          </button>
        </div>

        <div className="average-wrapper">
          <div className="average-title">Averages</div>
          <div className="averages">
            <div className="box play-avg-label">The Play</div>
            <div className="box user-one-play-avg" type="number">
              {this.findAverage("userOnePlay")}
            </div>
            <div className="box user-two-play-avg number">
              {this.findAverage("userTwoPlay")}
            </div>

            <div className="box count-avg-label">The Count</div>
            <div className="box user-one-count-avg">
              {this.findAverage("userOneCount")}
            </div>
            <div className="box user-two-count-avg number">
              {this.findAverage("userTwoCount")}
            </div>

            <div className="box crib-avg-label">The Crib</div>
            <div className="box user-one-crib-avg">
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
