import { Button, Grid } from '@mui/material';
import { FC } from 'react';
import { Facts } from '../Facts';

const FirstSection: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Facts />
      </Grid>
      <Grid item md={4} xs={12}>
        <Button variant="contained" color="error" fullWidth>
          Delete
        </Button>
      </Grid>
      <Grid item md={4} xs={12}>
        <Button variant="contained" color="secondary" fullWidth>
          Cancel
        </Button>
      </Grid>
      <Grid item md={4} xs={12}>
        <Button variant="contained" color="primary" fullWidth>
          Confirm
        </Button>
      </Grid>
    </Grid>
  );
};

export { FirstSection };
