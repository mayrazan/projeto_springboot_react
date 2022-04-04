import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SelectType from '../../components/SelectType';
import { getHero, updateHero } from '../../services/service';
import Input from '@mui/material/Input';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';

function EditHero() {
  const params = useParams();
  const [form, setForm] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isLoadingButton, setLoadingButton] = useState(false);
  const navigation = useNavigate();

  const getSuperHero = async () => {
    setLoading(true);
    try {
      const response = await getHero(params.id);
      setForm(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSuperHero();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    setLoadingButton(true);
    await updateHero(params.id, form, {
      headers: { 'Content-Type': 'application/json' },
    })
      .catch((error) => {
        setLoadingButton(false);
      })
      .finally(() => {
        setLoadingButton(false);
      });
    navigation('/');
  }

  if (isLoading) return <Loading />;

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
          Update Super Hero
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                disabled
                readOnly
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
            disabled={isLoadingButton}
          >
            Update
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default EditHero;
