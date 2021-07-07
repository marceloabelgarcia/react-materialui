import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useStyles from './HiringPlans.styles';

const HiringPlans = (props) => {
  /** Styles */
  const classes = useStyles();

  const { t } = useTranslation('', { useSuspense: false });

  return (
    <Grid spacing={2} container>

      <Grid xs={12} item>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Plan xxx
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              ...
              <br />
              ...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{t('signin:register')}</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid xs={12} item>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Plan xxx
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              ...
              <br />
              ...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{t('signin:register')}</Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid xs={12} item>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Plan xxx
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              ...
              <br />
              ...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{t('signin:register')}</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

HiringPlans.defaultProps = {};

HiringPlans.propTypes = {};

export default HiringPlans;
