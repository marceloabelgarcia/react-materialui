import { Avatar, Button, CardActions, Grid, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography, Divider } from '@material-ui/core';
import { blue, green, grey, red, yellow } from '@material-ui/core/colors';
import CallMissedIcon from '@material-ui/icons/CallMissed';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutlineRounded';
import PdfIcon from '@material-ui/icons/PictureAsPdfOutlined';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import moment from 'moment';
import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { FixedSizeList } from 'react-window';

import DashCard from '../app/common/CustomCard';
import useStyles from './Dashboard.styles';
import Profile from './profile';

const Dashboard = () => {
  // Get styles from hook
  const classes = useStyles();

  const { t } = useTranslation();

  const [period, setPeriod] = React.useState('left');
  const [type, setType] = React.useState('left');

  // Mock data
  const dogData = {
    labels: [
      `${t('dashboard:busy_space')} (%)`,
      `${t('dashboard:remaining_space')} (%)`,
    ],
    datasets: [{
      data: [55, 45],
      backgroundColor: [
        grey[400],
        green[300],
      ],
      hoverBackgroundColor: [
        grey[600],
        green[500],
      ],
    }],
  };

  // Mock data
  const benData = {
    labels: t('common:months', { returnObjects: true }),
    datasets: [
      {
        label: t('dashboard:collections'),
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 10, 20, 17, 29, 31, 40, 29, 24, 29, 32, 40, 50],
      },
      {
        label: t('dashboard:paid_fees'),
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#FF6384',
        borderColor: '#FF6354',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 5, 5, 15, 20, 25, 22, 24, 21, 17, 18, 19],
      },
    ],
  };

  // Mock data
  const docs = [
    {
      id: 'doc1',
      name: 'Certificado empadronamiento',
      size: '53 kb',
      status: 'Pendiente',
      from: 'sent',
    },
    {
      id: 'doc3',
      name: 'Entradas Weekend',
      size: '578 kb',
      status: 'Pendiente',
      from: 'sent',
    },
    {
      id: 'doc4',
      name: 'Contrato de titularidad',
      size: '328 kb',
      status: 'Descargado',
      from: 'received',
    },
    {
      id: 'doc4',
      name: 'Contrato de titularidad - Copia',
      size: '328 kb',
      status: 'Visto',
      from: 'received',
    },
  ];

  const movements = [
    {
      id: 1,
      title: 'Comisión Recibida',
      created_at: '2020-03-08 10:30:28',
      quantity: 3.14,
      format: 'txt',
      from: t('common:shared'),
    },
    {
      id: 2,
      title: 'Pago aceptado',
      created_at: '2020-03-05 10:30:28',
      quantity: -5.00,
      format: 'pdf',
      from: t('common:purchase'),
    },
    {
      id: 3,
      title: 'Comisión Recibida',
      created_at: '2020-03-02 10:30:28',
      quantity: 1.00,
      format: 'pdf',
      from: t('common:shared'),
    },
    {
      id: 4,
      title: 'Pago Aceptado',
      created_at: '2020-03-02 10:30:28',
      quantity: -6.45,
      format: 'pdf',
      from: t('common:purchase'),
    },
  ];

  const notifications = [
    {
      id: 1,
      title: 'Transferencia aceptada',
      subtitle: 'Hace 15 minutos',
      icon: (
        <Avatar style={{ backgroundColor: blue[500] }}>
          <MailOutlineIcon />
        </Avatar>
      ),
    },
    {
      id: 2,
      title: 'Transferencia rechazada',
      subtitle: 'Hace 20 minutos',
      icon: (
        <Avatar style={{ backgroundColor: red[500] }}>
          <CloseIcon />
        </Avatar>
      ),
    },
    {
      id: 3,
      title: 'Documento recibido',
      subtitle: 'Hace 2 horas',
      icon: (
        <Avatar style={{ backgroundColor: green[500] }}>
          <CallReceivedIcon />
        </Avatar>
      ),
    },
    {
      id: 4,
      title: 'Documento recibido',
      subtitle: 'Hace 3 horas',
      icon: (
        <Avatar style={{ backgroundColor: green[500] }}>
          <CallReceivedIcon />
        </Avatar>
      ),
    },
    {
      id: 5,
      title: 'Documento recibido',
      subtitle: 'Hace 5 días',
      icon: (
        <Avatar style={{ backgroundColor: green[500] }}>
          <CallReceivedIcon />
        </Avatar>
      ),
    },
  ];

  const handlePeriod = (event, newPeriod) => {
    if (newPeriod !== null) {
      setPeriod(newPeriod);
    }
  };

  const handleType = (event, newType) => {
    if (newType !== null) {
      setType(newType);
    }
  };

  /**
   * Render document row
   * @param {{ index, style }} row
   */
  const renderDocsRow = ({ index, style }) => {
    const doc = docs[index];
    return (
      <ListItem
        button
        key={index}
        id={doc.id}
        style={{
          ...style,
          marginTop: 5,
          borderBottom: '1px solid #f0f0f0f0',
        }}
      >
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: blue[500] }}>
            <PdfIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={doc.name}
          secondary={`${doc.size} - ${doc.status}`}
        />
      </ListItem>
    );
  };

  /**
   * Render account movement row
   * @param {{ index, style }} row
   */
  const renderLastMovRow = ({ index, style }) => {
    const mov = movements[index];
    return (
      <ListItem
        button
        key={index}
        id={mov.id}
        style={{
          ...style,
          marginTop: 5,
          borderBottom: '1px solid #f0f0f0f0',
        }}
      >
        <ListItemAvatar>
          <Avatar style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: mov.quantity > 0 ? green[500] : red[700] }}>
            {`${mov.quantity > 0 ? '+' : ''}${mov.quantity}€`}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={mov.title}
          secondary={moment(mov.created_at).locale('es').fromNow()}
        />
        <ListItemIcon style={{ margin: 'auto' }}>
          { mov.from === 'sent'
            ? <CallMissedOutgoingIcon style={{ margin: 'auto' }} />
            : <CallMissedIcon style={{ margin: 'auto' }} />}
        </ListItemIcon>
      </ListItem>
    );
  };

  /**
   * Render notification row
   * @param {{ index, style }} row
   */
  const renderLastNotifRow = ({ index, style }) => {
    const n = notifications[index];
    return (
      <ListItem
        button
        key={index}
        id={n.id}
        style={{
          ...style,
          marginTop: 5,
          borderBottom: '1px solid #f0f0f0f0',
        }}
      >
        <ListItemIcon style={{
          margin: 'auto',
          minWidth: 55,
        }}
        >
          {n.icon}
        </ListItemIcon>
        <ListItemText
          primary={n.title}
          secondary={`${n.subtitle}`}
        />
        {/* <ListItemIcon style={{ margin: 'auto' }}>
          { doc.from === 'sent'
            ? <CallMissedOutgoingIcon style={{ margin: 'auto' }} />
            : <CallMissedIcon style={{ margin: 'auto' }} />}
        </ListItemIcon> */}
      </ListItem>
    );
  };

  const statisticsButtons = (
    <Grid container justify="flex-end" className={classes.buttonsContainer}>

      <Grid item xs className={classes.buttonGroupContainer}>
        <ToggleButtonGroup
          size="small"
          exclusive
          value={period}
          onChange={handlePeriod}
          classes={{ root: classes.buttonsGroup, groupedSizeSmall: classes.groupButtons }}
        >
          <ToggleButton value="left" aria-label="left aligned">
            <Typography variant="caption" style={{ fontSize: 10 }}>{t('yearly')}</Typography>
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <Typography variant="caption" style={{ fontSize: 10 }}>{t('quarterly')}</Typography>
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <Typography variant="caption" style={{ fontSize: 10 }}>{t('monthly')}</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>

      <Grid item xs className={classes.buttonGroupContainer}>
        <ToggleButtonGroup
          size="small"
          exclusive
          value={type}
          onChange={handleType}
          classes={{ groupedSizeSmall: classes.groupButtons }}
        >
          <ToggleButton value="left" aria-label="left aligned">
            <Typography variant="caption" style={{ fontSize: 10 }}>{t('benefits')}</Typography>
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <Typography variant="caption" style={{ fontSize: 10 }}>{t('consumption')}</Typography>
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <Typography variant="caption" style={{ fontSize: 10 }}>{t('balance')}</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );

  return (
    <Grid container spacing={2}>

      {/* MY PROFILE */}
      <Grid container item xs={12} sm={12} md={12} lg={2} direction="column" className={classes.profileContainer}>
        <Profile classes={classes} />
      </Grid>

      {/* CONTENT */}
      <Grid container item xs={12} md spacing={2} direction="row">

        <Grid item xs={12} md={4}>
          <DashCard title={t('dashboard:mybox')}>
            <Doughnut data={dogData} height={160} />
          </DashCard>
        </Grid>

        {/* statistics */}
        <Grid item xs={12} md={8}>
          <DashCard title={t('dashboard:statistics')} buttons={statisticsButtons}>
            <Line data={benData} height={77} />
          </DashCard>
        </Grid>

        {/* Documents */}
        <Grid item xs={12} md={4} style={{ minHeight: 800 / 2 }}>
          <DashCard title={t('dashboard:last_documents')}>
            <FixedSizeList height={345} width="100%" itemSize={80} itemCount={docs.length}>
              {renderDocsRow}
            </FixedSizeList>
            <CardActions className={classes.actions}>
              <Button
                component={RouterLink}
                size="small"
                to="/store"
              >
                {t('common:more')}
              </Button>
            </CardActions>
          </DashCard>
        </Grid>

        {/* Last Movements */}
        <Grid item xs={12} md={4}>
          <DashCard title={t('dashboard:last_movements')}>
            <FixedSizeList height={345} width="100%" itemSize={80} itemCount={movements.length}>
              {renderLastMovRow}
            </FixedSizeList>
            <CardActions className={classes.actions}>
              <Button
                component={RouterLink}
                size="small"
                to="/wallet/movements"
              >
                {t('common:more')}
              </Button>
            </CardActions>
          </DashCard>
        </Grid>

        {/* Notifications */}
        <Grid item xs={12} md={4}>
          <DashCard title={t('dashboard:last_notifications')}>
            <FixedSizeList height={345} width="100%" itemSize={80} itemCount={notifications.length}>
              {renderLastNotifRow}
            </FixedSizeList>
            <CardActions className={classes.actions}>
              <Button
                component={RouterLink}
                size="small"
                to="/notifications"
              >
                {t('common:more')}
              </Button>
            </CardActions>
          </DashCard>
        </Grid>
      </Grid>
    </Grid>
  );
};

Dashboard.defaultProps = {};

Dashboard.propTypes = {};

export default Dashboard;
