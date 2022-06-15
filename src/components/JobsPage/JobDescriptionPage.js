import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Divider, Stack, Typography, Box } from "@mui/material";
import { jobs } from './test-jobs'

import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BackToTopButton from "../CommonItems/BackToTopButton";

import { Fragment } from "react";

const job = jobs[3];

const iconMetaDataStyle = {
    color: '#666666',
};

const jobMetaData = [
    {
        icon: <WorkIcon sx={iconMetaDataStyle} />,
        text: job.jobCategory,
    },
    {
        icon: <WorkHistoryIcon sx={iconMetaDataStyle} />,
        text: job.salaryType,
    },
    {
        icon: <LocalOfferIcon sx={iconMetaDataStyle} />,
        text: job.salary,
    },
];

const flexContainerJobMetaDataStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 1,
};

export default function JobDescriptionPage() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column-reverse',
                    md: 'row',
                },
                gap: 1,
                justifyContent: 'center',
                marginTop: {
                    xs: 1,
                    md: 7,
                },
            }}>
                <Card sx={{ maxWidth: 433, alignSelf: 'flex-start', flexGrow: 1, position: 'sticky', top: 80 }}>
                    <CardHeader subheader={`Други обяви от ${job.publisher}`} />
                    {
                        jobs.map(job => (
                            <Fragment key={job.id}>
                                <CardHeader
                                    title={job.title}
                                    subheader={job.datePosted}
                                    avatar={
                                        <Avatar>{job.publisher.slice(0, 1)}</Avatar>
                                    }
                                />
                                <Divider />
                            </Fragment>
                        ))
                    }
                </Card>
                <Card sx={{ maxWidth: 676 }}>
                    <CardHeader
                        title={job.title}
                        subheader={`${job.city}`}
                    />
                    <CardMedia
                        component='img'
                        height='200'
                        image='https://source.unsplash.com/random'
                        alt='card img'
                        sx={{ marginBottom: 2 }}
                    />

                    <CardContent>
                        {
                            jobMetaData.map(x => (
                                <Stack key={x.text} sx={{ ...flexContainerJobMetaDataStyle }} marginBottom={2}>
                                    {x.icon}
                                    <Typography variant="body2">{x.text}</Typography>
                                </Stack>
                            ))
                        }

                        <Stack spacing={1} sx={{ marginTop: 5 }}>
                            <Typography variant="body2">Споделено от</Typography>
                            <Stack spacing={2} sx={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                columnGap: 2
                            }}>
                                <Avatar alt='profile img' />
                                <Typography variant="body2">{job.publisher}</Typography>
                            </Stack>
                        </Stack>
                        <Typography variant="body2" sx={{
                            marginTop: 5,
                            marginBottom: 5,
                        }}>
                            {job.description}
                        </Typography>
                        <Button variant='contained'>Свържи се</Button>
                    </CardContent>
                    <BackToTopButton />
                </Card>
            </Box>
        </>
    )
}