import React from 'react';


import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    addTable: {
        color: '#555555',
        minWidth: '30px',
        lineHeight: '15px',
        float: 'right',
    },
    okBtn: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
    },
    cancelBtn: {
        backgroundColor: 'none',
        border: '1px solid ' + theme.palette.secondary.main,
        color: theme.palette.secondary.main,
    },
    delRow: {
        color: '#888888',
    },
    addPerson: {
        width: '40px',
        color: '#666666',
    },
    default: {
        border: '1px solid grey',
        color: 'grey',
    }
});

const button = props => {

    const { classes } = props;
    let type;
    switch (props.type) {
        case 'ok':
            type = classes.okBtn;
            break;
        case 'cancel':
            type = classes.cancelBtn;
            break;
        case 'addtable':
            type = classes.addTable;
            break;
        case 'delRow':
            type = classes.delRow;
            break;
        case 'addPerson':
            type = classes.addPerson;
            break;
        default:

    }
    return(
        <Button 
            onClick={props.clicked}
            disabled={props.disabled}
            className={type}>
            {props.children}
        </Button>
    )
}

export default withStyles(styles)(button);