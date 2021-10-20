import {  createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Leftbar from './componentes/leftbar/Leftbar';
import Navbar from './componentes/navbar/Navbar';
import Feed from './paginas/feed/Feed';
import Home from './paginas/home/Home';

const tema = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  palette: {
    background: {
      default: "lightblue"
    }
  }
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={tema}>
        <CssBaseline />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/feed'>
            <Navbar />
            <Leftbar />
            <Feed />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
