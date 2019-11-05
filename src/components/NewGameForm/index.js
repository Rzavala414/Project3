import React, { Component } from "react";
import "./style.css";
// import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default class NewGameForm extends Component {
  state = {
    userOnePlay: "",
    userOnePlayAvg: "",
    userOneCount: "",
    userOneCountAvg: "",
    userOneCrib: "",
    userOneCribAvg: "",
    userOneTotal: "",

    userTwoPlay: "",
    userTwoPlayAvg: "",
    userTwoCount: "",
    userTwoCountAvg: "",
    userTwoCrib: "",
    userTwoCribAvg: "",
    userTwoTotal: ""

    // url:"http://localhost:8080",
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
    // change route to match backend
    axios
      .post(
        `${this.state.url}/auth/login`,
        { name: this.state.name, password: this.state.password },
        { withCredentials: true }
      )
      .then(res => {
        console.log(res.data, res.status);
        this.setState({
          name: "",
          password: "",
          loggedInUser: res.data.user
        });
        this.getAllStats();
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          userOnePlay: "",
          userOneCount: "",
          userOneCrib: "",
          userTwoPlay: "",
          userTwoCount: "",
          userTwoCrib: ""
        });
      });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="a"></div>
        <div className="box b">{this.state.user}</div>
        <div className="box c">{this.state.user}avg</div>
        <div className="box d">{this.state.user2}</div>
        <div className="box e">{this.state.user2}avg</div>

        <div className="box f">play</div>
        <input
          className="box user-one-play"
          value={this.state.userOnePlay}
          onChange={this.handleChange}
          type="number"
          name="userOnePlay"
        ></input>
        <div className="box user-one-play-avg">{this.state.userOnePlayAvg}</div>
        <input
          className="box user-two-play"
          value={this.state.userTwoPlay}
          onChange={this.handleChange}
          type="number"
          name="userTwoPlay"
        ></input>
        <div className="box user-two-play-avg">
        {this.state.userTwoPlayAvg}</div>
        <div className="box f">count</div>
        
        <input
          className="box user-one-count"
          value={this.state.userOneCount}
          onChange={this.handleChange}
          type="number"
          name="userOneCount"
        ></input>
        <div className="box user-one-count-avg">
          {this.state.userOneCountAvg}
        </div>
        <input
          className="box user-two-count"
          value={this.state.userTwoCount}
          onChange={this.handleChange}
          type="number"
          name="userTwoCount"
        ></input>
        <div className="box user-two-count-avg">
          {this.state.userTwoCountAvg}
        </div>

        <div className="box f">crib</div>
        <input
          className="box user-one-crib"
          value={this.state.userOneCrib}
          onChange={this.handleChange}
          type="number"
          name="userOneCrib"
        ></input>
        <div className="box user-one-crib-avg"
        >{this.state.userOneCribAvg}</div>
        <input
          className="box user-two-crib"
          value={this.state.userTwoCrib}
          onChange={this.handleChange}
          type="number"
          name="userTwoCrib"
        ></input>
        <div className="box user-two-crib-avg"
        >{this.state.userTwoCribAvg}</div>

        <div className="box f">total</div>
        <input
          className="box user-one-total"
          value={this.state.userOneTotal}
          onChange={this.handleChange}
          type="number"
          name="userOneTotal"
        ></input>
        <div className="box user-one-total-avg">
          {this.state.userOneTotalAvg}
        </div>
        <input
          className="box user-two-total"
          value={this.state.userTwoTotal}
          onChange={this.handleChange}
          type="number"
          name="userTwoTotal"
        ></input>
        <div className="box user-two-total-avg">
          {this.state.userTwoTotalAvg}
        </div>

        {/* <Button variant="contained" className={classes.button}>
                    Next Hand
                </Button> */}
      </div>
    );
  }
}
