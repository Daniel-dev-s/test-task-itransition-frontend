import React from 'react';
import '../styles/style.css';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Item } from './item';

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_items: localStorage.getItem('items') != null
        ? JSON.parse(localStorage.getItem('items')) : [],
    };
  }

  handleAddButtonClick(event) {
    const items = this.state.todo_items;
    const title = document.getElementById('new-task-add-input').value;
    const id = Math.random() * Number.MAX_SAFE_INTEGER;
    if (title.length > 0) {
      items.unshift({
        title,
        id,
        edit: false,
        create_date: `created at ${new Date().toLocaleString()}`,
      });
    }
    this.updateState(items);
  }

  handleRemoveButtonClick(id) {
    let items = this.state.todo_items;
    items = items.filter((e) => e.id !== id);
    this.updateState(items);
  }

  handleEditButtonClick(id) {
    const items = this.state.todo_items;
    items.find((e) => e.id === id).edit = true;
    this.updateState(items);
  }

  handleSaveButtonClick(id) {
    let items = this.state.todo_items;
    const title = document.getElementById(id).value;
    const item = items.find((e) => e.id === id);
    item.edit = false;
    item.title = title;
    item.create_date = `edited at ${new Date().toLocaleString()}`;
    items = items.filter((e) => e.id !== id);
    items.unshift(item);
    this.updateState(items);
  }

  updateState(items) {
    this.setState({
      todo_items: items,
    });
    localStorage.setItem('items', JSON.stringify(items));
  }

  render() {
    const items = this.state.todo_items.map((value) => (
      <div key={Math.random() * Number.MAX_SAFE_INTEGER} className="todo-item-container">
        {value.edit
          ? (
            <div className="todo-item">
              <TextField
                id={value.id}
                defaultValue={value.title}
                color="default"
                variant="outlined"
                className="edit-task-input"
              />
            </div>
          )
          : (
            <Item
              title={value.title}
              edit={value.edit}
              create_date={value.create_date}
              id={value.id}
            />
          )}
        <div className="todo-item-buttons">
          {value.edit
            ? (
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={this.handleSaveButtonClick.bind(this, value.id)}
              >
                Save
              </Button>
            )
            : (
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={this.handleEditButtonClick.bind(this, value.id)}
              >
                Edit
              </Button>
            )}
          <Button
            color="secondary"
            className="remove_button"
            variant="contained"
            size="small"
            onClick={this.handleRemoveButtonClick.bind(this, value.id)}
          >
            remove
          </Button>
        </div>
      </div>
    ));

    return (
      <div className="todo-container">
        <h1> TODO list </h1>

        <div className="add-new-todo">
          <TextField
            id="new-task-add-input"
            variant="outlined"
            color="primary"
          />
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleAddButtonClick.bind(this)}
          >
            Add
          </Button>
        </div>

        <div className="todo-items">
          {items}
        </div>

      </div>
    );
  }
}
