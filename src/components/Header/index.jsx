import React, { useState } from 'react';
import { Box, DropButton, Heading, Text } from 'grommet';
import UserMenu from './UserMenu';
import Avatar from './Avatar';

const userSession = {
  user: {
    name: 'Will Holmes',
    thumbnail:
      'https://avatars.githubusercontent.com/u/13040458?s=460&u=8a9ade694ead8217af524b0098a7b044ffa1fae7&v=4',
  },
  items: [
    {
      label: 'Logout',
      href: '#',
    },
  ],
};

const Header = () => {
  const [userMenuOpen, setUserMenuVisibility] = useState(false);
  return (
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
      <Heading level="3" margin="none" color="white">
        Budgeter
      </Heading>
      <DropButton
        open={userMenuOpen}
        onOpen={() => setUserMenuVisibility(!userMenuOpen)}
        onClose={() => setUserMenuVisibility(!userMenuOpen)}
        dropContent={
          <Box pad="small">
            <Text size="medium" margin="small">
              Settings
            </Text>
            <Text size="medium" margin="small">
              Switch Server
            </Text>
            <Text size="medium" margin="small">
              Documention
            </Text>
            <Box direction="row" justify="between">
              <Text size="medium" margin="small">
                Logout
              </Text>
              {userSession && (
                <UserMenu alignSelf="center" user={userSession.user} items={userSession.items} />
              )}
            </Box>
          </Box>
        }
      >
        <Box
          pad={{ horizontal: 'small', vertical: 'small' }}
          responsive={false}
          direction="row"
          align="center"
          gap="small"
        >
          <Avatar name={userSession.user.name} url={userSession.user.thumbnail} />
        </Box>
      </DropButton>
    </Box>
  );
};

export default Header;
