import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import classesNames from './Reviews.module.scss';
import ReviewsData from '../ReviewsArray';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Reviews() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const TabPanels = ReviewsData.map(({review_id, label, title, avatar, reviewText, dateAdded}, index) => {
    return (
      <TabPanel key={index} value={value} index={index}>
          <div>
            <img src={avatar} alt={title} />
            <p>{title}</p>
          </div>
          <div>
            <div>
              <div>
                <p>{reviewText}</p>
                <span>{dateAdded}</span>
              </div>
            </div>
          </div>
      </TabPanel>
    )
  });

  const TabItems = ReviewsData.map(({review_id, label}, index) => {
    return (
      <Tab
        key={index}
        label={label}
        id={`vertical-tab-${review_id}`}
        aria-controls={`vertical-tabpanel-${review_id}`}
      />
    )
  });

    console.log('TABS', TabPanels);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fixed className={classesNames.Reviews}>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {TabItems}
        </Tabs>
        {TabPanels}
      </div>
    </Container>

  );
}
