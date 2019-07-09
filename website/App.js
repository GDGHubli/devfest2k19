import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Container,
  CssBaseline,
  Paper,
  Grid,
  Fab,
  AppBar,
  Toolbar,
  IconButton,
  Link
} from "@material-ui/core";

import {
  MoveToInbox,
  Mail,
  Menu
} from '@material-ui/icons';

const useStyles = makeStyles({
  section: {
    display: 'block',
    width: '100%',
    padding: '100px 0',
  },
  list: {
    width: 275,
  },
  menuButton: {
    borderRadius: 100,
    height: '60px',
    width: '60px',
    position: 'absolute',
    left: '0',
    top: '10px'
  },
  heroLeft: {
    position: 'relative',
    paddingTop: '20vh',
    minHeight: '600px'
  },
  heroLeftContent: {
    // padding: '20px',
  },
  paragraph: {
    fontSize: '17px',
    lineHeight: '28px'
  }
});

const Links = {
  'callfortalks': 'https://docs.google.com/forms/d/1MIudTOz95tj80u_98gU1gTvHGk735jYWQLC22c0yj8o/viewform',
  'register': 'https://docs.google.com/forms/d/1pn9ytqOJoCZl6mHLqhwPc2lkiuuiu486lReVH4xaavI/viewform'
}

const navigate = (key) => {
  window.open(Links[key], '_target');
}

