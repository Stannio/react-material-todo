import React, { Component } from 'react'
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import moment from 'moment'

class TodoItem extends Component {
  render () {
    let { todo } = this.props;
    let date = moment(todo.date).fromNow();
    return (
      <ListItem dense button key={todo.id} className="todo closed">
        <Checkbox
          checked={false}
          tabIndex="-1"
          disableRipple
        />
        <ListItemText primary={todo.title} secondary={date}/>
        <ListItemSecondaryAction>
          <IconButton onClick={() => {
            this.props.onRemove(todo.id)
          }}>
            <Icon>
              delete
            </Icon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

export default TodoItem
