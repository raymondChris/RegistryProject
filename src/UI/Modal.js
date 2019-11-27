import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const styles = {
  paper: {
    position: 'absolute',
    width: 400,
    border: '1px solid #cccccc',
    backgroundColor: 'whitesmoke',
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closebtn: {
    position: 'absolute',
    top: '0px',
    right: '7px',
    color: '#cccccc',
    fontSize: '35px',
    cursor: 'pointer',
  },
  title: {
    margin: '0px',
    borderBottom: '1px solid #cccccc',
    padding: '15px',
  },
  body:{
    padding: '15px',
  },
  action: {
    padding: '15px',
    borderTop: '1px solid #cccccc',
  }
};

const  modal = (props) => {

  const { classes } = props;


  const title = <h2 className={classes.title}>{props.title}</h2>
  const body = <div className={classes.body}>{props.body}</div>
  const action = props.action === undefined ? null : <div className={classes.action}>{props.action}</div>;

  return (
      <Modal
        className={classes.modalContainer}
        open={true}
        onClose={props.close}
      >
        <div className={classes.paper}>
          <span
            className={classes.closebtn}
            onClick={props.close}
          >&times;
          </span>
          {title}
          {body}
          {action}
        </div>
      </Modal>
  );
}

export default withStyles(styles)(modal)