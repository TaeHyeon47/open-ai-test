'use client';
import React, { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';

const MainHeaderMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        open={open}
        sx={{ display: { xs: 'flex', sm: 'none' }, px: '15px' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 1 }}>
          {/* 왼쪽: 햄버거 버튼 */}
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          {/* 가운데: 로고 */}
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

          {/* 오른쪽 공간 확보용 (투명 버튼) */}
          <IconButton edge="end" sx={{ visibility: 'hidden' }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainHeaderMobile;
