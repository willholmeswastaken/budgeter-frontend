import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Avatar = ({ name, url, ...rest }) => (
  <Box
    a11yTitle={`${name} avatar`}
    height="avatar"
    width="avatar"
    round="full"
    background={`url(${url})`}
    {...rest}
  />
);

Avatar.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};

Avatar.defaultProps = {
  name: 'Will Holmes',
  url:
    'https://avatars.githubusercontent.com/u/13040458?s=460&u=8a9ade694ead8217af524b0098a7b044ffa1fae7&v=4',
};

export default Avatar;
