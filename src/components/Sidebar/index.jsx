import { Box, Button, Collapsible, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';
import React from 'react';

export default ({ showSidebar, isSmallDisplay, setShowSidebar }) => (
    (!showSidebar || !isSmallDisplay)
        ? (
            <Collapsible direction="horizontal" open={showSidebar}>
                <Box
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'
                >
                    sidebar
                </Box>
            </Collapsible>
        )
        : (
            <Layer>
                <Box
                    background='light-2'
                    tag='header'
                    justify='end'
                    align='center'
                    direction='row'
                >
                    <Button
                        icon={<FormClose />}
                        onClick={() => setShowSidebar(false)}
                    />
                </Box>
                <Box
                    fill
                    background='light-2'
                    align='center'
                    justify='center'>
                    sidebar
                </Box>
            </Layer>
        )
);