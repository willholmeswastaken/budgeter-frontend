import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Collapsible, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';

const Sidebar = ({ showSidebar, isSmallDisplay, setShowSidebar }) =>
  !showSidebar || !isSmallDisplay ? (
    <Collapsible direction="horizontal" open={showSidebar}>
      <Box width="medium" background="light-2" elevation="small" align="center" justify="center">
        sidebar
      </Box>
    </Collapsible>
  ) : (
    <Layer>
      <Box background="light-2" tag="header" justify="end" align="center" direction="row">
        <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
      </Box>
      <Box fill background="light-2" align="center" justify="center">
        sidebar
      </Box>
    </Layer>
  );

Sidebar.propTypes = {
  showSidebar: PropTypes.bool,
  isSmallDisplay: PropTypes.bool.isRequired,
  setShowSidebar: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  showSidebar: false,
};

export default Sidebar;
