import React from "react";
import classes from "./CallBack.module.scss"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const DialogTitle = (props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography {...other}>
      <Typography variant="h4">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

function CallBack({callBackIsOpen, callBackSetOpen}) {
  return (
    <div className={classes.CallBack}>
      <Dialog onClose={callBackSetOpen} aria-labelledby="customized-dialog-title" open={callBackIsOpen}>
        <DialogTitle id="customized-dialog-title" onClose={callBackSetOpen}>
          Оставьте свои контакты и мы с вами обязательно свяжемся!
        </DialogTitle>
        <MuiDialogContent dividers>

        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={callBackSetOpen} color="primary">
            Save changes
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}

export default CallBack