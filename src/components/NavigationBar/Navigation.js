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


export default function Navigation() {

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
            icon: <HomeIcon fontSize="small" />
        },
        {
            title: 'Обяви',
            icon: <WorkIcon fontSize="small" />
        },
        {
            title: 'План',
            icon: <LocalOfferIcon fontSize="small" />
        },
    ];

    const profilePages = [
        'Профил',
        'Създай обява',
        'Настройки',
        'Изход',
    ]

    const displaySettingsHideMobileShowLaptop = {
        xs: 'none',
        sm: 'block',
    }

    const navButtonsCssStyle = {
        color: '#666666',
    };

    let isUserLoggedIn = true;
    let hasUserProfilePicture = true;


    return (
        <>
            <AppBar>
                <Toolbar
                    sx={{
                        backgroundColor: '#ffffff',
                        zIndex: 2
                    }}
                    position="fixed"
                >

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
                            {menuPages.map((page) => (<MenuItem key={page.title}>{page.title}</MenuItem>))}
                        </Menu>

                        <Box sx={{
                            display: displaySettingsHideMobileShowLaptop,
                        }}>
                            <ButtonGroup variant='' aria-label='button group'>
                                {menuPages.map((page) => (
                                    <Button
                                        key={page.title}
                                        variant='text'
                                        sx={{
                                            ...navButtonsCssStyle
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '12px' }} >
                                            {page.icon}
                                            {page.title}
                                        </Box>
                                    </Button>
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
                        flexGrow: 1,
                    }}>
                        {
                            isUserLoggedIn ?
                                <Avatar
                                    alt='profile-picture'
                                    sx={{
                                        marginLeft: 'auto',
                                        cursor: 'pointer'
                                    }}
                                    onClick={handleProfileMenuClick}
                                    src={
                                        hasUserProfilePicture ?
                                            logo :
                                            null
                                    }
                                /> :
                                <Button variant='contained'>Вход</Button>
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
                        {profilePages.map((page) => (<MenuItem key={page}>{page}</MenuItem>))}
                    </Menu>

                </Toolbar>
            </AppBar>
            <Toolbar id='navbar' sx={{
                backgroundColor: '#ffffff'
            }} />
        </>
    )
}