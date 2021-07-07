import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './Functionalities.styles';


const Functionalities = (props) => {
  /** Styles */
  const classes = useStyles();

  const { t } = useTranslation('', { useSuspense: false });

  return (
    <Grid spacing={2} container>

      <Grid xs={12} md={12} lg={6} item>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {t('certify_documents')}
            </Typography>
            <Typography variant="h5" component="h2">
              .....
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              ...
              <br />
              ...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{t('more')}</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid lg={6} md={12} xs={12} item>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {t('certify_emails')}
            </Typography>
            <Typography variant="h5" component="h2">
              .....
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              ...
              <br />
              ...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{t('more')}</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid lg={6} md={12} xs={12} item>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
             {t('transfer_documents')}
            </Typography>
            <Typography variant="h5" component="h2">
              .....
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              ...
              <br />
              ...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{t('more')}</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid lg={6} md={12} xs={12} item>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {t('certify_keys')}
            </Typography>
            <Typography variant="h5" component="h2">
              .....
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              ...
              <br />
              ...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{t('more')}</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

Functionalities.defaultProps = {};

Functionalities.propTypes = {};

export default Functionalities;
