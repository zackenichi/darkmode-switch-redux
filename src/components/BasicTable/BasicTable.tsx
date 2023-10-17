import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { cars } from '../../content';
import { formatCurrency } from '../../resources/utility/currency';

function createData(
  name: string,
  brand: string,
  year: number,
  horsepower: number,
  price: number
) {
  return { name, brand, year, horsepower, price };
}

const rows = cars.map((row) =>
  createData(row.name, row.brand, row.year, row.horsepower, row.price)
);

const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Car</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Horsepower</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const amount = formatCurrency(row.price, '$');

            return (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.brand}</TableCell>
                <TableCell align="right">{row.year}</TableCell>
                <TableCell align="right">{row.horsepower}</TableCell>
                <TableCell align="right">{amount}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { BasicTable };
