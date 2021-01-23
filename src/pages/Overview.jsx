import { Box } from 'grommet';
import React from 'react';
import UtilizationCard from '../components/UtilizationCard';

const Overview = () => (
  <Box flex={false} direction="row-responsive" wrap>
    <Box gap="large" flex="grow" margin="medium">
      <UtilizationCard
        data={{
          name: 'Bills',
          allocatedValue: 1000,
          usedValue: 500,
          availableValue: 500,
          percent: 50,
        }}
      />
    </Box>
    <Box gap="large" flex="grow" margin="medium">
      <UtilizationCard
        data={{
          name: 'Savings',
          allocatedValue: 1000,
          usedValue: 500,
          availableValue: 500,
          percent: 50,
        }}
      />
    </Box>
    <Box gap="large" flex="grow" margin="medium">
      <UtilizationCard />
    </Box>
  </Box>
);

export default Overview;
