import React, { Component } from 'react'
import './style.css'
import NewGameForm from '../../components/NewGameForm'


export default class NewGamePage extends Component {
    render() {
        return (
            <div>
                <h1 className="game-board">GameBoard</h1>
              <NewGameForm/>
            </div>
        )
    }
}
