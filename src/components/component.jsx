import React, { useState } from 'react';
import '../styles/style.css';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useRef } from 'react';
import { Item } from './item';

export const Container = (props) => {
  const getDataFromStorage = () => (localStorage.getItem('items') != null
    ? JSON.parse(localStorage.getItem('items')) : []);

  const putDataToStorage = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
  };

  const [todoItems, setTodoItems] = useState(
    getDataFromStorage(),
  );
  const [addNewTaskInput, setNewTaskInput] = useState('');

  const editInputRef = useRef();

  const updateState = (items) => {
    setTodoItems(items);
    putDataToStorage(items);
  };

  const handleAddButtonClick = () => {
    const items = todoItems;
    const title = addNewTaskInput;
    const id = Math.random() * Number.MAX_SAFE_INTEGER;
    if (title.length > 0) {
      items.unshift({
        title,
        id,
        edit: false,
        checked: false,
        create_date: `created at ${new Date().toLocaleString()}`,
      });
    }
    updateState(items);
  };

  const handleRemoveButtonClick = (id) => {
    let items = todoItems;
    items = items.filter((e) => e.id !== id);
    updateState(items);
  };

  const handleEditButtonClick = (id) => {
    const items = todoItems;
    const item = items.find((e) => e.id === id);
    if (item != null) item.edit = true;
    updateState(items);
  };

  const handleSaveButtonClick = (id) => {
    let items = todoItems;
    const title = editInputRef.current.childNodes[0].childNodes[0].value;
    const item = items.find((e) => e.id === id);
    item.edit = false;
    item.title = title;
    item.create_date = `edited at ${new Date().toLocaleString()}`;
    items = items.filter((e) => e.id !== id);
    items.unshift(item);
    updateState(items);
  };

  const handleAddTaskInputChange = (event) => {
    setNewTaskInput(event.target.value);
  };

  const handleItemCheckboxChecked = (id) => {
    const items = todoItems;
    const item = items.find((e) => e.id === id);
    if (item != null) item.checked = !item.checked;
    updateState(items);
  };

  const items = todoItems.map((value) => (
    <div key={Math.random() * Number.MAX_SAFE_INTEGER} className="todo-item-container">
      {value.edit
        ? (
          <div className="todo-item">
            <TextField
              defaultValue={value.title}
              color="primary"
              variant="outlined"
              ref={editInputRef}
            />
          </div>
        )
        : (
          <Item
            title={value.title}
            edit={value.edit}
            create_date={value.create_date}
            id={value.id}
            checked={value.checked}
            checkboxHandle={handleItemCheckboxChecked.bind(this)}
          />
        )}
      <div className="todo-item-buttons">
        {value.edit
          ? (
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={handleSaveButtonClick.bind(this, value.id)}
            >
              Save
            </Button>
          )
          : (
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={handleEditButtonClick.bind(this, value.id)}
            >
              Edit
            </Button>
          )}
        <Button
          color="secondary"
          className="remove-button"
          variant="contained"
          size="small"
          onClick={handleRemoveButtonClick.bind(this, value.id)}
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
          onChange={handleAddTaskInputChange.bind(this)}
          variant="outlined"
          color="primary"
        />
        <Button
          color="primary"
          variant="contained"
          onClick={handleAddButtonClick.bind(this)}
        >
          Add
        </Button>
      </div>

      <div className="todo-items">
        {items}
      </div>

    </div>
  );
};
