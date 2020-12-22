import * as React from 'react';
import { ReactElement } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import { useStyles } from '../assets/styles/item-style';

export interface ItemProps {
  checked: boolean;
  checkboxHandle(id:number): void;
  title:string;
  create_date:string;
  id: number;
}

interface StyleInterface {
  titleChecked: BaseCSSProperties,
  titleUnchecked: BaseCSSProperties,
  todoItem: BaseCSSProperties,
}

type PropsClasses = Record<keyof StyleInterface, string>;

export type Props = ItemProps;
function Item({
  checked,
  checkboxHandle,
  create_date,
  title,
  id,
}:Props):ReactElement<Props> {
  const classes: PropsClasses = useStyles({} as StyleInterface);
  return (
    <div className={classes.todoItem}>
      <div>
        <Checkbox
          checked={checked}
          onChange={checkboxHandle.bind(this, id)}
        />

        <span className={checked ? classes.titleChecked : classes.titleUnchecked}>

          {title}

        </span>
        <br />
        <span>

          {create_date}

        </span>
      </div>
    </div>
  );
}
export default Item;
