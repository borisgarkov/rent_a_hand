import { AppBar, Toolbar, Button, ButtonGroup, Stack } from "@mui/material";
import { Box } from "@mui/system";

import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';

import logo from '../images/Rent A Hand_D1.png';

import { Link, useNavigate } from 'react-router-dom';

import styles from './navbar.module.css';
import MainPageMenuDrawer from "./MainPageMenuDrawer";
import useScreenResolution from "../hooks/useScreenResolution";


export default function Navigation() {

    const navigate = useNavigate();

    const isMobile = useScreenResolution();

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
        {
            title: 'Вход',
            icon: <LoginIcon fontSize="small" />,
            path: '/login',
        },
        {
            title: 'Регистрация',
            icon: <HowToRegIcon fontSize="small" />,
            path: '/register',
        },
    ];

    const profilePages = [
        {
            title: 'Профил',
            icon: <PermIdentityIcon />,
            path: '/profile',
        },
        // {
        //     title: 'Създай обява',
        //     path: '/create-job',
        // },
        {
            title: 'Настройки',
            icon: <SettingsApplicationsIcon />,
            path: '/settings',
        },
        {
            title: 'Изход',
            icon: <LogoutIcon />,
            path: '/logout',
        }
    ]

    const navButtonsCssStyle = {
        color: '#666666',
    };

    let isUserLoggedIn = true;

    const ProfileSection = isUserLoggedIn ? <MainPageMenuDrawer
        menuItems={profilePages}
        isUserLoggedIn={isUserLoggedIn}
        isUserSection={true}
    /> : null;

    const HomeJobsPlanSection = isMobile ?
        <MainPageMenuDrawer menuItems={menuPages} isUserSection={false} /> :
        <ButtonGroup variant='' aria-label='button group'>
            {menuPages.map((page) => (
                <Link to={page.path} key={page.title}>
                    <Button variant='text' sx={{ ...navButtonsCssStyle }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            fontSize: '12px',
                            margin: '0 30px',
                        }} >
                            {page.icon}
                            {page.title}
                        </Box>
                    </Button>
                </Link>
            ))}
        </ButtonGroup>;


    return (
        <>
            <AppBar sx={{ backgroundColor: 'white' }}>
                <Toolbar sx={{
                    width: { xs: '100%', md: '1650px' },
                    margin: '0 auto',
                    justifyContent: 'space-between'
                }}>

                    <img src={logo} height={isMobile ? '20' : '30'} alt="logo img" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />

                    {
                        isMobile ?
                            <Stack sx={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                {ProfileSection}
                                {HomeJobsPlanSection}
                            </Stack> :
                            <>
                                {HomeJobsPlanSection}
                                {ProfileSection}
                            </>
                    }

                </Toolbar>
            </AppBar>
            <Toolbar id='navbar' />
        </>
    )
}