import { Grid } from '@mui/material';
import { FC } from 'react';
import { FactCard } from '../Card';
import { facts } from '../../content';

const Facts: FC = () => {
  return (
    <Grid container spacing={2}>
      {facts.map((fact) => {
        return (
          <Grid item xs={12} key={fact.id}>
            <FactCard fact={fact.content} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export { Facts };
