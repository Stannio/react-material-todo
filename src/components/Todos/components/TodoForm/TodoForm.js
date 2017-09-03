import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Grid from 'material-ui/Grid'

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      val: ''
    }
  }
  handleInputChange = (evt) => {
    let value = evt.target.value;
    this.setState({
      val: value
    })
  };
  addTodo = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state);
    this.setState({
      val: ''
    })
  };
  render () {
    return (
      <ListItem>
        <Grid container align="center" justify="center" spacing={0}>
          <Grid item xs={10}>
            <form action="#" onSubmit={this.addTodo}>
              <TextField
                id="todo"
                label="Todo..."
                inputProps={{ name: 'todo' }}
                onChange={this.handleInputChange}
                value={this.state.val}
                helperText="Add a todo here"
                fullWidth
                margin="normal"
              />
            </form>
          </Grid>
          <Grid item xs style={{ textAlign: 'center'}}>
            <IconButton onClick={this.addTodo}>
              <Icon>
                add
              </Icon>
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
    )
  }
}

export default TodoForm
