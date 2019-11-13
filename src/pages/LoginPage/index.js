import React, { Component } from 'react'
import axios from "axios";
import LogoUserNav from "../../components/LogoUserNav";
import {Link,Redirect} from "react-router-dom";
import "./style.css";
//any old comment
export default class LoginPage extends Component {
    state = {
        name: "",
        password: "",

        url: "http://localhost:3001",
        // url: "https://cribsmack-be.herokuapp.com",
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }


    handleLoginFormSubmit = event => {
        if (event) {

            event.preventDefault();
        }
        // change route to match backend
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
        }).catch(err => {
            console.log(err.response);
            this.setState({
                name: "",
                password: "",
                loggedInUser: ""
            })
        })
    }



    render() {
        return (
            <div className= "create-account">
                <LogoUserNav />
                <h3>Login</h3>
                
                <div className="container">
                <form>
                    <input className= "input-user" placeholder="Username" name="name" value={this.state.name} onChange={this.handleChange} />
                    {/* <br></br>
                    <br></br> */}
                    <input className= "input-password" placeholder="Password" name="password" value={this.state.password} type="password" onChange={this.handleChange} />
                    <br></br>
                    <button className= "button" type="submit" onClick={this.handleLoginFormSubmit} >Submit</button>
                <Link className="sign-up" to="/createaccount">Sign up</Link>
                </form>
                </div>
            </div>
        )
    }
}