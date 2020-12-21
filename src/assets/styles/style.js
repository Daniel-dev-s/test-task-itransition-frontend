import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  '@font-face': {
    fontFamily: 'Montserrat',
    src: 'url(../fonts/Montserrat-Regular.ttf)',
  },
  'body &': {
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    fontFamily: 'Montserrat',
  },
  'button &': {
    cursor: 'pointer',
  },
  titleChecked: {
    textDecoration: 'line-through',
  },
  titleUnchecked: {
    textDecoration: 'none',
  },
  h1class: {
    fontSize: '2em',
    fontWeight: 900,
    color: 'white',
  },
  todoContainer: {
    maxWidth: '80%',
    width: '50%',
    minWidth: '30%',
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
    margin: '10px 0',
  },
  todoItems: {
    padding: '10px 5px',
    borderTop: '4px solid lightgrey',
  },
  todoItemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoItem: {
    minWidth: '50%',
    maxWidth: '70%',
    overflowWrap: 'break-word',
    borderLeft: '4px solid lightgrey',
    padding: '10px',
    margin: {
      top: '10px',
      bottom: '10px',
      right: 0,
      left: '-5px',
    },
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
  '@media (max-device-width: 1000px)': {
    todoContainer: {
      maxWidth: '65%',
      width: '60%',
    },
    '* &': {
      fontSize: '1em',
    },
    addNewTodo: {
      width: '100%',
    },
    todoItemButtons: {
      display: 'flex',
      flexDirection: 'column',
      button: {
        '&:first-of-type': {
          marginBottom: '1em',
        },
      },
    },
  },
  '@media (max-device-width: 720px)': {
    todoContainer: {
      maxWidth: '95%',
      width: '90%',
    },
    '* &': {
      fontSize: '1em',
    },
    addNewTodo: {
      width: '100%',
    },
    todoItemButtons: {
      display: 'flex',
      flexDirection: 'column',
      button: {
        '&:first-of-type': {
          marginBottom: '1em',
        },
      },
    },
  },
}));
export default useStyles;
