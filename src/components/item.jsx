import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export function Item(props) {
  return (
    <div className="todo-item">
      <div>
        <Checkbox
          checked={props.checked}
          onChange={props.checkboxHandle.bind(this, props.id)}
        />

        <span className={props.checked ? 'title-checked' : 'title-unchecked'}>

          {props.title}

        </span>
        <br />
        <span>

          {props.create_date}

        </span>
      </div>
    </div>
  );
}
