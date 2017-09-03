import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'
import PropTypes from "proptypes";

const styles = {
  list: {
    width: 250,
    flex: 'initial'
  }
};

class SideDrawer extends Component {
  render () {
    let {
      open,
      classes,
      handleClose
    } = this.props;
    return (
      <Drawer
        open={open}
        onRequestClose={handleClose}
        onClick={handleClose}
      >
        <List className={classes.list}>
          <div>
            <ListItem button>
              <ListItemText primary="Placeholder"/>
            </ListItem>
          </div>
        </List>
      </Drawer>
    )
  }
}

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(SideDrawer)
