import React from 'react';
import { Container } from '@material-ui/core';
import useStyles from './ContentLayout.styles';

const ContentLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container maxWidth={false} className={classes.container}>
        {children}
      </Container>
    </main>
  );
};

export default ContentLayout;
