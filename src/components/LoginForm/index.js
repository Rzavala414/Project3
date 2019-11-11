import React, { Component } from 'react'
import axios from "axios";

export default class LoginForm extends Component {
  state = {
    name:"",
    password:"",
 
    url:"https://cribsmack-be.herokuapp.com",
    //TODO: add github URL

  // componentDidMount(){
  //   this.readSessions();
  //   this.getAllManatees();
  // }
  }
  handleChange= event=>{
    const {name,value}=event.target;
    this.setState({
      [name]:value
    })
  };


  handleLoginFormSubmit = event=>{
    if(event){

      event.preventDefault();
    }
    // change route to match backend
    axios.post(`${this.state.url}/auth/login`,{name:this.state.name,password:this.state.password},{withCredentials:true}).then(res=>{
      console.log(res.data,res.status)
      localStorage.setItem("currentUser", JSON.stringify(res.data.user))
      //set localstorage (remember we can only store strings in localStorage)
      // this.setState({
      //   name:"",
      //   password:"",
      //   loggedInUser:res.data.user
      // });
      this.props.history.push("/UserHomeProfile")
      // redirect on successful login

      // this.getAllManatees();
    }).catch(err=>{
      console.log(err.response);
      this.setState({
        name:"",
        password:"",
        loggedInUser:""
      })
    })
  };
 


  render() {
    return (
      <div>
  <h3>Login</h3>
            <form>
                <input placeholder="Username" name="name" value={this.state.name} onChange={this.handleChange} />
                <input placeholder="Password" name="password" value={this.state.password} type="password" onChange={this.handleChange} />
                <button type="submit" onClick={this.handleLoginFormSubmit} />
            </form>
        {/* <button onClick={this.readSessions}>Readsessions</button> */}
      </div>
    )
  }
}