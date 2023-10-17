import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import { PropsWithChildren } from '../../resources/interfaces/PropsWithChildren';

const ContentArea: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        gridArea: 'main',
        maxHeight: 'calc(100vh - 64px)',
        p: 4,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {children}
      </Grid>
    </Box>
  );
};

export { ContentArea };
