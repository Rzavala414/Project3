import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import GavelIcon from '@material-ui/icons/Gavel';
import './style.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar(props) {

  // state = {
  //   redirect: false
  // }
  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }
  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/' />
  //   }
  // }
  // render () {
  //   return (
  //      <div>
  //       {this.renderRedirect()}
  //       <button onClick={this.setRedirect}>Redirect</button>
  //      </div>
  //   )
  // }
// }

const classes = useStyles();
const [auth] = React.useState(true);
// const [auth, setAuth] = React.useState(true);
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

// const handleChange = event => {
//   setAuth(event.target.checked);
// };

const handleMenu = event => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

return (
  <div className={classes.root}>
    <AppBar position="static" className="topNav">
      <Toolbar>
        {/* {this.renderRedirect()} */}
        <IconButton onClick={()=>props.handleChangePage("landingPage")} edge="start" className={classes.menuButton} color="gray" aria-label="menu">
          <GavelIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          CribSmack
          </Typography>
        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="gray"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <Link to={"/login"}>
                <MenuItem>Log Out</MenuItem>
              </Link>
              <Link to={"/createaccount"}>
                <MenuItem>Create Account</MenuItem>
              </Link>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  </div>
)}
