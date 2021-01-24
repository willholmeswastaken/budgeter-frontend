import React from 'react';
import { Box, Grommet } from 'grommet';
import theme from './theme';
import Header from './components/Header';
import Overview from './pages/Overview';
import SignUp from './pages/SignUp';

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
          <SignUp />
        </Box>
      </Box>
    </Box>
  </Grommet>
);

export default App;
