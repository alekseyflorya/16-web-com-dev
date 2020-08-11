import React, {useState} from "react";
import classes from "./CallBack.module.scss"
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from "@material-ui/core/TextField";

function CallBack({callBackIsOpen, callBackSetOpen}) {
  const [formValues, setFormValues] = useState({
    name: '',
    tel: ''
  })

  const [callBackSuccessIsOpen, setCallBackSuccessIsOpen] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.currentTarget;
    setFormValues({...formValues, [id]: value});
  }

  const handleCallBackSuccess = () => {
    setCallBackSuccessIsOpen(!callBackSuccessIsOpen)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append('name', formValues.name);
    formData.append('tel', formValues.tel);
    fetch('sendCallback.php', {
      method: "POST",
      body: formData
    })
      .then(response => response.json());

    if (formValues.name && formValues.tel) {
      callBackSetOpen();
      handleCallBackSuccess();
    }
  };

  return (
    <div className={classes.CallBack}>
      <Dialog
        onClose={callBackSetOpen}
        aria-labelledby="customized-dialog-title"
        open={callBackIsOpen}
        className={classes.CallBackBox}
        classes={{paper: classes.CallBackDialog}}
      >
        <h3 className={classes.Headding}>Оставьте свои контакты и мы с вами<span className={classes.Back}> обязательно свяжемся!</span></h3>
        <IconButton aria-label="close" onClick={callBackSetOpen} className={classes.CloseBtn}>
          <CloseIcon />
        </IconButton>

        <form
          className={classes.Form}
          id="callback-form"
          onSubmit={onSubmit}
        >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={formValues.name}
            label="Имя"
            required
            type="text"
            fullWidth
            className={classes.InputName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="tel"
            value={formValues.tel}
            label="Телефон"
            type="tel"
            required
            fullWidth
            onChange={handleChange}
          />
          <button type="submit" className={classes.SubmitButton}>Свяжитесь со мной</button>
        </form>
      </Dialog>
      <Dialog
        onClose={handleCallBackSuccess}
        aria-labelledby="customized-dialog-title"
        open={callBackSuccessIsOpen}
        className={classes.CallBackBox}
        classes={{paper: classes.CallBackDialog}}
      >
        <IconButton aria-label="close" onClick={handleCallBackSuccess} className={classes.CloseBtn}>
          <CloseIcon />
        </IconButton>
        <h3 className={classes.Headding}><span className={classes.Back}>Спасибо, </span>что оставили свои контакты!</h3>

        <p className={classes.Text}>Мы скоро вам перезвоним, а пока можете посмотреть наши работы в разделе портфолио</p>
      </Dialog>
    </div>
  );
}

export default CallBack