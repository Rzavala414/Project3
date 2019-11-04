import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default class NewGameForm extends Component {
    render() {
        return (
            <div class="wrapper">
                <div class="box a">A</div>
                <div class="box b">user1</div>
                <div class="box c">user1avg</div>
                <div class="box d">user2</div>
                <div class="box e">user2avg</div>
                <div class="box f">play</div>
                <input class="user-one-play"></input>
                <div class="user-one-play-avg">{}</div>
                <input class="user-two-play"></input>
                <div class="user-two-play-avg">{}</div>
                
                <input class="user-one-count"></input>
                <div class="user-one-count-avg">{}</div>
                <input class="user-two-count"></input>
                <div class="user-two-count-avg">{}</div>
                
                <input class="user-one-crib"></input>
                <div class="user-one-crib-avg">{}</div>
                <input class="user-two-crib"></input>
                <div class="user-two-crib-avg">{}</div>

                <input class="user-one-total"></input>
                <div class="user-one-total-avg">{}</div>
                <input class="user-two-total"></input>
                <div class="user-two-total-avg">{}</div>

            </div>
        )
    }
}



    