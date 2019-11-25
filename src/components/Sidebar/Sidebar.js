import React from 'react';

import Button from '../../UI/Button';

import Mail from '@material-ui/icons/Mail';
import { Drawer, Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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

  const panelButton = <Button
                        type={'addtable'}
                      >&#43;
                      </Button>
  const { classes, list } = props;

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
          <div className={classes.pnlButton}>
            {panelButton}
          </div>
            
          <Divider/>
          <List>
            {list.map((registry, index) => (
              <ListItem
                onClick={e => {props.clicked(e, index)}}
                button
                key={index+registry}
              >
                {/*<ListItemIcon>
                  <Mail/>
                </ListItemIcon>}*/}
                <ListItemText
                  primary={registry.registryName.charAt(0).toUpperCase() + registry.registryName.substring(1)} />
              </ListItem>
            ))}
          </List>
      </Drawer>
      </div>
  )
}

export default withStyles(styles)(sidebar)