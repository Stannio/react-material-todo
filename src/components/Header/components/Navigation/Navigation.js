import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import SideDrawer from '../SideDrawer'

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  }
};

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }
  toggleDrawer = () => {
    this.setState({
      open: !this.state.open
    })
  };
  handleDrawerClose = () => {
    this.setState({
      open: false
    })
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar disableGutters>
            <IconButton
              onClick={this.toggleDrawer}
              className={classes.menuButton}
              color="contrast"
              aria-label="Menu"
            >
              <Icon>menu</Icon>
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Todo's
            </Typography>
          </Toolbar>
        </AppBar>
        <SideDrawer
          open={this.state.open}
          handleClose={this.handleDrawerClose}
        />
      </div>
    )
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation)
