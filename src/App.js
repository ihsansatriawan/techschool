import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './component/Header';
import Footer from './component/Footer';
import Hero from './component/Hero';
import { useStyles } from './styles';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const classes = useStyles();
  
  return (
    <Router>
      <CssBaseline />
      <div>
        <Header />
        <Hero />
        <Container className={classes.cardGrid} maxWidth="md">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;