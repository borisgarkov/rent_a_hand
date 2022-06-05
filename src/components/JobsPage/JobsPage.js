import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Avatar, Button, CardActions, CardMedia, Pagination, Stack, Typography } from '@mui/material';
import { jobs } from './test-jobs';
import BackToTopButton from '../CommonItems/BackToTopButton';
import styles from './job-style.module.css'
import JobPreviewDialog from './JobPreviewDialog';

const totalJobsCount = jobs.length;
const totalJobsPerPage = 3;
const totalPaginationPages = Math.ceil(totalJobsCount / totalJobsPerPage);

export default function JobsPage() {

    return (
        <>
            <Grid
                container
                sx={{
                    maxWidth: 1000,
                    margin: 'auto',
                    marginTop: {
                        xs: 0,
                        md: 10,
                    },
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

            <Stack spacing={2} sx={{ maxWidth: 1000, margin: 'auto', marginTop: 5, marginBottom: 5 }} >
                <Pagination size='large' count={totalPaginationPages} color='primary' className={styles.center_ul_items} />
            </Stack>

            <BackToTopButton />
        </>
    )
}