import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import {
    NavLink
  } from 'react-router-dom';
import useUser from '../hooks/useUser';

const pages = ['Home', 'Coins', 'Portfolio', 'Stats', 'Wiki', 'ContactUs'];
const settingsIsLogued = ['Profile', 'Logout'];
const settingsNotlogued = ['Register', 'Login'];

const ResponsiveAppBar = () => {
    const { isLogued } = useUser(); // user, password,
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        console.log('anchorElNav', anchorElNav)
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
        console.log('anchorElUser', anchorElUser)
    };

    const handleCloseNavMenu = (page, value) => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = (props) => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                PORTFOLIO TRACKER
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                key="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Portfolio Tracker
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <NavLink key={page} to={'/'+page}>
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 1, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                    </NavLink>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                key="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {isLogued && settingsIsLogued.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <NavLink  to={'/'+ setting}>
                            <Typography textAlign="center">{setting}</Typography>
                        </NavLink>
                    </MenuItem>
                ))}
                {!isLogued && settingsNotlogued.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <NavLink  to={'/'+ setting}>
                            <Typography textAlign="center">{setting}</Typography>
                        </NavLink>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
