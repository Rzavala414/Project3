import React, { Component } from 'react';
import UserStats from '../../components/UserStats';
import './style.css';


export default class UserHomeProfile extends Component {
    render() {
        return (
            <div className="mainBox">
                <UserStats />
            </div>
        )
    }
}
