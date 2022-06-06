import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Avatar, CardActions, CardMedia, Divider, FormControl, InputLabel, MenuList, Pagination, Select, Stack, TextField, Typography, Box } from '@mui/material';
import BackToTopButton from '../CommonItems/BackToTopButton';
import styles from './job-style.module.css'
import JobPreviewDialog from './JobPreviewDialog';
import Button from '@mui/material/Button';

import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import { jobs } from './test-jobs';
import { work_categories, work_type } from './work-categories';


const totalJobsCount = jobs.length;
const totalJobsPerPage = 6;
const totalPaginationPages = Math.ceil(totalJobsCount / totalJobsPerPage);

export default function JobsPage() {

    return (
        <>
            <Stack sx={{
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                },
                justifyContent: 'center',
                columnGap: 5,
                marginTop: {
                    xs: 0,
                    md: 10,
                },
            }}>
                <Stack sx={{
                    maxWidth: 400,
                    alignSelf: 'flex-start',
                    flexGrow: 1,
                    position: 'sticky',
                    // margin: 'auto',
                    top: 80
                }}>
                    <Card>
                        <CardHeader subheader='Филтър' />
                        <Divider />
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <FormControl
                                variant='standard'
                                sx={{
                                    margin: 1,
                                }}
                            >
                                <InputLabel>Категория</InputLabel>
                                <Select>
                                    {
                                        work_categories.map(work => (
                                            <MenuList key={work} value={work}>{work}</MenuList>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl
                                variant='standard'
                                sx={{
                                    margin: 1
                                }}
                            >
                                <InputLabel>Тип работа</InputLabel>
                                <Select>
                                    {
                                        work_type.map(work => (
                                            <MenuList key={work} value={work}>{work}</MenuList>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl
                                variant='standard'
                                sx={{
                                    margin: 1
                                }}
                            >
                                <InputLabel>Населено място</InputLabel>
                                <Select>
                                </Select>
                            </FormControl>
                        </CardContent>
                        <Divider />
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <ManageSearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField fullWidth id="input-with-sx" label="Търси по ключова дума" variant="standard" />
                            </Box>
                            <Button variant='contained' sx={{ marginTop: 5 }} fullWidth>Търси</Button>
                        </CardContent>
                    </Card>
                </Stack>
                <Grid
                    container
                    sx={{
                        maxWidth: 1000
                    }}
                    gap={2}
                >
                    {
                        jobs.map(job => (
                            <Grid item xs='auto' key={job.id} sx={{
                                margin: {
                                    xs: 'auto',
                                    sm: 0,
                                }
                            }}>
                                <Card sx={{ maxWidth: 320 }}>
                                    <CardHeader
                                        title={job.title}
                                        subheader={job.datePosted}
                                        avatar={
                                            <Avatar>{job.publisher.slice(0, 1)}</Avatar>
                                        }
                                    />
                                    <CardMedia
                                        component='img'
                                        height='200'
                                        image='https://source.unsplash.com/random'
                                        alt='card img'
                                    />
                                    <CardContent>
                                        <Typography variant='body2' color='text.secondary'>{job.description.slice(0, 150)}...</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <JobPreviewDialog job={job} />
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }

                </Grid>
            </Stack>

            <Stack spacing={2} sx={{ maxWidth: 1000, margin: 'auto', marginTop: 5, marginBottom: 5 }} >
                <Pagination size='large' count={totalPaginationPages} color='primary' className={styles['center-ul-items']} />
            </Stack>

            <BackToTopButton />
        </>
    )
}