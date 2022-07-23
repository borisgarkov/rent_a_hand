import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Avatar, Box, Button, CardActionArea, Divider, IconButton, Stack, Typography } from '@mui/material';
import JobPreviewDialog from './JobPreviewDialog';
import { useState } from 'react';

import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import WorkIcon from '@mui/icons-material/Work';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import logo from '../images/Rent A Hand_D1.png';
import style from '../ProfilePage/profile-page-style.module.css';
import { fontSize } from '@mui/system';


export default function JobsCatalog({
    job
}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid item xs={12} key={job.id} sx={{
            margin: {
                xs: 'auto',
                sm: 0,
            }
        }}>
            <Card sx={{
                display: 'flex',
            }}>
                <Stack sx={{ width: { xs: '40%', sm: '30%' } }}>
                    <CardHeader
                        title='Rent A Hand'
                        subheader='ИТ'
                        avatar={<Avatar src={logo} className={style['image-style']} />}
                        titleTypographyProps={{ fontSize: { sm: '1rem' }, fontWeight: 'bold', }}
                        subheaderTypographyProps={{ fontSize: { sm: '0.875rem' } }}
                        sx={{ flexDirection: { xs: 'column', sm: 'row' }, padding: { xs: 0, sm: 2 } }}
                    />
                    <CardContent sx={{
                        display: 'flex',
                        gap: 2,
                        flexDirection: { xs: 'column', sm: 'row' },
                        paddingTop: { xs: 0, sm: 2 },
                        paddingBottom: { xs: 0, sm: 2 },
                    }}>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', cursor: 'pointer', gap: 1 }}>
                            <WorkIcon sx={{ color: 'primary.main' }} fontSize='small' />
                            <Typography variant='body2'>Всички обяви</Typography>
                        </Stack>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', cursor: 'pointer', gap: 1 }}>
                            <PersonOutlineIcon sx={{ color: 'primary.main' }} fontSize='small' />
                            <Typography variant='body2'>Профил</Typography>
                        </Stack>
                    </CardContent>
                </Stack>
                <Stack sx={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    width: '70%',
                }}>
                    <Divider orientation='vertical' flexItem />
                    <Box>
                        <CardHeader
                            title={job.title}
                            subheader={job.datePosted}
                            titleTypographyProps={{ fontSize: { xs: '0.875rem', sm: '1rem' }, fontWeight: 'bold', textOverflow: '' }}
                            subheaderTypographyProps={{ fontSize: '0.875rem' }}
                            sx={{ paddingBottom: { xs: 0, sm: 2 } }}
                        />
                        <CardContent sx={{
                            display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1, sm: 5 },
                        }}>
                            <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                                <LocationOnIcon sx={{ color: 'primary.main' }} fontSize='small' />
                                <Typography variant='body2'>{job.city}</Typography>
                            </Stack>
                            <Stack sx={{ flexDirection: 'row', gap: 1 }}>
                                <HomeRepairServiceIcon sx={{ color: 'primary.main' }} fontSize='small' />
                                <Typography variant='body2'>{job.jobCategory}</Typography>
                            </Stack>
                        </CardContent>
                    </Box>
                    <IconButton sx={{ marginLeft: 'auto' }}>
                        <BookmarkAddedIcon sx={{ color: '#f37327' }} />
                    </IconButton>
                </Stack>
                {/* <JobPreviewDialog job={job} handleClose={handleClose} open={open} /> */}
            </Card >
        </Grid >
    )
}