// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import FolderIcon from '@material-ui/icons/Folder';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     width: 500,
//   },
// });

// export default function LabelBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState('recents');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
//       <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
//       <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
//       <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
//       <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
//     </BottomNavigation>
//   );
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PersonIcon from '@material-ui/icons/Person';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import GavelIcon from '@material-ui/icons/Gavel';
import './style.css';

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
