import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import lofo from '../assets/pngegg (2).png';
import SideBar from './SideBar';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const navigate = useNavigate();
  const [menubar, setMenubar] = useState(false);

  const toggleMenubar = () => setMenubar(!menubar);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
      Swal.fire({
        position: 'top',
        text: 'User LogOut successfully!!',
        icon: 'success',
        timer: 1000,
      });
    } catch (error) {
      Swal.fire({
        position: 'top',
        text: 'Sorry! Try again',
        icon: 'error',
        timer: 1000,
      });
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgb(21, 94, 117)', width: '100%' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', ml: 2 }}>
            <Box
              component="img"
              src={lofo}
              alt="Side Image"
              sx={{
                width: { xs: '40px', sm: '50px', md: '62px' },
                height: { xs: '35px', sm: '45px', md: '52px' },
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: { xs: '14px', sm: '19px', md: '20px' }, ml: 2 }}
            >
              Learning Management System
            </Typography>
          </Box>

          <Button
            onClick={handleLogout}
            color="inherit"
            sx={{
              fontSize: { xs: '10px', sm: '12px', md: '16px' },
              borderRadius: 50,
              py: 2,
              font: 'small-caption',
              bgcolor: 'rgb(22 78 99)',textTransform: 'capitalize','&:hover': {
          backgroundColor: 'rgb(65, 117, 138)',  boxShadow:5
        }
            }}
          >
            Logout
          </Button>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 3, display: { lg: 'none', md: 'none',sm:'block' } }} // Hide MenuIcon on large screens
            onClick={toggleMenubar}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for the menubar on small screens */}
      <Drawer 
        anchor="left"
        open={menubar}
        onClose={toggleMenubar}
        sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}  
        PaperProps={{ 
          sx: { width: '260px', bgcolor:"#f5f5f5"} 
        }}
      >
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display:"flex",justifyContent:'end',p:2,ml:25 }} 
            onClick={toggleMenubar}
          >
            <CloseIcon />
          </IconButton>

        <SideBar />
      </Drawer>

      {/* Sidebar for large screens */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' }, // Hide on small screens, show on large
          width: '280px',
          position: 'fixed',
          top: '64px', // Adjust for AppBar height
          left: 0,
          height: 'calc(100vh - 64px)',
          backgroundColor: '#f5f5f5',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto', 
        }}
      >
        <SideBar />
      </Box>
    </Box>
  );
}
