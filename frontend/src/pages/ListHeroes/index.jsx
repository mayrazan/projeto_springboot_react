import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavBar from '../../components/NavBar';
import Loading from '../../components/Loading';
import { deleteHero, getHeroes, getHeroesByType } from '../../services/service';
import { useNavigate } from 'react-router-dom';

function ListHeroes() {
  const navigation = useNavigate();

  const [heroes, setHeroes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isActive, setIsActive] = useState('all');

  const goToEditHero = (id) => {
    navigation('/edit/' + id);
  };

  const getSuperHeroes = async () => {
    setLoading(true);
    try {
      const response = await getHeroes();
      setHeroes(response.content);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSuperHeroes();
  }, []);

  useEffect(() => {
    if (isActive !== 'all') {
      getHeroesByType(isActive)
        .then((res) => {
          setHeroes(res);
          setLoading(true);
        })
        .catch((error) => {
          setLoading(false);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getSuperHeroes();
    }
  }, [isActive]);

  const getHeroType = (type) => {
    if (type === 'MARVEL') {
      return setIsActive('MARVEL');
    }
    if (type === 'DC') {
      return setIsActive('DC');
    }
    setIsActive('all');
  };

  const deleteHeroId = async (id) => {
    setHeroes((prevState) => prevState.filter((hero) => hero.id !== id));
    await deleteHero(id);
  };

  if (isLoading) return <Loading />;
  if (error)
    return (
      <Typography
        component='h1'
        variant='h2'
        align='center'
        color='text.primary'
        gutterBottom
      >
        Error loading heroes, try again
      </Typography>
    );

  return (
    <>
      <NavBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              Super Heroes
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction='row'
              spacing={2}
              justifyContent='center'
            >
              <Button
                variant={isActive === 'all' ? 'contained' : 'outlined'}
                onClick={() => getHeroType('all')}
              >
                All
              </Button>
              <Button
                variant={isActive === 'MARVEL' ? 'contained' : 'outlined'}
                onClick={() => getHeroType('MARVEL')}
              >
                Marvel
              </Button>
              <Button
                variant={isActive === 'DC' ? 'contained' : 'outlined'}
                onClick={() => getHeroType('DC')}
              >
                DC
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {heroes?.map((hero) => (
              <Grid item key={hero.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component='img'
                    image={
                      hero.profilePicture !== null
                        ? 'data:image/png;base64,'+ hero.profilePicture
                        : 'https://source.unsplash.com/random'
                    }
                    alt='random'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {hero.name}
                    </Typography>
                    <Typography>{hero.heroType}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' onClick={() => goToEditHero(hero.id)}>
                      Edit
                    </Button>
                    <Button size='small' onClick={() => deleteHeroId(hero.id)}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default ListHeroes;
