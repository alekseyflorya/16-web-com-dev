import React from "react";
import classes from "./Breef.module.scss";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import {LogoInvertIcon, LogoMobileIcon} from '../Icons';
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
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

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
    success: false
  });

  const [client, setClient] = React.useState({
    name: '',
    tel: '',
    email: '',
    site: '',
    siteCreating: '',
    webDesign: '',
    marketing: '',
    qaTesting: '',
    branding: '',
    photography: ''
  })

  const handleChange = (event) => {
    const { id, value } = event.currentTarget;
    setClient({...client, [id]: value});
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const sendBreef = async (e) => {
    e.preventDefault();
    let files = document.getElementById('input-cv');
    let checkedService = [
      client.siteCreating,
      client.webDesign,
      client.marketing,
      client.qaTesting,
      client.branding,
      client.photography
    ];
    let service = (checkedService.filter(item => (item ? item : ''))).join(', ');
    console.log('service: ', service)
    let formData = new FormData();
    if (files.files.length){
      for (let i = 0; i < files.files.length; i++){
        formData.append('files', files.files[i]);
      }
    }
    formData.append('name', client.name);
    formData.append('tel', client.tel);
    formData.append('email', client.email);
    formData.append('site', client.site);
    formData.append('service', service)
    fetch('sendBreef.php', {
      method: "POST",
      body: formData
    })
      .then(response => response.json());
    setState({ ...state, success:  true});

    console.log('ClientData: ', client, 'stateData', state)
  }

  const { siteCreating, webDesign, marketing, qaTesting, branding, photography, success } = state;

  return (
    <>
      <Button classes={{root: classes.OrderProjectRoot, label :classes.OrderProjectLabel, text :classes.OrderProjectText}} onClick={handleClickOpen}>
        {'Просчитать стоимость'}
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} PaperProps={{classes: {root: classes.BreefDialog}}} classes={{root: classes.Breef, paper: classes.BreefModal}}>
        <Hidden smUp>
          <LogoMobileIcon width="55" height="32" viewBox="0 0 55 32" classes={{root: classes.LogoIcon}}/>
        </Hidden>
        <Hidden only="xs">
          <LogoInvertIcon width="95" height="60" viewBox="0 0 95 60" classes={{root: classes.LogoIcon}}/>
        </Hidden>

        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close" className={classes.CloseBtn}>
          <CloseIcon classes={{root: classes.CloseBtnIcon}}/>
        </IconButton>
        <form id="breef-form" onSubmit={sendBreef}>
          <Grid className={classes.BreefForm}>
            <Grid item container justify="center" alignItems="center" className={classes.BreefFormContainer}>
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
                              value="Создание сайтов"
                              classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                              name="siteCreating"
                              id="siteCreating"
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
                              value="Веб-дизайн"
                              classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                              name="webDesign"
                              id="webDesign"
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
                              value="Интернет-маркетинг (SEO, PPC, SMM)"
                              classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                              name="marketing"
                              id="marketing"
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
                              value="QA"
                              classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                              name="qaTesting"
                              id="qaTesting"
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
                              value="Брендинг"
                              classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                              name="branding"
                              id="branding"
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
                              value="Фотосъемка"
                              classes={{root: classes.Checkbox, checked: classes.CheckboxChecked}}
                              name="photography"
                              id="photography"
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
                      <FormGroup>
                        <InputLabel className={classes.InputCv} htmlFor="input-cv">Техническое задание (если есть)</InputLabel>
                        <Input type="file" id="input-cv" name="file" label="Прикрепить файл" multiple style={{visibility: 'hidden'}} />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item container sm={6} xs={12}>
                  <Grid item container>
                    <FormControl required component="fieldset">
                      <FormLabel
                        component="legend"
                        classes={{root: classes.FormLabel, focused: classes.FormLabelFocused}}>Контактные данные</FormLabel>
                      <FormGroup>
                        <TextField
                          id="name"
                          name="name"
                          onChange={handleChange}
                          InputProps={{classes: {input: classes.InputBase, underline: classes.InputBaseUnderline}}}
                          InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputLabelFocused}}}
                          label="Ваше имя"
                        />
                        <TextField
                          id="tel"
                          name="tel"
                          value={client.tel}
                          onChange={handleChange}
                          InputProps={{classes: {input: classes.InputBase, underline: classes.InputBaseUnderline}}}
                          InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputLabelFocused}}}
                          label="Телефон"
                        />
                        <TextField
                          id="email"
                          name="email"
                          onChange={handleChange}
                          InputProps={{classes: {input: classes.InputBase, underline: classes.InputBaseUnderline}}}
                          InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputLabelFocused}}}
                          label="E-mail"
                        />
                        <TextField
                          id="site"
                          name="site"
                          onChange={handleChange}
                          InputProps={{classes: {input: classes.InputBase, underline: classes.InputBaseUnderline}}}
                          InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputLabelFocused}}}
                          label="Сайт (если есть)"
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item container>
                    <Button
                      className={classes.SendBreefBtn}
                      type="submit"
                    >
                      Отправить
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container className={classes.DeviderBlock}>
                <Grid item sm={12} className={classes.DeviderText}>
                  ИЛИ
                </Grid>
              </Grid>
              <Grid item container className={classes.BreefOneClick}>
                <Grid item container sm={9} className={classes.BreefOneClickBlock}>
                  <Grid item container sm={6} className={classes.BreefOneClickLabelBlock}>
                    <label className={classes.BreefOneClickLabel}>Хотите обсудить проект?</label>
                  </Grid>
                  <Grid item container sm={6} className={classes.BreefOneClickInputBlock}>
                    <TextField
                      id="tel"
                      name="tel"
                      onChange={handleChange}
                      value={client.tel}
                      className={classes.InputField}
                      InputProps={{classes: {input: classes.InputBase, underline: classes.InputBaseUnderline}}}
                      InputLabelProps={{classes: {root: classes.InputLabel, focused: classes.InputLabelFocused}}}
                      label="+38 (000) 000 000 00"
                    />
                    <Button
                      className={classes.SendBreefBtn}
                      classes={{root:classes.SendBreefBtn}}
                      type="submit"
                    >
                      <ArrowForwardIosIcon classes={{root: classes.sendBreefBtnIcon}} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
          <Grid item container sm={4} >
            <Grid item sm={12} xs={12} className={classes.SuccessTop}>
              <h2 className={classes.Headding}>Спасибо, что заполнили бриф!</h2>
              <p className={classes.SuccessText}>Скоро с вами свяжется наш Project Manager для обсуждения всех деталей</p>
              <Link to="/portfolio" className={classes.Link}>Можете посмотреть наше портфолио</Link>
            </Grid>
            <Grid item container sm={12} xs={12} justify="space-between">
              <ButtonLink classNames={classes.SuccessHomeBtn} title={'На главную'} path={'/'} />
              <ButtonLink classNames={classes.SuccessAboutBtn} title={'Подробнее о нас'} path={'/about'} />
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}