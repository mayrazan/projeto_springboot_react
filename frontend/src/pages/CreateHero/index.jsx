import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SelectType from '../../components/SelectType';
import { createHero } from '../../services/service';
import Input from '@mui/material/Input';
import { useNavigate } from 'react-router-dom';

function CreateHero() {
  const [form, setForm] = useState({
    name: '',
    heroType: '',
    profilePicture: null,
  });
  const navigation = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    let data = new FormData();
    data.append('name', form.name);
    data.append('heroType', form.heroType);
    data.append('profilePicture', form.profilePicture);

    if (data.get('name') && data.get('heroType')) {
      await createHero(data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigation('/');
    } else {
      alert('Preencha todos os campos');
    }
  }

  return (
    <>
      <NavBar />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h5'>
          Create new Super Hero
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} enctype="multipart/form-data">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete='given-name'
                name='name'
                required
                fullWidth
                id='name'
                label='Name'
                autoFocus
                value={form.name}
                onChange={(event) => {
                  setForm({ ...form, name: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <SelectType
                value={form.heroType}
                onChange={(event) => {
                  setForm({ ...form, heroType: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type='file'
                name='profilePicture'
                accept='image/*'
                disableUnderline
                onChange={(event) => {
                  setForm({ ...form, profilePicture: event.target.files[0] });
                }}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default CreateHero;
