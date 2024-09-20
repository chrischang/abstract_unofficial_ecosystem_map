import { Alert, Button, Typography } from '@mui/material';
import { useState } from 'react';
import DisclaimerModal from './DisclaimerModal';

const Disclaimer = () => {
  const [open, setOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  if (!open) {
    return null;
  }

  return (
    <>
      <Alert
        severity={'warning'}
        sx={{
          width: '80%',
          position: 'fixed',
          bottom: '1rem',
          right: '1rem',
          display: 'flex',
          gap: '0.25rem',
          alignItems: 'center',
        }}
        onClose={() => setOpen(false)}
      >
        <Typography>
          Disclaimer: The protocols and projects mentioned or listed are not
          recommendations or endorsements{' '}
          <Button
            size={'small'}
            variant={'outlined'}
            onClick={() => setModalOpen(true)}
          >
            Click for further disclaimers
          </Button>
        </Typography>
      </Alert>
      <DisclaimerModal open={modalOpen} setOpen={setModalOpen} />
    </>
  );
};

export default Disclaimer;
