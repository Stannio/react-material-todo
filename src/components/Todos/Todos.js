import React, { Component } from 'react'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Snackbar from 'material-ui/Snackbar'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 'calc(100% - 64px)',
    overflowY: 'auto',
    padding: 16
  }
});

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      snackbarOpen: false,
      snackbarMessage: ""
    }
  }
  openSnackbar = (message) => {
    this.setState({
      snackbarOpen: true,
      snackbarMessage: message
    })
  };
  closeSnackbar = () => {
    this.setState({
      snackbarOpen: false,
      snackbarMessage: ''
    })
  };
  componentDidMount() {
    this.refreshState()
  }
  refreshState = () => {
    let { db } = this.props;
    db.todos.toArray().then(items => {
      this.setState({
        todos: items
      })
    })
  };
  addTodo = (formValues) => {
    let { val } = formValues;
    let { db } = this.props;
    let Todo = {
      title: val,
      date: Date.now()
    };
    db.todos.add(Todo).then(() => {
      this.refreshState()
    }).catch(() => {
      this.openSnackbar('Error occurred while adding a todo')
    })
  };
  onRemove = id => {
    let { db } = this.props;
    db.todos
      .delete(id)
      .then(() => {
        // Success
        this.openSnackbar("Removed todo");
        this.refreshState()
      })
      .catch(() => {
        this.openSnackbar("Error occurred");
      })
  };
  render() {
    let { classes } = this.props;
    let todos = this.state.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} onRemove={this.onRemove} />
    ));
    return (
      <Grid container justify="center" align="center" className={classes.root} spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <TodoList>
            <ReactCSSTransitionGroup
              transitionName="todo"
              transitionEnterTimeout={150}
              transitionLeaveTimeout={150}>
              {todos}
            </ReactCSSTransitionGroup>
            <TodoForm onAdd={this.addTodo} />
          </TodoList>
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.snackbarOpen}
          message={this.state.snackbarMessage}
          onRequestClose={this.closeSnackbar}
          autoHideDuration={5000}
        />
      </Grid>
    )
  }
}

export default withStyles(styles)(Todos)
