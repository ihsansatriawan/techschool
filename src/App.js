import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './component/Header';
import Footer from './component/Footer';
import Hero from './component/Hero';
import { useStyles } from './styles';
import Home from './pages/Home';
import About from './pages/About';
import Pokemon from './pages/pokemon';

function App() {
  const classes = useStyles();
  
  return (
    <Router>
      <CssBaseline />
      <div>
        <Header />
        <Hero />
        <Container className={classes.cardGrid} maxWidth="md">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/pokemon" component={Pokemon} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;