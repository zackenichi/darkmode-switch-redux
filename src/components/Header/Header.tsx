import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { DarkModeSwitch } from '../DarkModeSwitch';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, alignItems: 'center' }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={8}>
              <Box display="flex" alignItems="center">
                <Brightness4Icon />
                <Typography variant="h3">DarkMode Switch</Typography>
              </Box>
            </Grid>
            <Grid item xs={4} textAlign="right">
              <DarkModeSwitch />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Header };
