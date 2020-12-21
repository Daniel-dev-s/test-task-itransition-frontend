import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from '../assets/styles/item-style';

const Item = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.todoItem}>
      <div>
        <Checkbox
          checked={props.checked}
          onChange={props.checkboxHandle.bind(this, props.id)}
        />

        <span className={props.checked ? classes.titleChecked : classes.titleUnchecked}>

          {props.title}

        </span>
        <br />
        <span>

          {props.create_date}

        </span>
      </div>
    </div>
  );
};
export default Item;
