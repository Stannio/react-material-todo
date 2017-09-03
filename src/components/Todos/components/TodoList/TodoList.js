import React, { Component } from 'react'
import List from 'material-ui/List'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[2]
  }
});

class TodoList extends Component {
  render () {
    let { children, classes } = this.props;
    return (
      <List className={classes.root}>
        {children}
      </List>
    )
  }
}

export default withStyles(styles)(TodoList)