export default function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid container component="main">
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} className={classes.heroLeft}>
          {/* <img height="30px" src="/assets/images/gdghubli-logo-wide-transparent.png" /> */}

          <div className={classes.heroLeftContent}>
            <Typography variant={'h3'} style={{ fontWeight: 500 }}>
              GDGHubli <br />Devfest 2k19
              </Typography>
            <p className={classes.paragraph}>
              DevFests are large, community-run developer events happening around the globe focused on community building and learning about Google’s technologies.
              </p>
            <p>
              Tentative event date: 21st of September 2019
              </p>
            {/* <p className={classes.paragraph}>
                Hosted by GDG Hubli, WTM Hubli, DevFest Hubli will cover multiple product areas such as (but are not limited to) Android, Firebase, Google Cloud Platform, Google Assistant, Flutter, machine learning with TensorFlow, and Mobile Web.
              </p> */}
            <Button onClick={() => navigate('register')} variant="contained" elevation={0} color="primary">Register here</Button>
            &nbsp; &nbsp;
              <Button onClick={() => navigate('callfortalks')} variant="outlined" color="secondary">Call for talks</Button>
            <br /><br />
            or <Link href="https://docs.google.com/forms/d/e/1FAIpQLScbngzFi0SzoildxFhbs0fDRDQlkEil-tGYK-M9eLSfmOsY5A/viewform">apply here</Link> to be a volunteer.
              <br /><br />
            <Typography>
              Follow us, to stay tuned. <br /><br />
              <Link href="http://instagram.com/gdghubli" rel="nofollow">
                <img src="/assets/images/001-instagram.png" width="20px" />
              </Link> &nbsp; &nbsp;
                <Link href="https://twitter.com/GDGHubli" rel="nofollow">
                <img src="/assets/images/002-twitter.png" width="20px" />
              </Link> &nbsp; &nbsp;
                <Link href="https://www.meetup.com/GDGHubli/" rel="nofollow">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40"><title>GDG Hubli Devfest</title><circle fill="#e51937" cx="20" cy="20" r="20"></circle><path fill="#fff" d="M32,28.24c-.31-1.93-3.88-.45-4.1-2.56-.31-3,4.15-9.46,3.8-12A2.92,2.92,0,0,0,28.51,11a3.09,3.09,0,0,0-2.05.44.79.79,0,0,1-1.12,0,11.49,11.49,0,0,0-.9-.82,1.84,1.84,0,0,0-1-.4A3.09,3.09,0,0,0,22,10.3a3.89,3.89,0,0,0-1,.75c-.33.28-1.15,1.2-1.92.86-.33-.15-1.45-.71-2.27-1.06-1.56-.68-3.82.42-4.63,1.87-1.22,2.15-3.6,10.6-4,11.71a3.32,3.32,0,0,0,3.51,4.43,2.61,2.61,0,0,0,2.41-1.64c.39-.69,4-10.09,4.25-10.54a1.17,1.17,0,0,1,1.39-.48,1.27,1.27,0,0,1,.58,1.42c-.13.9-2.67,6.63-2.77,7.28-.16,1.1.36,1.71,1.51,1.77a2.2,2.2,0,0,0,2.18-1.41c.35-.65,4.35-8.67,4.7-9.2s.71-.78,1.11-.76.8.1.68,1-3.35,6.78-3.68,8.22a4.26,4.26,0,0,0,2.34,4.73C27.51,29.81,32.37,30.74,32,28.24Z"></path></svg>
              </Link>

              <br /><br />
              {/* become a member if you are not one already <a href="https://www.meetup.com/GDGHubli/" rel="nofollow">Join us here</a>
                <br /><br />
                <img height="20px" src="/assets/images/gdghubli-logo-wide-transparent.png" /> */}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={7} style={{
          backgroundImage: "url('/assets/images/wall.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: '90%',
          backgroundPosition: 'center right',
        }}>
        </Grid>
      </Grid>
      <section className={classes.section}>
        <Typography variant={'h4'}>Event details</Typography>
        <Grid container component="main" style={{ padding: '50px 0' }}>
          <Grid item xs={12} sm={2} md={3} component={Paper} elevation={0}>
            <h3>Event date</h3>
          </Grid>
          <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0}>
            <p className={classes.paragraph}>
              21st of September 2019 (Tentative)
              </p>
          </Grid>
          <Grid item xs={12} sm={2} md={3} component={Paper} elevation={0}>
            <h3>Expected attendees</h3>
          </Grid>
          <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0}>
            <p className={classes.paragraph}>
              150
              </p>
          </Grid>
          <Grid item xs={12} sm={2} md={3} component={Paper} elevation={0}>
            <h3>Number of sessions</h3>
          </Grid>
          <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0}>
            <p className={classes.paragraph}>
              5, including workshops, quick talks and full length sessions.
              </p>
          </Grid>
          <Grid item xs={12} sm={2} md={3} component={Paper} elevation={0}>
            <h3>Registration</h3>
          </Grid>
          <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0}>
            <p className={classes.paragraph}>
              You will have to be a member of GDGHubli. If you are not yet a member, click <Link href="https://www.meetup.com/GDGHubli/" rel="nofollow">here</Link> to become one.
                If you are a member already, fill this form (<Link href="https://docs.google.com/forms/d/1pn9ytqOJoCZl6mHLqhwPc2lkiuuiu486lReVH4xaavI/viewform">Form link</Link>) and you will be confirmed regarding the registration in the last week of August.
              </p>
          </Grid>
          <Grid item xs={12} sm={2} md={3} component={Paper} elevation={0}>
            <h3>Call for talks</h3>
          </Grid>
          <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0}>
            <p className={classes.paragraph}>
              We would love to see you speak on the technology that you love.
              Suggested area of topics would be (but are not limited to) Android, Firebase, Google Cloud Platform, Google Assistant, Flutter, machine learning with TensorFlow, and Mobile Web.
                We extremely encourage first time speakers. If you would like to give a talk. <Link href="https://docs.google.com/forms/d/1MIudTOz95tj80u_98gU1gTvHGk735jYWQLC22c0yj8o/viewform">Apply here</Link>.
              </p>
          </Grid>
          <Grid item xs={12} sm={2} md={3} component={Paper} elevation={0}>
            <h3>More details coming soon...</h3>
          </Grid>
        </Grid>
      </section>
      {/* <section className={classes.section}>
          <Typography variant={'h4'}>Frequently asked questions</Typography>
          <Grid container component="main" style={{ padding: '50px 0' }}>
            <Grid item xs={12} sm={2} md={3} component={Paper} elevation={0}>
              <h3>What is a GDG</h3>
            </Grid>
            <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0}>
              <p className={classes.paragraph}>
                DevFests are large, community-run developer events happening around the globe focused on community building and learning about Google’s technologies.
              </p>
            </Grid>
            <Grid item xs={12} sm={2} md={3} component={Paper} elevation={0}>
              <h3>Is it free?</h3>
            </Grid>
            <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0}>
              <p className={classes.paragraph}>
                DevFests are large, community-run developer events happening around the globe focused on community building and learning about Google’s technologies.
              </p>
            </Grid>
            <Grid item xs={12} sm={2} md={3} component={Paper} elevation={0}>
              <h3>Is it free?</h3>
            </Grid>
            <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0}>
              <p className={classes.paragraph}>
                DevFests are large, community-run developer events happening around the globe focused on community building and learning about Google’s technologies.
              </p>
            </Grid>
            <Grid item xs={12} sm={2} md={3} component={Paper} elevation={0}>
              <h3>Is it free?</h3>
            </Grid>
            <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0}>
              <p className={classes.paragraph}>
                DevFests are large, community-run developer events happening around the globe focused on community building and learning about Google’s technologies.
              </p>
            </Grid>
          </Grid>
        </section> */}
      <footer>
        <Grid container component="main" style={{ padding: '50px 0' }}>
          <Grid item xs={12} sm={12} md={4} component={Paper} elevation={0} style={{ paddingTop: '30px', textAlign: 'left' }}>
            <img height="30px" src="/assets/images/gdghubli-logo-wide-transparent.png" /> <br/><br/>
            <img height="40px" src="/assets/images/wtm-wide.png" />
          </Grid>
          <Grid item xs={12} sm={12} md={4} elevation={0}>
            <List>
              <ListItem>
                <ListItemText
                  primary="Email address"
                  secondary="gdghubli@gmail.com"
                />
              </ListItem>
              <ListItem>
                <Link color={'inherit'} href="https://twitter.com/GDGHubli">Twitter</Link>
              </ListItem>
              <ListItem>
                <Link color={'inherit'} href="https://instagram.com/gdghubli">Instagram</Link>
              </ListItem>
              <ListItem>
                <Link color={'inherit'} href="https://meetup.com/gdghubli">Meetup</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={4} elevation={0} style={{ paddingTop: '5px' }}>
            <List>
              <ListItem>
                <Link color={'inherit'} href="https://docs.google.com/forms/d/1MIudTOz95tj80u_98gU1gTvHGk735jYWQLC22c0yj8o/viewform">Call for talks</Link>
              </ListItem>
              <ListItem>
                <Link color={'inherit'} href="https://docs.google.com/forms/d/1pn9ytqOJoCZl6mHLqhwPc2lkiuuiu486lReVH4xaavI/viewform">Event registration</Link>
              </ListItem>
              <ListItem>
                <Link color={'inherit'} href="https://docs.google.com/forms/d/e/1FAIpQLScbngzFi0SzoildxFhbs0fDRDQlkEil-tGYK-M9eLSfmOsY5A/viewform">Volunteer registration</Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </footer>
    </Container>
  );
}