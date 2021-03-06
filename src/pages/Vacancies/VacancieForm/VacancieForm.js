import React, {useState} from "react";
import classes from "./VacancieForm.module.scss"
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";
import vacancieFormImg from "../../../assets/img/vacancie-form.jpg"
import {Link} from "@material-ui/core";
import Fade from 'react-reveal/Fade'
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";

function VacancieForm() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: ''
  })

  const [callBackSuccessIsOpen, setCallBackSuccessIsOpen] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.currentTarget;
    setFormValues({...formValues, [id]: value});
    console.log(formValues);
  }

  const handleCallBackSuccess = () => {
    setCallBackSuccessIsOpen(!callBackSuccessIsOpen)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    let file = document.getElementById('input-cv');

    let formData = new FormData();
    if (file.files.length){
      formData.append('file', file.files[0]);
    }
    formData.append('name', formValues.name);
    formData.append('email', formValues.email);

    fetch('sendVacancy.php', {
      method: "POST",
      body: formData
    })
      .then(response => response.json());

    handleCallBackSuccess();
  };

  return (
    <section className={classes.VacancieForm}>
      <Container fixed className={classes.Container}>
        <h2 className={classes.Headding}>{'Хочешь присоединиться к нашей команде?'}</h2>
        <Grid container>
          <Grid item container sm={6} xs={12} className={classes.FormBlock}>
            <Fade up>
            <form
              autoComplete="off"
              id="vacancy-form"
              className={classes.Form}
              onSubmit={onSubmit}
            >
              <Grid item container
                    direction="column"
                    className={classes.VacancieFormBox}
                    style={{background: `url(${vacancieFormImg}) no-repeat`}}
              >
                <Grid item>
                  <TextField
                    className={classes.InputField}
                    InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputFocused}}}
                    InputProps={{classes: {underline: classes.InputUnderline}}}
                    required
                    id="name"
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={handleChange}
                    label="Имя" />
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.InputField}
                    InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputFocused}}}
                    InputProps={{classes: {underline: classes.InputUnderline}}}
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    label="Email" />
                </Grid>
                <Grid item>
                  <FormControl className={classes.FormControlCv}>
                    <InputLabel className={classes.InputCv} htmlFor="input-cv">Прикрепить резюме</InputLabel>
                    <Input type="file" id="input-cv" name="myfile" label="Прикрепить резюме" style={{visibility: 'hidden'}} />
                  </FormControl>
                </Grid>
                <Grid item>
                  <button className={classes.SubmitBtn} type="submit">Отправить</button>
                </Grid>
              </Grid>
            </form>
            </Fade>
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
          </Grid>
          <Grid item container sm={6} xs={12} alignItems="center">
            <Grid item container direction="column" alignItems="center">
              <Fade up>
              <h3 className={classes.Title}>Что дальше?</h3>
              <Grid item container className={classes.Gridlist}>
                <Grid item className={classes.GridlistItem}>Мы с вами свяжемся в течении 24 часов. Пока посмотрите <Link href={'/portfolio'}>порфтолио</Link></Grid>
                <Grid item className={classes.GridlistItem}>Если разговор пройдет хорошо - мы пригласим вас на собеседовние</Grid>
                <Grid item className={classes.GridlistItem}>В случае позитивного ответа - вы станете частью нашей команды!</Grid>
              </Grid>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default VacancieForm