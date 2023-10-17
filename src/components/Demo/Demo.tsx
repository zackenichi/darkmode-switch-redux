import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { FirstSection } from './FirstSection';
import SecondSection from './SecondSection';

const Demo: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1">DarkMode Switch Demo</Typography>
      </Grid>
      <Grid item xs={12} md={4} role="first-section">
        <FirstSection />
      </Grid>
      <Grid item xs={12} md={8} sm={12} role="second-section">
        <SecondSection />
      </Grid>
    </Grid>
  );
};

export { Demo };
