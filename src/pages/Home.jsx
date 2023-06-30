import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import FingerprintIcon from '@mui/icons-material/Fingerprint';


export const Home = () => {
  return (
    <Fragment>
      {/* <h1>Go to Dashboard</h1>
        <Link to="/dashboard">
        <button>Dashboard</button>
        </Link> */}

      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{ marginLeft: "25px" }} /> */}
              <FingerprintIcon style={{ marginLeft: "25px" }} />

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ marginLeft: "-15px" }}>
            Narcotic Drugs Protector
          </Typography>
          <Link to="/dashboard">
            <Button color="warning" variant="contained">
              Sign-In
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <h1>Welcome to the Home</h1>
    </Fragment>
  )
}
