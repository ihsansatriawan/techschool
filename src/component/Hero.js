import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useStyles } from '../styles';
import { Link } from "react-router-dom";

function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Tokopedia TechSchool
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Link to="/">Home</Link>
            </Grid>
            <Grid item>
              <Link to="/about">About</Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Hero;