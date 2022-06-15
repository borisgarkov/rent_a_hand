import { Button, Grid, Link, Paper, Stack, TextField, Typography, Avatar } from "@mui/material";

import LockOpenIcon from '@mui/icons-material/LockOpen';

import image from '../images/working_woman.jpeg';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Всички права запазени © '}
            <Link color="inherit" href="">
                Rent A Hand
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function LoginPage() {
    return (
        <>
            <Grid container sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item sx={12} sm={8} md={5} component={Paper} >
                    <Stack sx={{ my: 8, mx: { xs: 4, md: 8 }, alignItems: 'center' }}>
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LockOpenIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Вход
                        </Typography>
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Имейл адрес'
                            name='email'
                            autoComplete='email'
                            autoFocus
                        />
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='password'
                            label='Парола'
                            name='password'
                            type='password'
                        />
                        <Button sx={{ marginTop: 5, marginBottom: 2 }} variant='contained' fullWidth>Влез</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link variant="body2" href="">Забравена парола?</Link>
                            </Grid>
                            <Grid item  >
                                <Typography variant="body2">Нямате акаунт?</Typography>
                                <Link variant="body2" href="">Регистрирайте се</Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ mt: 5 }} />
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};