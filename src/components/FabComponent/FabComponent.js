import React from 'react';
import classes from './FabComponent.module.scss'
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import CloseIcon from '@material-ui/icons/Close'
import {MessengerIcon, TelegramIcon, TelephoneIcon, ViberIcon} from "../Icons";

const actions = [
  {icon: <TelephoneIcon width="36" height="31" viewBox="0 0 36 31" />, name: 'Telephone', classname: classes.Telephone, path: 'tel:0951001616' },
  { icon: <MessengerIcon width="36" height="16" viewBox="0 0 36 16" />, name: 'Messenger', classname: classes.Telegram },
  { icon: <ViberIcon width="23" height="23" viewBox="0 0 23 23" />, name: 'Viber', classname: classes.Viber },
  { icon: <TelegramIcon width="27" height="23" viewBox="0 0 27 23" />, name: 'Telegram', classname: classes.Messenger },
];

export default function FabComponent() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.FabComponent}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        icon={<SpeedDialIcon openIcon={<CloseIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        classes={{fab: classes.SpeedDialFab, actions: classes.SpeedDialActions}}
      >
        {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              className={action.classname}
              FabProps={{href: action.path, size: 'medium'}}
            />
        ))}
      </SpeedDial>
    </div>
  );
}
