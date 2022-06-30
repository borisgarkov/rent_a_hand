import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

import DoneIcon from '@mui/icons-material/Done';


export default function AddressFormFreelancerRegister() {

    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const getImageUploaded = (event) => {
        let imagePath = event.target.value;
        if (imagePath) {
            setIsImageUploaded(true);
        };
    };

    const flexStyle = {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    };

    return (
        <Box sx={{ margin: { md: '30px auto' } }}>
            <Typography variant="h6" sx={{ marginBottom: 5 }}>
                Обща информация
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Име"
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Фамилия"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type='password'
                        required
                        id="password1"
                        name="password1"
                        label="Парола"
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type='password'
                        required
                        id="password2"
                        name="password2"
                        label="Потвърди парола"
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        type='email'
                        required
                        id="email"
                        name="email"
                        label="Имейл адрес"
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="Населено място"
                        fullWidth
                        autoComplete="city"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="upload-profile-image"
                        type="file"
                        onChange={getImageUploaded}
                    />
                    <Stack sx={{ ...flexStyle, flexDirection: { xs: 'column', md: 'row' } }}>
                        <label htmlFor="upload-profile-image">
                            <Button variant="outlined" component="span">
                                Избери Профилна снимка *
                            </Button>
                        </label>
                        {
                            isImageUploaded ?
                                <Stack sx={{ ...flexStyle, gap: 2 }}>
                                    <DoneIcon sx={{ color: 'green' }} />
                                    <Typography>Успешно прикачена снимка</Typography>
                                </Stack> :
                                null
                        }
                    </Stack>
                </Grid>
            </Grid>
        </Box >
    );
}