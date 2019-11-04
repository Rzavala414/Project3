import React, { Component } from 'react'
import axios from "axios";

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
    const {number,value}=event.target;
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
