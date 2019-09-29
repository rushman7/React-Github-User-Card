import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  cssLabel: {
    color : 'white'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white',
  },
  cssFocused: {
    color : 'white'
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: 'white',
    }
  },
}));

export default function SearchForm(props) {
  const classes = useStyles();

  return(
    <form noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Search"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        value={props.search}
        onChange={props.onChange}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          }
        }}
      />
    </form>
  )
}