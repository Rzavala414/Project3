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
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
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
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab onClick={()=>props.handleChangePage("userPage")} icon={<PhoneIcon />} aria-label="phone" />
        <Tab onClick={()=>props.handleChangePage("newGame")} icon={<FavoriteIcon />} aria-label="favorite" />
        <Tab onClick={()=>props.handleChangePage("leaderboard")} icon={<PersonPinIcon />} aria-label="person" />
      </Tabs>
    </Paper>
  );
}
