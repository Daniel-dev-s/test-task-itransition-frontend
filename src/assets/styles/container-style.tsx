import {
  createStyles, makeStyles, StyleRules, Theme,
} from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

interface ContainerStyle {
  h1class: BaseCSSProperties;
  todoContainer: BaseCSSProperties;
  addNewTodo: BaseCSSProperties;
}

const baseStyle:StyleRules<string> = createStyles({
  '@font-face': {
    fontFamily: 'Montserrat',
    src: 'url(../fonts/Montserrat-Regular.ttf)',
  },
  h1class: {
    width: '50%',
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 900,
    color: 'white',
    border: '1px solid white',
    borderRadius: '5px',
  },
  todoContainer: {
    maxWidth: '80%',
    width: '50%',
    minWidth: '50%',
    margin: '1em auto 0',
    padding: '10px 50px',
    background: 'darkcyan',
    boxShadow: '0 0 25px deepskyblue',
    border: 'none',
    boxSizing: 'border-box',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
  },
  addNewTodo: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0',
    '& button': {
      fontWeight: 500,
      fontSize: '1em',
      height: '2em',
    },
  },
});
export const useStyles = makeStyles<Theme, ContainerStyle>(() => baseStyle as any);
