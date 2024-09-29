import { Box, Button, Typography } from '@mui/material';

const MissingProtocolButton = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: 0,
        display: 'flex',
        gap: 2,
        alignItems: 'center',
      }}
    >
      <Typography>Missing Protocols?</Typography>
      <Button
        variant={'outlined'}
        onClick={() =>
          window.open(
            'https://github.com/chrischang/abstract_unofficial_ecosystem_map',
            '_blank'
          )
        }
      >
        Submit a PR
      </Button>
    </Box>
  );
};

export default MissingProtocolButton;
