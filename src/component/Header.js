import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SchoolIcon from '@material-ui/icons/School';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <SchoolIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Tokopedia TechSchool
        </Typography>
      </Toolbar>
    </AppBar>
  )
}