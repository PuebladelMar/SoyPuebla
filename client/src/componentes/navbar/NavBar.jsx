// import React, { useState } from 'react';
// import ProductsNav from './ProductsNav';
// import { NavLink } from 'react-router-dom';
// import './NavBar.css';

// const NavBar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const handleMouseEnter = () => {
//     setShowMenu(true);
//   };

//   const handleMouseLeave = () => {
//     setShowMenu(false);
//   };

//   return (
//     <div className='navbar'>
//       <div>
//         <form onSubmit={''} />

//         <input
//           className='search-input'
//           type='text'
//           placeholder='BUSCAR'
//           onChange={''}
//         />
//         <button className='navbar-button'>BUSCAR</button>
//         <NavLink to='/login'>
//           <button className='navbar-button'>REGISTRATE</button>
//         </NavLink>

//         <NavLink to='/cart'>
//           <button className='navbar-button'>CARRITO</button>
//         </NavLink>
//       </div>

//       <div className='products'>
//         <button
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           className='products-button'
//         >
//           PRODUCTOS {showMenu && <ProductsNav />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  'position': 'relative',
  'borderRadius': theme.shape.borderRadius,
  'backgroundColor': alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  'marginRight': theme.spacing(2),
  'marginLeft': 0,
  'width': '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  'color': 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show 4 new mails'
          color='inherit'
        >
          <Badge
            badgeContent={4}
            color='error'
          >
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge
            badgeContent={17}
            color='error'
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{ backgroundColor: ' #517f7F' }}
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <IconButton>
              <Link to='/home'>
                <img
                  src='src/assets/images/TORTUGA_ROSA_SINFONDO.png'
                  alt='Cart Icon'
                  style={{ width: '3.2rem', height: '2.8rem' }}
                />
              </Link>
            </IconButton>
            {/* <MenuIcon /> */}
          </IconButton>
          <ul style={{ display: 'flex', listStyle: 'none' }}>
            <li style={{ margin: '0 1rem' }}>
              <Link to='/home'>INICIO</Link>
            </li>
            <li style={{ margin: '0 1rem' }}>
              <Link to='/products'>PRODUCTOS</Link>
            </li>
            <li style={{ margin: '0 1rem' }}>
              <Link to='/about'>NOSOTRAS</Link>
            </li>
            <li style={{ margin: '0 1rem' }}>
              <Link to='/create'>CREAR</Link>
            </li>
          </ul>

          <IconButton>
            <img
              src='src/assets/images/PdM.png'
              alt='Cart Icon'
              style={{ width: '5rem', height: '3rem' }}
            />
          </IconButton>

          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ display: { xs: 'none', sm: 'block' } }}
          ></Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Qué productos buscás?'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 2 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton
              size='large'
              aria-label='show 4 new mails'
              color='inherit'
            >
              <Badge
                badgeContent={4}
                color='error'
              >
                <MailIcon />
              </Badge>
            </IconButton> */}
            {/* <IconButton
              size='large'
              aria-label='show 17 new notifications'
              color='inherit'
            >
              <Badge
                badgeContent={17}
                color='error'
              >
                <NotificationsIcon />
              </Badge>
            </IconButton> */}

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
            <IconButton
              size='small'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={''}
              color='inherit'
            >
              <Link to='/login'>Log in</Link>
              {/* <AccountCircle /> */}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
