import React, { useRef } from 'react';
import { Button, TextField } from '@material-ui/core';
import Item from './item';
import useStyles from '../assets/styles/item-list-style';

const ItemList = (props) => {
  const classes = useStyles();
  const editInputRef = useRef();

  const updateState = (items) => {
    props.setTodoItems(items);
    props.putDataToStorage(items);
  };

  const handleRemoveButtonClick = (id) => {
    let items = [...props.todoItems];
    items = items.filter((e) => e.id !== id);
    updateState(items);
  };

  const handleEditButtonClick = (id) => {
    const items = [...props.todoItems];
    const item = items.find((e) => e.id === id);
    if (item != null) item.edit = true;
    updateState(items);
  };

  const handleSaveButtonClick = (value) => {
    let items = [...props.todoItems];
    const title = editInputRef.current.childNodes[0].childNodes[0].value;
    const item = items.find((e) => e.id === value.id);
    if (item != null) {
      item.edit = false;
      item.title = title;
      item.create_date = `edited at ${new Date().toLocaleString()}`;
      items = items.filter((e) => e.id !== value.id);
      items.unshift(item);
      updateState(items);
    }
  };

  const handleItemCheckboxChecked = (id) => {
    const items = [...props.todoItems];
    const item = items.find((e) => e.id === id);
    if (item != null) item.checked = !item.checked;
    updateState(items);
  };

  return props.todoItems.map((value) => (
    <div key={Math.random() * Number.MAX_SAFE_INTEGER} className={classes.todoItemContainer}>
      {value.edit
        ? (
          <div>
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
            classes={props.classes}
            checked={value.checked}
            checkboxHandle={handleItemCheckboxChecked}
          />
        )}
      <div className={classes.todoItemButtons}>
        {value.edit
          ? (
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={() => handleSaveButtonClick(value)}
            >
              Save
            </Button>
          )
          : (
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={() => handleEditButtonClick(value.id)}
            >
              Edit
            </Button>
          )}
        <Button
          color="secondary"
          className="removeButton"
          variant="contained"
          size="small"
          onClick={() => handleRemoveButtonClick(value.id)}
        >
          remove
        </Button>
      </div>
    </div>
  ));
};
export default ItemList;
