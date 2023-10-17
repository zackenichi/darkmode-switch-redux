import { Box } from '@mui/material';
import { FC } from 'react';
import { Header } from '../Header';
import { ContentArea } from '../ContentArea';
import { Demo } from '../Demo';

const App: FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        height: '100vh',
        gridTemplateRows: 'auto 1fr',
        gridTemplateAreas: `"header" "main"`,
      }}
      id="appContainer"
      role="main"
    >
      <Box
        sx={{
          gridArea: 'header',
        }}
      >
        <Header />
      </Box>
      <ContentArea>
        <Demo />
      </ContentArea>
    </Box>
  );
};

export { App };
