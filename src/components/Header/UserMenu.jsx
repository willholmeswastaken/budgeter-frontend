import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Text } from 'grommet';
import Avatar from './Avatar';

const UserMenu = ({ user, items, ...rest }) => (
  <Menu
    dropAlign={{ top: 'bottom', right: 'right' }}
    icon={false}
    items={items.map((item) => ({
      ...item,
      label: <Text size="small">{item.label}</Text>,
      onClick: () => {}, // no-op
    }))}
    label={<Avatar name={user.name} url={user.thumbnail} />}
    {...rest}
  />
);

UserMenu.propTypes = {
  user: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
};

UserMenu.defaultProps = {
  user: {},
  items: [],
};

export default UserMenu;
