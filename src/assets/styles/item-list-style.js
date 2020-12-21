import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  todoItems: {
    padding: '10px 5px',
    borderTop: '4px solid lightgrey',
  },
  todoItemButtons: {
    '& button': {
      fontSize: '1em',
      fontWeight: 500,
      '&:first-child': {
        marginRight: '1em',
      },
    },
  },
  todoItemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1em',
  },
}));
export default useStyles;
