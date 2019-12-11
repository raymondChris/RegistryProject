import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { Typography, TextField } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  row: {
      width: 'auto',
  },
  infoValue: {
      width: '120px',
      margin: '8px',
      textTransform: 'capitalize',
    },
  }
);

const UserList = (props) => {
  
    const { classes, userList, lookForUser } = props;
  return (
    <List dense className={classes.root}>
        <TextField
            id="standard-search" 
            required label="Search field" 
            type="search" 
            onChange={ e => lookForUser(e)}
        />
        {userList.map((user, i) => {
            return (
                <ListItem className={classes.row} key={user[0].value} button>
                    {user.map( info => {
                            return (
                                info.isRequired ? 
                                <ListItemText className={classes.infoValue} key={ user[0].value + info.label} id={info.label} >
                                    <Typography noWrap={true} children={info.value}/>
                                </ListItemText>
                                : null
                            )
                        })
                    }
                </ListItem>
            )
        })}
    </List>
  );
}

export default withStyles(styles)(UserList)