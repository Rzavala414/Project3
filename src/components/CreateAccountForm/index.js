// import React, { Component } from 'react'
// import axios from "axios";
// // import Secret from './components/Secret';
// // import LoginForm from './components/LoginForm';
// // import SignUpForm from './components/SignUpForm';
// // import ManateeForm from './components/ManateeForm';
// // import Manatee from './components/Manatee';

// export default class CreateAccountForm extends Component {
//   state = {
//     name:"",
//     password:"",
//     loggedInUser:"",
//     email:"",
//     // url:"http://localhost:8080",
//   }
//   // componentDidMount(){
//   //   this.readSessions();
//   //   this.getAllManatees();
//   // }

//   handleChange= event=>{
//     const {name,value}=event.target;
//     this.setState({
//       [name]:value
//     })
//   }



//   handleSignupFormSubmit = event=>{
//     event.preventDefault();
//     axios.post('http://localhost:3001/auth/signup',{username:this.state.name,email:this.state.email,password:this.state.password},{withCredentials:true})
//     .then(res=>{
//       console.log(res.data,res.status)

//       //add user info to localStorage

//       //redirect to the dashboard
//       // this.props.history.push("/Dashboard")
//       this.handleLoginFormSubmit();
//     }).catch(err=>{
//       console.log(err.response);
//     })
//   }


//   render() {
//     return (
//       <div>
//   <h3>Signup</h3>
//             <form>
//                 <input placeholder="Username" name="name" value={this.state.name} onChange={this.handleChange} />
//                 <input placeholder="Password" name="password" value={this.state.password} type="password" onChange={this.handleChange} />
//                 <input placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
//                 <input type="submit" onClick={this.handleSignupFormSubmit} />
//             </form>
//         <button onClick={this.readSessions}>Readsessions</button>
//       </div>
//     )
//   }
// }
