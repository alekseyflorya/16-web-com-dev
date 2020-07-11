import React from 'react';
import classes from './Philosophy.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import philosophyImage1 from "../../../assets/img/philosophy-1.jpg";
import philosophyImage2 from "../../../assets/img/philosophy-2.jpg";
import philosophyImage3 from "../../../assets/img/philosophy-3.jpg";
import philosophyImage4 from "../../../assets/img/philosophy-4.jpg";
import philosophyImage5 from "../../../assets/img/philosophy-5.jpg";
import {Hidden} from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.TabPanelBox}>
          {children}
        </Box>
      )}
    </div>
  );
}

function Philosophy() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.Philosophy}>
      <Container fixed className={classes.Container}>
        <Hidden smUp>
          <h2 className={classes.Headding}>Наша филисофия</h2>
        </Hidden>
        <Grid container className={classes.PhilosophyBox}>
          <Grid item container sm={6} xs={12} className={classes.LeftColumn}>
            <Hidden only="xs">
              <h2 className={classes.Headding}>Наша филисофия</h2>
            </Hidden>
            <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества переосмысления внешнеэкономических политик. С учётом сложившейся международной обстановки.</p>
            <p className={classes.Text}>Ясность нашей позиции очевидна: выбранный нами инновационный путь способствует повышению качества переосмысления внешнеэкономических политик. С учётом сложившейся международной обстановки.</p>
            <Grid item container sm={8} xs={12} className={classes.GridList}>
              <Grid item container sm={6} xs={6} className={classes.GridListItem}>Инновацион</Grid>
              <Grid item container sm={6} xs={6} className={classes.GridListItem}>Инновацион</Grid>
              <Grid item container sm={6} xs={6} className={classes.GridListItem}>Инновацион</Grid>
              <Grid item container sm={6} xs={6} className={classes.GridListItem}>Инновацион</Grid>
            </Grid>
          </Grid>

          <Grid item container sm={6} xs={12} className={classes.RightColumn}>
            <div className={classes.PhilosophyTabsBox}>

              <TabPanel
                value={value}
                index={0}
                className={classes.TabPanel}
              >
                <div className={classes.TabPanelItem}>
                    <img className={classes.PhilosophyImage} src={philosophyImage1} alt="" />
                </div>
              </TabPanel>
              <TabPanel
                value={value}
                index={1}
                className={classes.TabPanel}
              >
                <div className={classes.TabPanelItem}>
                  <img className={classes.PhilosophyImage} src={philosophyImage2} alt="" />
                </div>
              </TabPanel>
              <TabPanel
                value={value}
                index={2}
                className={classes.TabPanel}
              >
                <div className={classes.TabPanelItem}>
                  <img className={classes.PhilosophyImage} src={philosophyImage3} alt="" />
                </div>
              </TabPanel>
              <TabPanel
                value={value}
                index={3}
                className={classes.TabPanel}
              >
                <div className={classes.TabPanelItem}>
                  <img className={classes.PhilosophyImage} src={philosophyImage4} alt="" />
                </div>
              </TabPanel>
              <TabPanel
                value={value}
                index={4}
                className={classes.TabPanel}
              >
                <div className={classes.TabPanelItem}>
                  <img className={classes.PhilosophyImage} src={philosophyImage5} alt="" />
                </div>
              </TabPanel>

              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                className={classes.Tabs}
                classes={{
                  indicator: classes.indicator,
                  scrollButtons: classes.scrollButtons,
                  flexContainer: classes.flexContainer}}
              >
                <Tab
                  label={'01'}
                  id={'scrollable-auto-tab-0'}
                  aria-controls={'scrollable-auto-tabpanel-0'}
                  className={classes.Tab}
                  classes={{selected: classes.selected}}
                />
                <Tab
                  label={'02'}
                  id={'scrollable-auto-tab-1'}
                  aria-controls={'scrollable-auto-tabpanel-1'}
                  className={classes.Tab}
                  classes={{selected: classes.selected}}
                />
                <Tab
                  label={'03'}
                  id={'scrollable-auto-tab-2'}
                  aria-controls={'scrollable-auto-tabpanel-2'}
                  className={classes.Tab}
                  classes={{selected: classes.selected}}
                />
                <Tab
                  label={'04'}
                  id={'scrollable-auto-tab-3'}
                  aria-controls={'scrollable-auto-tabpanel-3'}
                  className={classes.Tab}
                  classes={{selected: classes.selected}}
                />
                <Tab
                  label={'05'}
                  id={'scrollable-auto-tab-4'}
                  aria-controls={'scrollable-auto-tabpanel-4'}
                  className={classes.Tab}
                  classes={{selected: classes.selected}}
                />
              </Tabs>
            </div>
          </Grid>

        </Grid>
      </Container>
    </section>
  )
}

export default Philosophy