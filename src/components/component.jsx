import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import ItemList from './itemList';
import { loadData, putData } from '../service/DataService';
import useStyles from '../assets/styles/container-style';

const Container = () => {
  const classes = useStyles();

  const [todoItems, setTodoItems] = useState(loadData() != null ? loadData() : []);
  const [addNewTaskInput, setNewTaskInput] = useState('');

  const handleAddTaskInputChange = (event) => { setNewTaskInput(event.target.value); };

  const handleAddButtonClick = () => {
    const items = [...todoItems];
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
    setTodoItems(items);
    putData(items);
  };

  return (
    <div className={classes.todoContainer}>
      <h1 className={classes.h1class}> TODO list </h1>
      <div className={classes.addNewTodo}>
        <TextField
          onChange={handleAddTaskInputChange}
          variant="outlined"
          color="primary"
        />
        <Button
          color="primary"
          variant="contained"
          onClick={handleAddButtonClick}
        >
          Add
        </Button>
      </div>

      <div className="todoItems">
        <ItemList
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          putDataToStorage={putData}
          classes={classes}
        />
      </div>

    </div>
  );
};
export default Container;
