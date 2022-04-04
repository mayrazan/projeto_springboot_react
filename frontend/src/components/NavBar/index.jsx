import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigation = useNavigate();
  const goToHome = () => {
    navigation('/');
  };

  const goToCreateHero = () => {
    navigation('/create');
  };

  return (
    <AppBar position='relative'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Button variant='h6' color='inherit' onClick={goToHome}>
          <HomeIcon sx={{ mr: 2 }} />
          Home
        </Button>
        <Button variant='h6' color='inherit' onClick={goToCreateHero}>
          <AddIcon sx={{ mr: 2 }} />
          Add new hero
        </Button>
      </Toolbar>
    </AppBar>
  );
}
