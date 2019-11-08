import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PersonIcon from '@material-ui/icons/Person';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import GavelIcon from '@material-ui/icons/Gavel';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    boxShadow: "-5px -10px 200px black"
  },
});

export default function IconTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs className="tabsBar"
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab onClick={()=>props.handleChangePage("userPage")} icon={<PersonIcon />} aria-label="person" />
        <Tab onClick={()=>props.handleChangePage("newGame")} icon={<PlayArrowIcon />} aria-label="newGame" />
        <Tab onClick={()=>props.handleChangePage("leaderboard")} icon={<EmojiEventsIcon />} aria-label="trophy" />
        <Tab onClick={()=>props.handleChangePage("rulesNScoring")} icon={<GavelIcon />} aria-label="gavel" />
      </Tabs>
    </Paper>
  );
}
