import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const Item = (props) => (
  <div className="todoItem">
    <div>
      <Checkbox
        checked={props.checked}
        onChange={props.checkboxHandle.bind(this, props.id)}
      />

      <span className={props.checked ? 'titleChecked' : 'titleUnchecked'}>

        {props.title}

      </span>
      <br />
      <span>

        {props.create_date}

      </span>
    </div>
  </div>
);
export default Item;
