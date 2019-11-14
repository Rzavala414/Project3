import React, { Component } from 'react'
import axios from "axios";
import LogoUserNav from "../../components/LogoUserNav";
import "./style.css";

export default class CreateAccount extends Component {
    state = {
        name: "",
        password: "",
        loggedInUser: "",
        email: "",
        // url:"http://localhost:3001",
        url:"https://cribsmack-be.herokuapp.com",
    }
    // componentDidMount(){
    //   this.readSessions();
    //   this.getAllManatees();
    // }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }



    handleSignupFormSubmit = event => {
        event.preventDefault();
        // axios.post('http://localhost:3001/auth/signup', { username: this.state.name, email: this.state.email, password: this.state.password }, { withCredentials: true })
        axios.post(' https://cribsmack-be.herokuapp.com/auth/signup', { username: this.state.name, email: this.state.email, password: this.state.password }, { withCredentials: true })
            .then(res => {
                console.log(res.data, res.status)

                //add user info to localStorage

                //redirect to the dashboard
                // this.props.history.push("/Dashboard")
                // this.handleLoginFormSubmit();

                axios.post(`${this.state.url}/auth/login`, { name: this.state.name, password: this.state.password }, { withCredentials: true }).then(res => {
                    console.log(res.data, res.status)
                    localStorage.setItem("currentUser", JSON.stringify(res.data.user))
                    //set localstorage (remember we can only store strings in localStorage)
                    // this.setState({
                    //   name:"",
                    //   password:"",
                    //   loggedInUser:res.data.user
                    // });
                    this.props.history.push("/Dashboard");
                    // redirect on successful login
        
                    // this.getAllManatees();
                })
                
            }).catch(err => {
                console.log(err.response);
            })
    }


    render() {
        return (
            <div>
                <LogoUserNav/>
                <h3>Signup</h3>
               <div className="container">
                <form>
                    <input className= "input-user" placeholder="Username" name="name" value={this.state.name} onChange={this.handleChange} />
                    <br></br>
                    <input className= "input-password" placeholder="Password" name="password" value={this.state.password} type="password" onChange={this.handleChange} />
                   <br></br>
                    <input className= "input-email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                    <br></br>
                    <input className= "button" type="submit" onClick={this.handleSignupFormSubmit} />
                </form>
                </div>
            </div>
        )
    }
}
