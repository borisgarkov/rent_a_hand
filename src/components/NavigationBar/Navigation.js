import { AppBar, Toolbar, Button, Menu, MenuItem, ButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import logo from '../images/Rent A Hand_D1.png';
import { useState } from "react";

import { Link, useNavigate } from 'react-router-dom';

import styles from './navbar.module.css';


export default function Navigation() {

    const navigate = useNavigate();

    const [pageMenuAnchorElement, setPageMenuAnchorElement] = useState(null);
    const [profileMenuAnchorElement, setProfileMenuAnchorElement] = useState(null);

    const isPageMenuOpen = Boolean(pageMenuAnchorElement);
    const isProfileMenuOpen = Boolean(profileMenuAnchorElement);

    const handlePagesMenuClick = (event) => {
        setPageMenuAnchorElement(event.currentTarget);
    };
    const handleProfileMenuClick = (event) => {
        setProfileMenuAnchorElement(event.currentTarget);
    }

    const handlePagesMenuClose = () => {
        setPageMenuAnchorElement(null);
    };
    const handleProfileMenuClose = () => {
        setProfileMenuAnchorElement(null);
    }

    const menuPages = [
        {
            title: 'Начало',
            icon: <HomeIcon fontSize="small" />,
            path: '/',
        },
        {
            title: 'Обяви',
            icon: <WorkIcon fontSize="small" />,
            path: '/jobs',
        },
        {
            title: 'План',
            icon: <LocalOfferIcon fontSize="small" />,
            path: '/pricing',
        },
    ];

    const profilePages = [
        {
            title: 'Профил',
            path: '/profile',
        },
        {
            title: 'Създай обява',
            path: '/create-job',
        },
        {
            title: 'Настройки',
            path: '/settings',
        },
        {
            title: 'Изход',
            path: '/logout',
        }
    ]

    const displaySettingsHideMobileShowLaptop = {
        xs: 'none',
        sm: 'block',
    }

    const navButtonsCssStyle = {
        color: '#666666',
    };

    let isUserLoggedIn = false;
    let hasUserProfilePicture = true;


    return (
        <>
            <AppBar>
                <Toolbar sx={{ backgroundColor: 'white', color: 'white' }}>

                    <>
                        <IconButton
                            id='menu-button'
                            aria-haspopup='true'
                            aria-controls='pages-menu'
                            aria-label='pages-menu'
                            onClick={handlePagesMenuClick}
                            sx={{
                                display: {
                                    xs: 'block',
                                    sm: 'none',
                                },
                                color: 'primary.main',
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='pages-menu'
                            anchorEl={pageMenuAnchorElement}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={isPageMenuOpen}
                            onClose={handlePagesMenuClose}
                        >
                            {menuPages.map((page) => (
                                <Link key={page.title} to={page.path} onClick={handlePagesMenuClose}>
                                    <MenuItem>{page.title}</MenuItem>
                                </Link>
                            ))}
                        </Menu>

                        <Box sx={{
                            display: displaySettingsHideMobileShowLaptop,
                        }}>
                            <ButtonGroup variant='' aria-label='button group'>
                                {menuPages.map((page) => (
                                    <Link to={page.path} key={page.title}>
                                        <Button
                                            variant='text'
                                            sx={{
                                                ...navButtonsCssStyle
                                            }}
                                        >
                                            <Box sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                fontSize: '12px'
                                            }} >
                                                {page.icon}
                                                {page.title}
                                            </Box>
                                        </Button>
                                    </Link>
                                ))}
                            </ButtonGroup>
                        </Box>
                    </>


                    <Box sx={{
                        flexGrow: 5,
                        textAlign: 'center',
                    }}>
                        <img src={logo} height='30' alt="logo img" />
                    </Box>


                    <Box sx={{
                        marginLeft: 'auto'
                    }}>
                        {
                            isUserLoggedIn ?
                                <Avatar
                                    alt='profile-picture'
                                    sx={{ cursor: 'pointer' }}
                                    onClick={handleProfileMenuClick}
                                    src={hasUserProfilePicture ? logo : null}
                                /> :
                                <>
                                    <Button variant='outlined' onClick={() => navigate('/login')}>Вход</Button>
                                    <Button variant='contained' onClick={() => navigate('/register')} sx={{ marginLeft: 1 }}>Регистрация</Button>
                                </>
                        }
                    </Box>

                    <Menu
                        id='profile-menu'
                        anchorEl={profileMenuAnchorElement}
                        open={isProfileMenuOpen}
                        onClose={handleProfileMenuClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        {profilePages.map((page) => (
                            <Link key={page.title} to={page.path} onClick={handleProfileMenuClose}>
                                <MenuItem>{page.title}</MenuItem>
                            </Link>
                        ))}
                    </Menu>

                </Toolbar>
            </AppBar>
            <Toolbar id='navbar' sx={{ backgroundColor: '#ffffff' }} />
        </>
    )
}