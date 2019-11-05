import React, { Component } from 'react';
import './style.css';

export default class UserStats extends Component {
    render() {
        return (
            <div>
                <h1>UserStats</h1>
                <div className="box1">
                    <p>
                        Games Won: ""
                        <br/>
                        Games Lost: ""
                        <br/>
                    </p>
                </div>
                <div className="box2">
                    <p>
                        Avg Games: ""
                        <br/>
                        Streak: ""
                    </p>
                </div>
                <div className="box3">
                    <p>
                        Hands Won: ""
                        <br/>
                        Avg Hand: ""
                    </p>
                </div>
            </div>
        )
    }
}
