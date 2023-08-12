import { Grid, Tabs, Typography } from '@mui/material';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Alert,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import '../searchBar/SearchBar.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getProductsByName } from '../../redux/Actions';
import { useLocation } from 'react-router-dom';
import UserIcon from '../../views/login/UserIcon';
import DrawerComp from './DrawerComp';

export default function NavBar({ links }) {
  const location = useLocation();
  const isProducts = location.pathname === '/products';
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [searchValue, setSearchValue] = useState('');
  const [ShowNoResultsAlert, setShowNoResultsAlert] = useState(false);

  useEffect(() => {
    if (searchValue === '') {
      dispatch(getProducts());
    } else {
      dispatch(getProductsByName(searchValue));
    }
  }, [dispatch, searchValue]);

  useEffect(() => {
    setShowNoResultsAlert(allProducts.length === 0);
  }, [allProducts]);

  const handlerEventSearch = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handlerSubmitSearch = (event) => {
    event.preventDefault();
  };

  const isMatch = useMediaQuery('(max-width: 800px)');
  const isMatchLogo = useMediaQuery('(max-width: 1224px)');
  const isMatchSearchBar = useMediaQuery('(max-width: 1159px)');
  const [value, setValue] = useState();

  return (
    <AppBar
      sx={{
        boxSizing: 'border-box',
        backgroundColor: ' #517f7F',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'space-between',
        width: '100%',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box>
          {isMatch ? (
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              gap={'1rem'}
            >
              <IconButton disableRipple>
                <Link to='/home'>
                  <img
                    src='src/assets/images/TORTUGA_ROSA_SINFONDO.png'
                    alt='Cart Icon'
                    style={{ width: '3.2rem', height: '2.8rem' }}
                  />
                </Link>
              </IconButton>

              <DrawerComp links={links} />
            </Box>
          ) : (
            <Grid
              display={'flex'}
              sx={{ placeItems: 'center' }}
              container
              alignItems='center'
            >
              <Grid item>
                <Typography>
                  <IconButton disableRipple>
                    <Link to='/home'>
                      <img
                        src='src/assets/images/TORTUGA_ROSA_SINFONDO.png'
                        alt='Cart Icon'
                        style={{ width: '3.2rem', height: '2.8rem' }}
                      />
                    </Link>
                  </IconButton>
                </Typography>
              </Grid>
              <Grid item>
                <Tabs
                  indicatorColor='secondary'
                  textColor='inherit'
                  value={value}
                  onChange={(e, val) => setValue(val)}
                >
                  <ul
                    style={{
                      display: 'flex',
                      listStyle: 'none',
                      alignItems: 'center',
                    }}
                  >
                    <li style={{ margin: ' 1rem' }}>
                      <Link to='/home'>INICIO</Link>
                    </li>
                    <li style={{ margin: ' 1rem' }}>
                      <Link to='/products'>PRODUCTOS</Link>
                    </li>
                    <li style={{ margin: ' 1rem' }}>
                      <Link to='/about'>NOSOTRAS</Link>
                    </li>
                    <li style={{ margin: ' 1rem' }}>
                      <Link to='/create'>CREAR</Link>
                    </li>
                    <li style={{ margin: ' 1rem' }}>
                      <Link to='/adminAccount'>ADMIN</Link>
                    </li>
                  </ul>
                </Tabs>
              </Grid>
            </Grid>
          )}
        </Box>
        <Box>
          {isMatchLogo ? (
            <Grid
              margin={'auto'}
              position={'absolute'}
              visibility={'hidden'}
            >
              <IconButton
                sx={{ width: '8rem', height: '4rem' }}
                disableRipple
              >
                <img
                  className='img-pdm'
                  src='src/assets/images/PdM.png' // Reemplaza esta ruta con la ruta correcta hacia la imagen del logo
                  alt='Cart Icon'
                  style={{ width: '100%', height: '100%' }}
                />
              </IconButton>
            </Grid>
          ) : (
            <Grid margin={'auto'}>
              <IconButton
                sx={{ width: '8rem', height: '4rem' }}
                disableRipple
              >
                <img
                  className='img-pdm'
                  src='src/assets/images/PdM.png' // Reemplaza esta ruta con la ruta correcta hacia la imagen del logo
                  alt='Cart Icon'
                  style={{ width: '100%', height: '100%' }}
                />
              </IconButton>
            </Grid>
          )}
        </Box>
        <Box>
          <Grid
            display={'flex'}
            marginLeft={'auto'}
            alignItems={'center'}
            gap={'10px'}
          >
            {isProducts && !isMatchSearchBar && (
              <SearchBar
                handlerEventSearch={handlerEventSearch}
                handlerSubmitSearch={handlerSubmitSearch}
              />
            )}
            {ShowNoResultsAlert && (
              <Alert
                severity='error'
                className='error-searchBar'
              >
                No se encontró el producto
              </Alert>
            )}
            <Box
              display={'flex'}
              justifyContent={'flex-end'}
              marginRight={1}
              gap={'10px'}
            >
              {/* <Box  sx={{ display: 'flex', alignItems: 'center' }}> */}
              <IconButton>
                <Link to='/Cart'>
                  {' '}
                  <img
                    src='src/assets/images/Cart.png'
                    alt='Cart Icon'
                    style={{ width: '3.2rem', height: '3.2rem' }}
                  />
                </Link>
              </IconButton>
              <UserIcon />
            </Box>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
