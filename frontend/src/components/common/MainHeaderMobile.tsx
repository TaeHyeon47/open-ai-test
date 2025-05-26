'use client';
import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MainHeaderMobile = () => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ display: { xs: 'flex', sm: 'none' }, px: '15px' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 1 }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              MyLogo
            </Typography>
          </Box>

          <IconButton edge="end" sx={{ visibility: 'hidden' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainHeaderMobile;
