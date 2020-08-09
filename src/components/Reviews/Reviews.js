import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import classes from './Reviews.module.scss';
import ReviewsData from '../ReviewsArray';
import Container from "@material-ui/core/Container";
import tabPanelBg from '../../assets/img/tabpanel-bg.jpg';
import Fade from 'react-reveal/Fade';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Reviews() {
  const [value, setValue] = React.useState(0);

  const TabPanels = ReviewsData.map(({review_id, label, title, company, avatar, reviewText, dateAdded}, index) => {
    return (
      <TabPanel
        key={index}
        value={value}
        index={index}
        className={classes.TabPanel}
      >

        <div className={classes.TabPanelItem}>
          <Fade left>
          <div className={classes.AvatarBox}>
            <img className={classes.Avatar} src={avatar} alt={title} />
            <div className={classes.AvatarNameBox}>
              <p className={classes.AvatarNameTitle}>{title}</p>
              <p className={classes.AvatarNameCompany}>{company}</p>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className={classes.TextBox}>
            <p className={classes.Text}>{reviewText}</p>
            <span className={classes.DateAdded}>{dateAdded}</span>
          </div>
          </Fade>
        </div>
      </TabPanel>
    )
  });

  const TabItems = ReviewsData.map(({review_id, label}) => {
    return (
      <Tab
        key={`review_${review_id} `}
        label={label}
        id={`vertical-tab-${review_id}`}
        aria-controls={`vertical-tabpanel-${review_id}`}
        className={classes.Tab}
      />
    )
  });


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fixed className={classes.Reviews}>
      <h2 className={classes.Headding}>Отзывы</h2>
      <div className={classes.ReviewsBox} style={{backgroundImage: `url(${tabPanelBg})`}}>
        {TabPanels}
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.Tabs}
          classes={{
            indicator: classes.indicator,
            scroller: classes.scroller,
            scrollButtons: classes.scrollButtons,
            flexContainerVertical: classes.flexContainerVertical
          }}
        >
          {TabItems}
        </Tabs>
      </div>
    </Container>

  );
}
