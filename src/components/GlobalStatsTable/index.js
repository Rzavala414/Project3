import React, { Component } from 'react';
import axios from "axios";
const backendUrl = "http://localhost:3001";

export default class GlobalStatsTable extends Component {
    state = {
        username: "",
        wins: "",
        losses: "",
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {

            axios.get(backendUrl+"/api/leaderboard-wins-percetage", { withCredentials: true })
            .then(data=>{

                console.log("THIS IS RESPONSE",data)

            }).catch(err=>console.log("THIS IS ERROR",err))
        
    }

    render() {
        return (
            <div>
                   <table>
                       <tr>
                           <th>Rank</th>
                           <th>Username</th>
                           <th>Wins</th>
                           <th>Skunks</th>
                       </tr>
                       <tr>
                           <td onChange={this.handleChange}>{this.state.rank}</td>
                           <td onChange={this.handleChange}>{this.state.username}</td>
                           <td onChange={this.handleChange}>{this.state.wins}</td>
                           <td onChange={this.handleChange}>{this.state.losses}</td>
                       </tr>
                   </table>
            </div>
        )
    }
}

