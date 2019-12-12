import React from 'react';

import { Switch, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { green, red } from '@material-ui/core/colors';

/*const styles = theme => ({
    root: {
      '&$checked': {
        color: green[500],
      },
      '&$checked + $track': {
        backgroundColor: green[300],
      },
      '&$disabled': {
        color: '#cccccc'
      },
      '&$disabled + $track': {
        backgroundColor: '#888888'
      },
      color: red[500],
      disabled: {
        '&$checked': {
          color: green[100],
        },
        '&$checked + $track': {
          backgroundColor: green[500],
        },
      },
      checked: {},
      track: {
        backgroundColor: '#dddddd'
      },
    },
    disabled: {
      checked: {
        color: green[100],
      },
      '&$checked + $track': {
        backgroundColor: green[500],
      },
    },
    checked: {
      color: green[100],
    },
    track: {
      backgroundColor: '#dddddd'
    },
})

const TooltipStyled = withStyles({
    tooltip: {
      margin: '0px'
    }
})(Tooltip)

  const SwitchComponent = (props) => {

    return (
      <TooltipStyled title={props.checked ? "Active" : "Not Active"} placement={"top"}>
        <Switch
          className={props.classes.root}
          onChange={props.changed}
          disabled={props.disabled}
          checked={props.checked}
        />
      </TooltipStyled>
        
    )
  }

  export default withStyles(styles, { withTheme: true})(SwitchComponent)*/

const StyledSwitch = withStyles( theme => ({
    switchBase: {
      '&$checked': {
        color: theme.palette.primary.main,
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.primary.main,
      },
      '&$disabled': {
        color: '#ffffff'
      },
      '&$disabled + $track': {
        backgroundColor: '#777777'
      },
      color: '#ffebee',
    },
    disabled: {
      '&$checked': {
        color: '#ffebee',
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.primary.main,
      },
    },
    checked: {},
    track: {
      backgroundColor: theme.palette.primary.light
    },
}))(Switch)

const TooltipStyled = withStyles({
    tooltip: {
      margin: '0px'
    }
})(Tooltip)

  const SwitchComponent = (props) => {

    return (
      <TooltipStyled title={props.checked ? "Active" : "Not Active"} placement={"top"}>
        <StyledSwitch
          onChange={props.changed}
          disabled={props.disabled}
          checked={props.checked}
        />
      </TooltipStyled>
        
    )
  }

export default SwitchComponent