import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(1),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));

// export default class NewGameForm extends Component {
//     render() {
//         return (
//             <div class="wrapper">
//                 <div class="box a">A</div>
//                 <div class="box b">user1</div>
//                 <div class="box c">user1avg</div>
//                 <div class="box d">user2</div>
//                 <div class="box e">user2avg</div>
//                 <div class="box f">play</div>
//                 <input class="user-one-play"></input>
//                 <div class="user-one-play-avg">{}</div>
//                 <input class="user-two-play"></input>
//                 <div class="user-two-play-avg">{}</div>
                
//                 <input class="user-one-count"></input>
//                 <div class="user-one-count-avg">{}</div>
//                 <input class="user-two-count"></input>
//                 <div class="user-two-count-avg">{}</div>
                
//                 <input class="user-one-crib"></input>
//                 <div class="user-one-crib-avg">{}</div>
//                 <input class="user-two-crib"></input>
//                 <div class="user-two-crib-avg">{}</div>

//                 <input class="user-one-total"></input>
//                 <div class="user-one-total-avg">{}</div>
//                 <input class="user-two-total"></input>
//                 <div class="user-two-total-avg">{}</div>

//             </div>
//         )
//         }}


export default class NewGameForm extends Component {
  state = {
    userOnePlay:"",
    userOneCount:"",
    userOneCrib:"",
    userTwoPlay:"",
    userTwoCount:"",
    userTwoCrib:""
 
    // url:"http://localhost:8080",
  }
  // componentDidMount(){
  //   this.readSessions();
  //   this.getAllManatees();
  // }

  handleChange= event=>{
    const {name,value}=event.target;
    this.setState({
      [name]:value
    })
  }


  handleLoginFormSubmit = event=>{
    if(event){

      event.preventDefault();
    }
    // change route to match backend
    axios.post(`${this.state.url}/auth/login`,{name:this.state.name,password:this.state.password},{withCredentials:true}).then(res=>{
      console.log(res.data,res.status)
      this.setState({
        name:"",
        password:"",
        loggedInUser:res.data.user
      });
      this.getAllStats();
    }).catch(err=>{
      console.log(err.response);
      this.setState({
        userOnePlay:"",
        userOneCount:"",
        userOneCrib:"",
        userTwoPlay:"",
        userTwoCount:"",
        userTwoCrib:""
      })
    })
  }
 


  render() {
    return (
      <div>
  <h3>Game Form</h3>
            <form>
                <input number="userOnePlay" value={this.state.userOnePlay} onChange={this.handleChange} />
                <input number="userOneCount" value={this.state.userOneCount} onChange={this.handleChange} />
                <input number="userOneCrib" value={this.state.userOneCrib} onChange={this.handleChange} />
                <input number="userTwoPlay" value={this.state.userTwoPlay} onChange={this.handleChange} />
                <input number="userTwoCount" value={this.state.userTwoCount} onChange={this.handleChange} />
                <input number="userTwoCrib" value={this.state.userTwoCrib} onChange={this.handleChange} />
                <input type="Submit" onClick={this.handleLoginFormSubmit} />
            </form>
        <button onClick={this.readSessions}>Readsessions</button>
      </div>
    )
  }
}



    