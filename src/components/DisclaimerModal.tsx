import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FC } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(17 17 5)',
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

const DisclaimerModal: FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ open, setOpen }) => {
  return (
    <Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="disclaimer-modal-title"
        aria-describedby="disclaimer-modal-description"
      >
        <Box sx={style}>
          <Typography id="disclaimer-modal-description">
            Disclaimer: The protocols and projects mentioned or listed are for
            informational and educational purposes only to enable discovery on
            Abstract Chain. They are not endorsed, recommended, vetted or
            validated in any way. Inclusion of a protocol or project does not
            imply it is safe, secure, legitimate or fit for any particular
            purpose. You are solely responsible for doing your own research and
            due diligence on any protocols or projects before interacting with
            or investing in them. This content does not constitute financial,
            investment, legal, tax or any other type of professional advice.
            Nothing written here should be construed as a solicitation or offer,
            or recommendation, to buy or sell any securities, cryptocurrencies
            or other financial instruments.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default DisclaimerModal;
