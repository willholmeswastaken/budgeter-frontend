import React from 'react';
import { Box, Grommet } from 'grommet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './theme';
import Landing from './pages/Landing';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => (
  <Grommet theme={theme}>
    <Box>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Box>
  </Grommet>
);

export default App;
