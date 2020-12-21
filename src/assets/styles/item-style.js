import { createStyles, makeStyles } from '@material-ui/core/styles';
import color from 'color';

const useStyles = makeStyles(() => createStyles({
  titleChecked: {
    textDecoration: 'line-through',
  },
  titleUnchecked: {
    textDecoration: 'none',
  },
  todoItem: {
    minWidth: '50%',
    maxWidth: '60%',
    overflowWrap: 'break-word',
    borderRadius: '5px',
    border: '1px solid black',
    borderColor: color('darkcyan')
      .darken(0.3)
      .hex(),
    borderLeft: '4px solid black',
    borderLeftColor: 'deepskyblue',
    padding: '10px',
    margin: {
      top: '10px',
      bottom: '10px',
      right: 0,
      left: '-5px',
    },
    '& div': {
      '& span': {
        verticalAlign: 'middle',
        fontWeight: 700,
        letterSpacing: '.1em',
        color: 'white',
        '&:last-child': {
          verticalAlign: 'bottom',
          color: 'lightgrey',
          fontSize: '0.7em',
          letterSpacing: 'normal',
          fontWeight: 'normal',
        },
      },
    },
  },
}));
export default useStyles;
