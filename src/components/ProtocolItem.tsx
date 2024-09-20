import { FC } from 'react';
import { Protocol } from '../protocols';
import { Box, Typography } from '@mui/material';
import xLogo from '../images/x-white.png';

const ProtocolItem: FC<{ protocol: Protocol }> = ({ protocol }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.25rem',
      }}
    >
      <Box
        onClick={() => {
          window.open(protocol.url, '_blank');
        }}
        key={protocol.name}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.25rem',
          opacity: 0.85,
          ':hover': {
            opacity: 1,
          },
          cursor: 'pointer',
          flex: '1 1 10%',
        }}
      >
        <Box
          component={'img'}
          src={`${protocol.logoPath}` || ''}
          width={50}
          height={50}
          alt={protocol.name}
          sx={{ borderRadius: '50%' }}
        />
        <Typography
          color={'primary'}
          fontSize={16}
          textAlign={'center'}
          fontWeight={'bold'}
        >
          {protocol.name}
        </Typography>
      </Box>
      <Box
        onClick={() => window.open(protocol.twitterUrl, '_blank')}
        component={'img'}
        src={xLogo}
        width={18}
        height={18}
        alt={'X link'}
        sx={{
          borderRadius: '50%',
          opacity: 0.85,
          ':hover': {
            opacity: 1,
          },
          cursor: 'pointer',
        }}
      />
    </Box>
  );
};

export default ProtocolItem;
