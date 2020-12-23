import * as React from 'react';
import { Button, TextField } from '@material-ui/core';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import ItemList from './itemList';
import { useStyles } from '../assets/styles/container-style';
import { loadData, putData } from '../service/DataService';

// describe classes of container-style
interface ContainerStyleInterface {
  h1class: BaseCSSProperties;
  todoContainer: BaseCSSProperties;
  addNewTodo: BaseCSSProperties;
}
// contains classes of container style
type PropsClasses = Record<keyof ContainerStyleInterface, string>;

function Container(): React.ReactElement {
  const classes: PropsClasses = useStyles({} as ContainerStyleInterface);
  // hook to keep and change items collection
  const [todoItems, setTodoItems] = React.useState(loadData() != null ? loadData() : []);
  // hook to keep input task text
  const [addNewTaskInput, setNewTaskInput] = React.useState('');

  const handleAddTaskInputChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setNewTaskInput(event.target.value);
  };

  // add new task to the top of collection
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

  // returns container with list of items
  return (
    <div className={classes.todoContainer}>
      <h1 className={classes.h1class}> TODO list </h1>
      <div className={classes.addNewTodo}>
        <TextField
          onChange={handleAddTaskInputChange}
          variant="outlined"
          color="primary"
          data-testid="test-text-input"
        />
        <Button
          color="primary"
          variant="contained"
          onClick={handleAddButtonClick}
          data-testid="test-button-add"
        >
          Add
        </Button>
      </div>

      <div className="todoItems">
        <ItemList
          todoItems={todoItems}
          setTodoItems={setTodoItems}
        />
      </div>

    </div>
  );
}
export default Container;
