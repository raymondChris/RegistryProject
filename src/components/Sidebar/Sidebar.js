import React from 'react';

import Button from '../../UI/Button';

import { PlaylistAdd } from '@material-ui/icons';
import { Drawer, Divider, List, ListItem, ListItemText, ListItemIcon, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SelectPrf from '../SelectPrf/SelectPrf'

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  pnlButton: {
    padding: '5px',
  },
  toolbar: theme.mixins.toolbar,
  
});



const sidebar = (props) => {
  const { classes, list } = props;
  const title = (list) ? 'Registry List' : 'Create a Registry'
  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
          <List>
            <ListItem>
              <ListItemText primary={title}/>
              <ListItemIcon onClick={props.clickedAdd}>
                <Button
                  type={'addtable'}
                >
                  <PlaylistAdd/>
                </Button>
                  {/*<PlaylistAdd/>*/}
              </ListItemIcon>
            </ListItem>
          </List>
          <Divider/>
          <List>
            {list.map((registry, index) => (
              <ListItem
                onClick={e => {props.clickedSelected(e, index)}}
                button
                key={index+registry}
              >
                {/*<ListItemIcon>
                  <Mail/>
                </ListItemIcon>}*/}
                <ListItemText primary={registry.registryName.charAt(0).toUpperCase() + registry.registryName.substring(1)} />
              </ListItem>
            ))}
          </List>
          <Divider/>
      </Drawer>
      </div>
  )
}

export default withStyles(styles)(sidebar)