import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import PersonIcon from '@mui/icons-material/Person';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../images/Rent A Hand_D1.png';

import useScreenResolution from '../hooks/useScreenResolution';



const anchor = 'right';

const UserSection = ({ isUserLoggedIn, toggleDrawer, navigate }) => {
    return (
        <Box sx={{
            marginLeft: 'auto'
        }}>
            {
                isUserLoggedIn ?
                    <IconButton onClick={toggleDrawer(anchor, true)} size='large'>
                        <PersonIcon />
                    </IconButton> :
                    <Button variant='outlined' onClick={() => navigate('/login')}>Вход</Button>
            }
        </Box>
    )
}

const MainMenuSection = ({ toggleDrawer }) => {
    return (
        <IconButton
            id='menu-button'
            aria-haspopup='true'
            aria-controls='pages-menu'
            aria-label='pages-menu'
            onClick={toggleDrawer(anchor, true)}
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
    )
}


export default function MainPageMenuDrawer({ menuItems, isUserLoggedIn, isUserSection }) {

    const navigate = useNavigate();
    const isMobile = useScreenResolution();

    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: isMobile ? 250 : 500 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {
                    menuItems.map((page) => (
                        <Link to={page.path} key={page.title}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {page.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={page.title} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
        </Box>
    );

    return (
        <>
            <Box key={anchor}>
                {
                    isUserSection ?
                        <UserSection
                            isUserLoggedIn={isUserLoggedIn}
                            toggleDrawer={toggleDrawer}
                            navigate={navigate}
                        /> :
                        <MainMenuSection toggleDrawer={toggleDrawer} />
                }
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
            </Box>
        </>
    );
}
