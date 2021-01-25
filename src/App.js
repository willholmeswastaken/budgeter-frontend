import React from 'react';
import { Box, Grommet } from 'grommet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './theme';

import Header from './components/Header';
import Landing from './pages/Landing';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => (
  <Grommet theme={theme}>
    <Box>
      <Header />
      <Box
        background="light-1"
        fill
        direction="row"
        flex
        overflow={{ horizontal: 'hidden', vertical: 'hidden' }}
        height={{ min: '100vh' }}
      >
        <Box flex align="top" justify="top">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/home" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </Box>
      </Box>
    </Box>
  </Grommet>
);

export default App;
