import React, { Component } from 'react'
import CreateAccountForm from '../../components/CreateAccountForm';

export default class CreateAccount extends Component {
    render() {
        return (
            <div>
                <h1>This is CreateAccount</h1>
            <CreateAccountForm/>
            </div>
        )
    };
}