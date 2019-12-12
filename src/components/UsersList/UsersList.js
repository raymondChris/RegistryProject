import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Typography, TextField, Paper, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    width: '100%',
  },
  row: {
      width: 'auto',
  },
  infoValue: {
      width: '120px',
      margin: '8px',
    },
  search: {
      marginBottom: '16px',
    },
  }
);

const UserList = (props) => {
  
    const { classes, userList, lookForUser } = props;
    console.log("lista è ")
console.log(userList.length)

  return (
    <List dense className={classes.root}>
        <TextField
          InputProps={{
            startAdornment:(
              <InputAdornment position='start'>
                <SearchIcon/>
              </InputAdornment>
            )
          }}
            className={classes.search}
            id="standard-search" 
            required
            type="search" 
            onChange={ e => lookForUser(e)}
            placeholder="Type to find users"
        />

        <Paper elevation={0}>

        <ListItem
          className={classes.row}
        >
          {userList.length>0 ? userList[0].map(info => {
            return (
              info.isRequired ?
              <ListItemText
                className={classes.infoValue}
                key={ info.value + info.label}
                id={info.label}
              >
                <Typography
                  variant='subtitle2'
                  noWrap={true}
                  children={info.label.toUpperCase()}
                />
              </ListItemText>
              : null
            )
          }) : null}
        </ListItem>

        

        {userList.length>0 ? userList.map((user, i) => {
            return (
                <ListItem 
                  className={classes.row}
                  key={user[0].value + i}
                  button
                >
                    {user.map( info => {
                            return (
                                info.isRequired ? 
                                <ListItemText
                                  className={classes.infoValue}
                                  key={ user[0].value + info.label}
                                  id={info.label}
                                >
                                    <Typography
                                      variant='caption'
                                      noWrap={true}
                                      children={info.value}/>
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

export default withStyles(styles, {withTheme: true})(UserList)