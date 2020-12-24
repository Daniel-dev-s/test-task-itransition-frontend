import * as React from 'react';
import { Button, TextField } from '@material-ui/core';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import { useRef } from 'react';
import Item from './item';
import { useStyles } from '../assets/styles/item-list-style';
import { putData } from '../service/DataService';

// describe item object
export interface ItemObject {
  title:string;
  edit:boolean;
  id:number;
  create_date:string;
  checked:boolean;
}

// describe classes of item-list-style
interface ItemStyleInterface {
  todoItems: BaseCSSProperties;
  todoItemButtons: BaseCSSProperties;
  todoItemContainer: BaseCSSProperties;
}

// var that contains all style classes from item-list-style
type PropsClasses = Record<keyof ItemStyleInterface, string>;

type ItemObjectType = ItemObject;

export interface ItemListInterface {
  todoItems: Array<ItemObjectType>;
  setTodoItems(items:Array<ItemObjectType>): void;
}

export type Props = ItemListInterface;

// TODO change return type, ReactElement doesn't work
function ItemList({ todoItems, setTodoItems }: Props): any {
  const classes: PropsClasses = useStyles({} as ItemStyleInterface);
  const editInputRef = useRef();

  // method, that used to update state and save data
  const updateState = (items:Array<ItemObjectType>) => {
    setTodoItems(items);
    putData(items);
  };

  // removes task by its id
  const handleRemoveButtonClick = (id:number) => {
    let items = [...todoItems];
    items = items.filter((e) => e.id !== id);
    updateState(items);
  };

  // changes task state 'edit'
  const handleEditButtonClick = (id:number) => {
    const items = [...todoItems];
    const item = items.find((e) => e.id === id);
    if (item != null) item.edit = true;
    updateState(items);
  };

  // add new task with written title and current date
  const handleSaveButtonClick = (value:ItemObjectType) => {
    let items = [...todoItems];
    // @ts-ignore
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

  // change task state 'checked' to display line-through text or not
  const handleItemCheckboxChecked = (id:number) => {
    const items = [...todoItems];
    const item = items.find((e) => e.id === id);
    if (item != null) item.checked = !item.checked;
    updateState(items);
  };

  // returns collection of Item elements in blocks
  return todoItems.map((value:ItemObjectType) => (
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
            create_date={value.create_date}
            id={value.id}
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
}
export default ItemList;
