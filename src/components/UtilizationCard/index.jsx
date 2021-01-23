import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Heading, Meter } from 'grommet';
import StatusBadge from '../StatusBadge';

const UtilizationCard = ({ data }) => (
  <Box
    animation={{ type: 'fadeIn', duration: 1500 }}
    direction="row"
    justify="between"
    gap="large"
    pad="medium"
    height="small"
    background="white"
    round
  >
    <Box gap="large">
      <Box gap="xsmall">
        <Heading level="2" margin="none" size="small">
          {data.name}
        </Heading>
        <Text color="gray" size="small">
          £{data.allocatedValue}
        </Text>
      </Box>
      <Box gap="medium">
        <Box direction="row" align="center">
          <StatusBadge background="status-ok" />
          <Text color="dark-1" size="small" margin={{ left: 'xsmall' }}>
            Used (£{data.usedValue})
          </Text>
        </Box>
        <Box direction="row" align="center">
          <StatusBadge background="status-unknown" />
          <Text color="dark-1" size="small" margin={{ left: 'xsmall' }}>
            Available (£{data.availableValue})
          </Text>
        </Box>
      </Box>
    </Box>
    <Meter
      round
      size="xsmall"
      type="circle"
      background="light-2"
      values={[{ value: data.percent }]}
    />
  </Box>
);

UtilizationCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    allocatedValue: PropTypes.number.isRequired,
    usedValue: PropTypes.number.isRequired,
    availableValue: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }),
};

UtilizationCard.defaultProps = {
  data: {
    name: 'Spending',
    allocatedValue: 1000,
    usedValue: 500,
    availableValue: 500,
    percent: 50,
  },
};

export default UtilizationCard;
