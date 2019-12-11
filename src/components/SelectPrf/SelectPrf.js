import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
});

const SelectPrf = (props) => {
  const { profiles, classes, profileSelected } = props;

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  const menu = profiles.map( value => <MenuItem key={value.profile} value={value.profile}>{value.profile}</MenuItem>)

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Profile</InputLabel>
        <Select
          autoWidth={true}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          defaultValue={profileSelected}
          onChange={(e) => props.changed(e)}
        >
          {menu}
        </Select>
      </FormControl>
    </div>
  );
}

export default withStyles(styles)(SelectPrf)