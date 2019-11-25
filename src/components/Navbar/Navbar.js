import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
});

const navbar = (props) => {
    const {classes} = props;
    return(
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Registry App
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(navbar)