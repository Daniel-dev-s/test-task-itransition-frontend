import {
  createMuiTheme,
  createStyles, makeStyles, StyleRules, Theme,
} from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

const theme = createMuiTheme({
  spacing: 5,
});

interface ItemListStyle {
  todoItems: BaseCSSProperties;
  todoItemButtons: BaseCSSProperties;
  todoItemContainer: BaseCSSProperties;
}

const baseStyle:StyleRules<string> = createStyles({
  todoItems: {
    padding: theme.spacing(2),
    borderTop: '4px solid lightgrey',
  },
  todoItemButtons: {
    '& button': {
      fontSize: '1em',
      fontWeight: 500,
      '&:first-child': {
        marginRight: theme.spacing(2),
      },
    },
  },
  todoItemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1em',
  },
});
export const useStyles = makeStyles<Theme, ItemListStyle>(() => baseStyle as any);
