import { FC, useMemo } from 'react';
import { protocols } from './protocols';
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
} from '@mui/material';
import abstractLogo from './images/abstract.svg';
import { groupByCategory } from './utils';
import ProtocolByCategoryList from './components/ProtocolByCategoryList';
import MissingProtocolButton from './components/MissingProtocolButton';
import Disclaimer from './components/Disclaimer';

const App: FC = () => {
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#fff',
        },
      },
      typography: {
        fontFamily: '"Chakra Petch", sans-serif',
      },
    });
  }, []);

  const groupProtocols = useMemo(() => {
    return groupByCategory(protocols).sort((a, b) => {
      return a[0].category.localeCompare(b[0].category);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MissingProtocolButton />
      <Paper sx={{ background: 'rgb(0,0,0)', minHeight: '100vh' }}>
        <Container
          maxWidth={'lg'}
          sx={{
            py: '4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Box
            component={'img'}
            src={abstractLogo}
            width={'200px'}
            mb={'1rem'}
          />
          <Typography component={'h1'} variant={'h5'} fontWeight={'bold'}>
            Unofficial Abstract Ecosystem Map
          </Typography>
          <ProtocolByCategoryList groupProtocols={groupProtocols} />
        </Container>
      </Paper>
      <Disclaimer />
    </ThemeProvider>
  );
};

export default App;
