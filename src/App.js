import React, { useState } from 'react';
import { Box, Grommet, ResponsiveContext } from 'grommet';
import theme from './theme';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box>
            <Header toggleSidebar={() => setShowSidebar(!showSidebar)} />
            <Box direction="row" flex overflow={{ horizontal: 'hidden', vertical: 'hidden' }}>
              <Sidebar
                showSidebar={showSidebar}
                isSmallDisplay={size === 'small'}
                setShowSidebar={setShowSidebar}
              />
              <Box flex align="center" justify="center">
                app body
              </Box>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default App;
