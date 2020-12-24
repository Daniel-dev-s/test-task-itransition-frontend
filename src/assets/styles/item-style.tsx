import {
  createStyles, makeStyles, StyleRules, Theme, createMuiTheme,
} from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

const theme = createMuiTheme({
  spacing: 2,
});

interface StyleProps {
  titleChecked: BaseCSSProperties,
  titleUnchecked: BaseCSSProperties,
  todoItem: BaseCSSProperties,
}

const baseStyle:StyleRules<string> = createStyles({
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
    borderColor: 'darkgreen',
    borderLeft: '4px solid black',
    borderLeftColor: 'deepskyblue',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
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
});
export const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);
