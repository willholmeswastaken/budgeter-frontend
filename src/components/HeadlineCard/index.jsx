import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Heading } from 'grommet';

const HeadlineCard = ({ data, ...rest }) => (
  <Box
    animation={{ type: 'fadeIn', duration: 1500 }}
    round
    pad="medium"
    direction="column"
    background="white"
    height="small"
    {...rest}
  >
    <Heading level="2" margin="none" size="small">
      {data.name}
    </Heading>
    <Text size="90px" weight="bold">
      £{data.allocatedValue}
    </Text>
  </Box>
);

HeadlineCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    allocatedValue: PropTypes.number.isRequired,
  }),
};

HeadlineCard.defaultProps = {
  data: {
    name: 'Bills',
    allocatedValue: 1000,
  },
};

export default HeadlineCard;
