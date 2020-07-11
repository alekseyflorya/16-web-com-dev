import React from "react";
import classes from "./Breef.module.scss";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import {LogoInvertIcon, LogoMobileIcon} from '../Icons';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {ButtonLink} from "../UI/ButtonLink";
import {Hidden} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function Breef() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setState({ ...state, success:  false});
  };

  const [state, setState] = React.useState({
    siteCreating: false,
    webDesign: false,
    marketing: false,
    qaTesting: false,
    branding: false,
    photography: false,
    fast: false,
    slow: false,
    success: false
  });

  const sendBreef = () => {
    setState({ ...state, success:  true});
  }
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { siteCreating, webDesign, marketing, qaTesting, branding, photography, fast, slow, success } = state;

  return (
    <>
      <Button
        classes={{
          root: classes.OrderProjectRoot,
          label :classes.OrderProjectLabel,
          text :classes.OrderProjectText
        }}
        onClick={handleClickOpen}
      >
        {'Заказать проект'}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{classes: {root: classes.BreefDialog}}}
        classes={{root: classes.Breef, paper: classes.BreefModal}}
      >
        <Hidden smUp>
          <LogoMobileIcon width="55" height="32" viewBox="0 0 55 32" classes={{root: classes.LogoIcon}}/>
        </Hidden>
        <Hidden only="xs">
          <LogoInvertIcon width="95" height="60" viewBox="0 0 95 60" classes={{root: classes.LogoIcon}}/>
        </Hidden>

        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          className={classes.CloseBtn}
        >
          <CloseIcon classes={{root: classes.CloseBtnIcon}}/>
        </IconButton>
        <form className={classes.BreefForm}>
          <Grid container justify="center" alignItems="center" className={classes.BreefFormContainer}>
            <Grid item container>
            <Grid item container sm={6} xs={12}>
            <Grid item container>
              <FormControl component="fieldset" classes={{root: classes.FormControl}}>
                <FormLabel component="legend" classes={{root: classes.FormLabel, focused: classes.FormLabelFocused}}>Какая услуга вас интересует?</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={siteCreating}
                        onChange={handleChange}
                        classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                        name="siteCreating"
                      />
                    }
                    classes={{label: classes.FormControlLabel}}
                    label="Создание сайтов"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={webDesign}
                        onChange={handleChange}
                        classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                        name="webDesign"
                      />
                    }
                    classes={{label: classes.FormControlLabel}}
                    label="Веб-дизайн"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={marketing}
                        onChange={handleChange}
                        classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                        name="marketing"
                      />
                    }
                    classes={{label: classes.FormControlLabel}}
                    label="Интернет-маркетинг (SEO, PPC, SMM)"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={qaTesting}
                        onChange={handleChange}
                        classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                        name="qaTesting"
                      />
                    }
                    classes={{label: classes.FormControlLabel}}
                    label="QA"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={branding}
                        onChange={handleChange}
                        classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                        name="branding"
                      />
                    }
                    classes={{label: classes.FormControlLabel}}
                    label="Брендинг"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={photography}
                        onChange={handleChange}
                        classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                        name="photography"
                      />
                    }
                    classes={{label: classes.FormControlLabel}}
                    label="Фотосъемка"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item container>
              <FormControl component="fieldset" classes={{root: classes.FormControl}}>
                <FormLabel
                  component="legend"
                  classes={{root: classes.FormLabel, focused: classes.FormLabelFocused}}>Техническое задание (если есть)</FormLabel>
                <FormGroup>
                  <InputLabel className={classes.InputCv} htmlFor="input-cv">Прикрепить файл</InputLabel>
                  <Input type="file" id="input-cv" label="Прикрепить файл" style={{visibility: 'hidden'}} />
                  <TextField
                      id="standard-required"
                      classes={{root: classes.TextField}}
                      InputProps={{classes: {input: classes.InputBase, underline: classes.InputBaseUnderline}}}
                      InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputLabelFocused}}}
                      label="Комментарий" />
                </FormGroup>
              </FormControl>
            </Grid>
              </Grid>
            <Grid item container sm={6} xs={12}>
            <Grid item container>
              <FormControl required component="fieldset" classes={{root: classes.FormControl}}>
                <FormLabel
                  component="legend"
                  classes={{root: classes.FormLabel, focused: classes.FormLabelFocused}}>Бюджет проекта ($)</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    className={classes.BudgetFields}
                    control={
                      <>
                      <TextField
                        id="standard-required"
                        classes={{root: classes.TextField}}
                        InputProps={{classes: {input: classes.InputBase, underline: classes.InputBaseUnderline}}}
                        InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputLabelFocused}}}
                        label="От" />
                      <TextField
                        id="standard-required"
                        InputProps={{classes: {input: classes.InputBase, underline: classes.InputBaseUnderline}}}
                        InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputLabelFocused}}}
                        label="До" />
                        </>
                    }
                    classes={{root: classes.FormControlLabelRoot,label: classes.FormControlLabel}}
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item container>
              <FormControl required classes={{root: classes.FormControlTime}}>
                <Grid container justify="flex-start">
                  <Grid item container sm>
                    <FormLabel component="legend" classes={{root: classes.FormLabel, focused: classes.FormLabelFocused}}>Сроки</FormLabel>
                  </Grid>
                  <Grid item container sm>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={slow}
                          onChange={handleChange}
                          classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                          name="slow"
                        />
                      }
                      classes={{label: classes.FormControlLabel}}
                      label="Не срочно"
                    />
                  </Grid>
                  <Grid item container sm>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={fast}
                          onChange={handleChange}
                          classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                          name="fast"
                        />
                      }
                      classes={{label: classes.FormControlLabel}}
                      label="Срочно"
                    />
                  </Grid>
                 </Grid>
              </FormControl>
            </Grid>
            <Grid item container>
              <FormControl required component="fieldset">
                <FormLabel
                  component="legend"
                  classes={{root: classes.FormLabel, focused: classes.FormLabelFocused}}>Контактные данные</FormLabel>
                <FormGroup>
                      <TextField
                        required
                        id="standard-required"
                        InputProps={{classes: {input: classes.InputBase, underline: classes.InputBaseUnderline}}}
                        InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputLabelFocused}}}
                        label="Ваше имя" />
                      <TextField
                        required
                        id="standard-required"
                        InputProps={{classes: {input: classes.InputBase, underline: classes.InputBaseUnderline}}}
                        InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputLabelFocused}}}
                        label="Телефон" />
                      <TextField
                        required
                        id="standard-required"
                        InputProps={{classes: {input: classes.InputBase, underline: classes.InputBaseUnderline}}}
                        InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputLabelFocused}}}
                        label="E-mail" />
                      <TextField
                        required
                        id="standard-required"
                        InputProps={{classes: {input: classes.InputBase, underline: classes.InputBaseUnderline}}}
                        InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputLabelFocused}}}
                        label="Сайт (если есть)" />
                </FormGroup>
              </FormControl>
            </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            onClick={sendBreef}
            className={classes.SendBreefBtn}
            classes={{
            root: classes.SendBreefBtn,
            label :classes.sendBreefLabel,
            text :classes.sendBreefText
          }}
          >
            <ArrowForwardIosIcon classes={{root: classes.sendBreefBtnIcon}}/>
          </Button>
        </form>
      </Dialog>

      <Dialog
        fullScreen
        open={success}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{classes: {root: classes.BreefDialog}}}
        classes={{root: classes.Breef, paper: classes.BreefModal}}
      >
        <LogoInvertIcon width="95" height="60" viewBox="0 0 95 60" classes={{root: classes.LogoIcon}}/>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          className={classes.CloseBtn}
        >
          <CloseIcon classes={{root: classes.CloseBtnIcon}}/>
        </IconButton>
        <Grid container className={classes.SuccessBox} justify="center" alignItems="center">
          <Grid item container sm={6}>
            <Grid item sm={12} className={classes.SuccessTop}>
              <h2 className={classes.Headding}>Спасибо, что заполнили бриф!</h2>
              <p className={classes.SuccessText}>Скоро с вами свяжется наш Project Manager для обсуждения всех деталей</p>
              <Link to="/portfolio" className={classes.Link}>Можете посмотреть наше портфолио</Link>
            </Grid>
            <Grid item container sm={12} justify="space-between">
              <ButtonLink title={'Подробнее о нас'} path={'/about'} />
              <ButtonLink title={'На главную'} path={'/'} />
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}