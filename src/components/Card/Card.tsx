import { Paper, Typography } from '@mui/material';
import React, { FC } from 'react';

interface CardProps {
  children: React.ReactNode;
  sx?: {};
}

interface FactCardProps {
  fact: string;
}

const Card: FC<CardProps> = ({ children, sx }) => {
  return (
    <Paper
      sx={{
        textAlign: 'left',
        fontWeight: 'bold',
        padding: 2,
        borderRadius: '8px',
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

const FactCard: FC<FactCardProps> = ({ fact }) => {
  return (
    <Card>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Did you know?
      </Typography>
      <Typography variant="body1">{fact}</Typography>
    </Card>
  );
};

export { Card, FactCard };
