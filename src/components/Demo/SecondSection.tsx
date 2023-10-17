import { Grid } from '@mui/material';
import { FC } from 'react';

import { BasicTable } from '../BasicTable';

import { IconTabs } from '../IconTabs';
import { SliderWithLabel } from '../SliderWithLabel';

const SecondSection: FC = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <BasicTable />
      </Grid>
      <Grid item xs={6}>
        <IconTabs />
      </Grid>
      <Grid item xs={6}>
        <SliderWithLabel />
      </Grid>
    </Grid>
  );
};

export default SecondSection;
