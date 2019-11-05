import React, { Component } from 'react';
import './style.css';

export default class UserStats extends Component {
    render() {
        return (
            <div>
                <h1>UserStats</h1>
                <div className="box1">
                    <p>
                        Win Percentage: ""
                        <br/>
                        Games Played: ""
                        <br/>
                    </p>
                </div>
                <div className="box2">
                    <p>
                        Play Average: ""
                        <br/>
                        Count Average: ""
                        <br/>
                        Crib Average: ""
                    </p>
                </div>
                <div className="box3">
                    <p>
                        Skunks Given: ""
                        <br/>
                        Skunks Recieved: ""
                    </p>
                </div>
            </div>
        )
    }
}
