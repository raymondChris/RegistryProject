import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import { Typography, TextField, Paper } from '@material-ui/core';

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
    search: {
      marginBottom: '20px',
    }
  }
);

const UserList = (props) => {
  
    const { classes, userList, lookForUser } = props;
    console.log("lista è ")
console.log(userList.length)
  return (
    <List dense className={classes.root}>
        <TextField
            className={classes.search}
            id="standard-search" 
            required label="Search field" 
            type="search" 
            onChange={ e => lookForUser(e)}
        />
        <Paper>
        {userList.length>0 ? userList.map((user, i) => {
            return (
                <ListItem className={classes.row} key={user[0].value + i} button>
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
        }) : 'No records to display'}
        </Paper>
        
    </List>
  );
}

export default withStyles(styles)(UserList)