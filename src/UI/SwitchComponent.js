import React from 'react';

import { Switch, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { green, red } from '@material-ui/core/colors';

const StyledSwitch = withStyles({
    switchBase: {
      '&$checked': {
        color: green[500],
      },
      '&$checked + $track': {
        backgroundColor: green[300],
      },
      '&$disabled': {
        color: red[100]
      },
      '&$disabled + $track': {
        backgroundColor: red[500]
      },
      color: red[500],
    },
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
      backgroundColor: red[300]
    },
})(Switch)

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