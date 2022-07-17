import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Avatar, CardActions, CardMedia, Typography } from '@mui/material';
import JobPreviewDialog from './JobPreviewDialog';


export default function JobsCatalog({
    job
}) {
    return (
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
                    <Typography variant='body2' color='text.secondary'>
                        {job.description.slice(0, 150)}...
                    </Typography>
                </CardContent>
                <CardActions>
                    <JobPreviewDialog job={job} />
                </CardActions>
            </Card>
        </Grid>
    )
}