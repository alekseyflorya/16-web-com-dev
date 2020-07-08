import React from 'react';
import classes from './FabComponent.module.scss'
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import CloseIcon from '@material-ui/icons/Close'
import {MessengerIcon, TelegramIcon, ViberIcon} from "../Icons";

const actions = [

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
    <div>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        icon={<SpeedDialIcon openIcon={<CloseIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        classes={{fab: classes.SpeedDialFab}}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            className={action.classname}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
