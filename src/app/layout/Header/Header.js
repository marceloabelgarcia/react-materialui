import { AppBar, Avatar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { blue, green, grey, red, teal } from '@material-ui/core/colors';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import CloseIcon from '@material-ui/icons/Close';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactsCircleIcon from '@material-ui/icons/GroupRounded';
import MailOutlineIcon from '@material-ui/icons/MailOutlineRounded';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PostAddIcon from '@material-ui/icons/PostAdd';
import StorageIcon from '@material-ui/icons/Storage';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import clsx from 'clsx';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import avatarImg from 'app/assets/avatar.jpg';
import AccountPopover from 'app/common/AccountPopover';
import NotificationsPopover from 'app/common/NotificationsPopover';
import WalletPopover from 'app/common/WalletPopover';

import useStyles from './Header.styles';

export default ({ isMobile, drawerOpen, onToggleDrawer }) => {
  const classes = useStyles();
  const title = 'NDL DocKeeper';

  const { t } = useTranslation('', { useSuspense: false });

  const [state, setState] = React.useState({
    openAccount: false,
    openWallet: false,
    openNotifications: false,
  });

  const notificationsRef = useRef(null);
  const walletRef = useRef(null);
  const accountRef = useRef(null);

  const onLogout = () => localStorage.clear();

  const accountOpts = [
    {
      id: 'account',
      title: t('header:my_account'),
      to: '/profile',
      icon: (
        <AccountCircleIcon fontSize="large" color="primary" />
      ),
    },
    {
      id: 'my_plan',
      title: t('header:my_plan'),
      to: '/profile/plan',
      icon: (
        <StorageIcon fontSize="large" style={{ color: green[300] }} />
      ),
    },
    {
      id: 'contacts',
      title: t('header:contacts'),
      to: '/user/contacts',
      icon: (
        <ContactsCircleIcon fontSize="large" style={{ color: teal[800] }} />
      ),
    },
    {
      id: 'certifiers',
      title: t('header:certifiers'),
      subtitle: 'Admin',
      to: '/admin/certifiers',
      icon: (
        <VerifiedUserIcon fontSize="large" style={{ color: teal[500] }} />
      ),
    },
    {
      id: 'validate_registrations',
      title: t('header:registrations'),
      subtitle: 'Admin',
      to: '/admin/registrations',
      icon: (
        <PostAddIcon fontSize="large" style={{ color: blue[700] }} />
      ),
    },
    {
      id: 'terms',
      title: t('header:terms_and_conditions'),
      to: '/terms',
      icon: (
        <AssignmentIcon fontSize="large" style={{ color: grey[600] }} />
      ),
    },
    {
      id: 'support',
      title: t('header:help_and_support'),
      to: '/support',
      icon: (
        <ContactSupportIcon fontSize="large" style={{ color: green[600] }} />
      ),
    },
    {
      id: 'logout',
      title: t('sign_out'),
      to: '/signin',
      onClick: () => onLogout(),
      icon: (
        <ExitToAppIcon fontSize="large" />
      ),
    },

  ];

  const notifications = [
    {
      id: 1,
      title: 'Transferencia aceptada',
      created_at: '2020-03-09 10:30:28',
      icon: (
        <Avatar style={{ backgroundColor: blue[500] }}>
          <MailOutlineIcon />
        </Avatar>
      ),
    },
    {
      id: 2,
      title: 'Transferencia rechazada',
      created_at: '2020-03-07 10:30:28',
      icon: (
        <Avatar style={{ backgroundColor: red[500] }}>
          <CloseIcon />
        </Avatar>
      ),
    },
    {
      id: 3,
      title: 'Documento recibido',
      created_at: '2020-03-06 10:30:28',
      icon: (
        <Avatar style={{ backgroundColor: green[500] }}>
          <CallReceivedIcon />
        </Avatar>
      ),
    },
    {
      id: 4,
      title: 'Documento recibido',
      created_at: '2020-03-05 10:30:28',
      icon: (
        <Avatar style={{ backgroundColor: green[500] }}>
          <CallReceivedIcon />
        </Avatar>
      ),
    },
    {
      id: 5,
      title: 'Documento recibido',
      created_at: '2020-03-04 10:30:28',
      icon: (
        <Avatar style={{ backgroundColor: green[500] }}>
          <CallReceivedIcon />
        </Avatar>
      ),
    },
  ];

  const movements = [
    {
      id: 1,
      title: 'Comisión Recibida',
      created_at: '2020-03-08 10:30:28',
      quantity: 3.14,
    },
    {
      id: 2,
      title: 'Pago aceptado',
      created_at: '2020-03-05 10:30:28',
      quantity: -5.00,
    },
    {
      id: 3,
      title: 'Comisión Recibida',
      created_at: '2020-03-02 10:30:28',
      quantity: 1.00,
    },
  ];

  /**
   * Reset state
   */
  const resetState = () => setState(
    { openAccount: false, openNotifications: false, openWallet: false },
  );

  /**
   * Handles wallet toggle list
   * @param {{ currentTarget }} event
   */
  const handleWalletToggle = () => {
    if (state.openWallet) {
      resetState();
    } else {
      setState({ openWallet: true, openNotifications: false, openAccount: false });
    }
  };

  /**
   * Handles account toggle list
   * @param {{ currentTarget }} event
   */
  const handleAccountToggle = (event) => {
    if (state.openAccount && state.openAccount.contains(event.target)) {
      resetState();
    } else {
      setState({ openAccount: true, openNotifications: false, openWallet: false });
    }
  };

  /**
   * Handles notifications toggle list
   * @param {{ currentTarget }} event
   */
  const handleNotificationsToggle = () => {
    if (state.openNotifications) {
      resetState();
    } else {
      setState({ openNotifications: true, openWallet: false, openAccount: false });
    }
  };

  /**
   * Handles notifications list close event
   */
  const handleWalletClose = () => setState({ ...state, openWallet: false });

  /**
   * Handles notifications list close event
   */
  const handleNotifsClose = () => setState({ ...state, openNotifications: false });


  /**
   * Handles account list close event
   */
  const handleAccountClose = () => setState({ ...state, openAccount: false });


  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar)}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onToggleDrawer}
          edge="start"
          className={clsx(classes.menuButton, { [classes.hide]: !isMobile })}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h5" noWrap>
          {title}
        </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <IconButton aria-label="account balance" color="inherit" onClick={handleWalletToggle} ref={walletRef}>
            <Typography variant="body2" style={{ marginRight: 10 }}>35.50€</Typography>
            <AccountBalanceWallet />
          </IconButton>
          <WalletPopover
            title={t('movements')}
            anchorEl={walletRef.current}
            movements={movements}
            onClose={handleWalletClose}
            open={state.openWallet}
          />
          <IconButton aria-label="show 6 new notifications" color="inherit" onClick={handleNotificationsToggle} ref={notificationsRef}>
            <Badge badgeContent={6} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <NotificationsPopover
            title={t('notifications')}
            anchorEl={notificationsRef.current}
            notifications={notifications}
            onClose={handleNotifsClose}
            open={state.openNotifications}
          />
          <IconButton edge="end" color="inherit" onClick={handleAccountToggle} ref={accountRef}>
            <Avatar src={avatarImg} />
          </IconButton>
          <AccountPopover
            title={t('account')}
            anchorEl={accountRef.current}
            opts={accountOpts}
            onClose={handleAccountClose}
            open={state.openAccount}
          />
        </div>
        <div className={classes.sectionMobile} />
      </Toolbar>
    </AppBar>
  );
};
