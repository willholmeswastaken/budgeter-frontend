import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const StatusBadge = ({ background, ...rest }) => (
  <Box width="12px" height="12px" round="small" background={background} {...rest} />
);

StatusBadge.propTypes = {
  background: PropTypes.string,
};

StatusBadge.defaultProps = {
  background: 'status-unknown',
};

export default StatusBadge;
