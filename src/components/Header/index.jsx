import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading } from 'grommet';
import { Notification } from 'grommet-icons';

const Header = ({ toggleSidebar }) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
  >
    <Heading level="3" margin="none">
      Budgeter
    </Heading>
    <Button icon={<Notification />} onClick={toggleSidebar} />
  </Box>
);

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
