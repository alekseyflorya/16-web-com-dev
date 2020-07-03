import React from "react";
import classes from "./VacancieForm.module.scss"
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";
import vacancieFormImg from "../../../assets/img/vacancie-form.jpg"

function VacancieForm() {
  return (
    <section className={classes.VacancieForm}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm className={classes.FormBlock}>
            <form action=""  autoComplete="off">
              <Grid item container
                    direction="column"
                    style={{
                      background: `url(${vacancieFormImg}) no-repeat`,
                      padding: '130px 180px'
                    }}
              >
                <Grid item>
                  <TextField
                    className={classes.InputField}
                    InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputFocused}}}
                    InputProps={{classes: {underline: classes.InputUnderline}}}
                    required
                    id="input-name"
                    label="Имя" />
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.InputField}
                    InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputFocused}}}
                    InputProps={{classes: {underline: classes.InputUnderline}}}
                    required
                    type="email"
                    id="input-email"
                    label="Email" />
                </Grid>
                <Grid item>
                  <FormControl>
                    <InputLabel className={classes.InputCv} htmlFor="input-cv">Прикрепить резюме</InputLabel>
                    <Input type="file" id="input-cv" label="Прикрепить резюме" style={{visibility: 'hidden'}} />
                  </FormControl>
                </Grid>
                <Grid item>
                  <input className={classes.SubmitBtn} type="submit"/>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item container sm alignItems="center">
            <Grid item container direction="column" alignItems="center">
              <h3 className={classes.Title}>Что дальше?</h3>
              <Grid item container className={classes.Gridlist}>
                <Grid item className={classes.GridlistItem}>Мы с вами свяжемся в течении 24 часов. Пока посмотрите порфтолио</Grid>
                <Grid item className={classes.GridlistItem}>Если разговор пройдет хорошо - мы пригласим вас на собеседовние</Grid>
                <Grid item className={classes.GridlistItem}>В случае позитивного ответа - вы станете частью нашей команды!</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default VacancieForm