import React from 'react';
import '../styles/style.css';
import { Item } from './item';

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_items: [],
    };
  }

  handleAddButtonClick(event) {
    const items = this.state.todo_items;
    const title = event.target.previousSibling.value;
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
    const items = this.state.todo_items;
    const title = document.getElementById(id).value;
    const item = items.find((e) => e.id === id);
    item.edit = false;
    item.title = title;
    item.create_date = `edited at ${new Date().toLocaleString()}`;
    this.updateState(items);
  }

  updateState(items) {
    this.setState({
      todo_items: items,
    });
  }

  render() {
    const items = this.state.todo_items.map((value) => (
      <div className="todo-item-container">
        {value.edit
          ? (
            <div className="todo-item">
              <input type="text" id={value.id} defaultValue={value.title} />
            </div>
          )
          : (
            <Item
              title={value.title}
              edit={value.edit}
              create_date={value.create_date}
              key={value.id}
            />
          )}
        <div className="todo-item-buttons">
          {value.edit
            ? (
              <button type="button" id="add_button" onClick={this.handleSaveButtonClick.bind(this, value.id)}>
                Save
              </button>
            )
            : (
              <button type="button" id="add_button" onClick={this.handleEditButtonClick.bind(this, value.id)}>
                Edit
              </button>
            )}
          <button type="button" id="remove_button" onClick={this.handleRemoveButtonClick.bind(this, value.id)}>
            remove
          </button>
        </div>
      </div>
    ));

    return (
      <div className="todo-container">
        <h1> TODO list </h1>

        <div className="add-new-todo">
          <input type="text" />
          <button type="button" onClick={this.handleAddButtonClick.bind(this)}>
            +
          </button>
        </div>

        <div className="todo-items">
          {items}
        </div>

      </div>
    );
  }
}
