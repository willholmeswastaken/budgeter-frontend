import { Box, Button, Heading } from 'grommet';
import { Notification } from 'grommet-icons';
import React from 'react';

export default ({ toggleSidebar }) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
    >
        <Heading
            level='3'
            margin='none'>
            Budgeter
        </Heading>
        <Button
            icon={<Notification />}
            onClick={toggleSidebar}
        />
    </Box>
)